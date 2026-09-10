'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Sparkles, Camera } from 'lucide-react'

export interface LightboxItem {
  src: string
  alt?: string
  caption?: string
}

interface ImageLightboxContextType {
  openLightbox: (item: LightboxItem, gallery?: LightboxItem[]) => void
  closeLightbox: () => void
  isOpen: boolean
  activeItem: LightboxItem | null
}

const ImageLightboxContext = createContext<ImageLightboxContextType | undefined>(undefined)

export function useLightbox() {
  const context = useContext(ImageLightboxContext)
  if (!context) {
    throw new Error('useLightbox must be used within an ImageLightboxProvider')
  }
  return context
}

export function ImageLightboxProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<LightboxItem | null>(null)
  const [gallery, setGallery] = useState<LightboxItem[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const openLightbox = useCallback((item: LightboxItem, galleryItems?: LightboxItem[]) => {
    setActiveItem(item)
    if (galleryItems && galleryItems.length > 0) {
      setGallery(galleryItems)
      const foundIdx = galleryItems.findIndex((g) => g.src === item.src)
      setCurrentIndex(foundIdx >= 0 ? foundIdx : 0)
    } else {
      setGallery([item])
      setCurrentIndex(0)
    }
    setIsZoomed(false)
    setIsOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
    setIsZoomed(false)
  }, [])

  const handleNext = useCallback(() => {
    if (gallery.length <= 1) return
    const nextIdx = (currentIndex + 1) % gallery.length
    setCurrentIndex(nextIdx)
    setActiveItem(gallery[nextIdx])
    setIsZoomed(false)
  }, [currentIndex, gallery])

  const handlePrev = useCallback(() => {
    if (gallery.length <= 1) return
    const prevIdx = (currentIndex - 1 + gallery.length) % gallery.length
    setCurrentIndex(prevIdx)
    setActiveItem(gallery[prevIdx])
    setIsZoomed(false)
  }, [currentIndex, gallery])

  // Keyboard navigation & Esc listener + Scroll lock
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, closeLightbox, handleNext, handlePrev])

  // Global click delegate for any standard img or element with data-lightbox-src
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      // Exclude clicks inside the lightbox modal itself
      if (target.closest('#lightbox-modal')) return

      // Find closest element with data-lightbox-src or img tag
      const lightboxEl = target.closest('[data-lightbox-src]') as HTMLElement | null
      const imgEl = target.closest('img') as HTMLImageElement | null

      if (lightboxEl) {
        const src = lightboxEl.getAttribute('data-lightbox-src')
        const alt = lightboxEl.getAttribute('data-lightbox-alt') || ''
        const caption = lightboxEl.getAttribute('data-lightbox-caption') || alt
        if (src && !src.includes('logo.png')) {
          e.preventDefault()
          openLightbox({ src, alt, caption })
        }
      } else if (imgEl) {
        const src = imgEl.currentSrc || imgEl.src
        // Skip small utility icons or logos if desired, but handle normal content photos
        if (src && !src.includes('logo.png') && !src.startsWith('data:image/svg')) {
          const alt = imgEl.alt || 'Renaissance Academy Photo'
          const caption = imgEl.getAttribute('data-caption') || alt
          // Only pop up if it's not explicitly disabled
          if (!imgEl.hasAttribute('data-lightbox-ignore')) {
            e.preventDefault()
            openLightbox({ src, alt, caption })
          }
        }
      }
    }

    document.addEventListener('click', handleGlobalClick)
    return () => document.removeEventListener('click', handleGlobalClick)
  }, [openLightbox])

  return (
    <ImageLightboxContext.Provider value={{ openLightbox, closeLightbox, isOpen, activeItem }}>
      {children}

      <AnimatePresence>
        {isOpen && activeItem && (
          <motion.div
            id="lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-between p-4 md:p-6 bg-slate-950/90 backdrop-blur-md select-none"
            onClick={closeLightbox}
          >
            {/* Top Toolbar */}
            <div 
              className="w-full flex items-center justify-between text-white z-10 max-w-6xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold tracking-wide">
                <Camera className="h-4 w-4 text-accent-gold" />
                <span>
                  {gallery.length > 1 ? `Photo ${currentIndex + 1} of ${gallery.length}` : 'Image Preview'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95"
                  title={isZoomed ? 'Zoom Out' : 'Zoom In'}
                >
                  {isZoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
                </button>
                <button
                  onClick={closeLightbox}
                  className="p-2.5 rounded-full bg-white/15 hover:bg-red-600 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-md"
                  title="Close (Esc)"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Main Enlarged Image Stage */}
            <div 
              className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              {gallery.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-2 md:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-brand-primary text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-xl"
                  title="Previous Photo (Left Arrow)"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              {/* Image Container with smooth motion */}
              <motion.div
                key={activeItem.src}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: isZoomed ? 1.4 : 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                className={`relative flex items-center justify-center max-h-[78vh] max-w-[90vw] transition-transform duration-300 ${
                  isZoomed ? 'cursor-zoom-out overflow-auto' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeItem.src}
                  alt={activeItem.alt || 'Renaissance Academy'}
                  className="max-h-[75vh] max-w-[85vw] object-contain rounded-xl shadow-2xl border border-white/15"
                />
              </motion.div>

              {/* Next Button */}
              {gallery.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-2 md:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-brand-primary text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-xl"
                  title="Next Photo (Right Arrow)"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            </div>

            {/* Bottom Caption Bar */}
            <div 
              className="w-full max-w-xl text-center z-10 mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-slate-900/90 border border-white/20 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl inline-block max-w-full">
                <div className="flex items-center justify-center gap-2 text-accent-gold text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Renaissance Academy Gorakhpur</span>
                </div>
                <p className="text-white text-sm md:text-base font-semibold leading-snug">
                  {activeItem.caption || activeItem.alt || 'School Facility Preview'}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Click image to toggle zoom • Press Esc to close
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ImageLightboxContext.Provider>
  )
}
