import React from 'react'
import Image from 'next/image'
import type { Page } from '@/payload-types'

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { title, subtitle, heroImage } = props

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden animate-hero">
      {/* Background Image */}
      {heroImage && typeof heroImage === 'object' && (
        <Image
          src={heroImage.url || ''}
          alt={heroImage.alt || ''}
          fill
          priority
          className="object-cover -z-1"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/0 z-0" />

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        {title && <h1 className="text-4xl mb-4">{title}</h1>}
        {subtitle && <p className="text-xl">{subtitle}</p>}
      </div>
    </section>
  )
}
