'use client'

import React from 'react'
import Image, { ImageProps } from 'next/image'
import { ZoomIn } from 'lucide-react'
import { useLightbox } from '@/components/providers/ImageLightboxProvider'

export interface ZoomableImageProps extends Omit<ImageProps, 'onClick'> {
  caption?: string
  containerClassName?: string
  gallery?: { src: string; alt?: string; caption?: string }[]
}

export function ZoomableImage({
  src,
  alt,
  caption,
  className = '',
  containerClassName = '',
  gallery,
  ...props
}: ZoomableImageProps) {
  const { openLightbox } = useLightbox()

  const imgSrc = typeof src === 'string' ? src : (src as { src: string }).src

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    openLightbox(
      {
        src: imgSrc,
        alt: alt || 'Renaissance Academy Image',
        caption: caption || alt || 'Renaissance Academy Campus',
      },
      gallery
    )
  }

  return (
    <div
      onClick={handleClick}
      className={`group relative cursor-pointer overflow-hidden rounded-xl ${containerClassName}`}
      title="Click to view full image"
      data-lightbox-src={imgSrc}
      data-lightbox-alt={alt || ''}
      data-lightbox-caption={caption || alt || ''}
    >
      <Image
        src={src}
        alt={alt}
        className={`transition-transform duration-500 group-hover:scale-105 ${className}`}
        {...props}
      />
      {/* Sleek Lightbox Hover Overlay */}
      <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
        <div className="bg-white/20 backdrop-blur-md border border-white/40 p-2.5 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
          <ZoomIn className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  )
}
