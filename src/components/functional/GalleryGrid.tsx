'use client'

import React from 'react'
import { ZoomableImage } from '@/components/ui/ZoomableImage'

export function GalleryGrid({ images }: { images: { src: string; caption: string }[] }) {
  const galleryList = images.map((item) => ({
    src: item.src,
    alt: item.caption,
    caption: item.caption,
  }))

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {images.map((img, idx) => (
        <ZoomableImage
          key={idx}
          src={img.src}
          alt={img.caption}
          caption={img.caption}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          containerClassName="aspect-[4/3] rounded-2xl shadow-sm border border-neutral-200/80 bg-neutral-100 hover:shadow-md hover:-translate-y-1 transition-all"
          gallery={galleryList}
        />
      ))}
    </div>
  )
}
