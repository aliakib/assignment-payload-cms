import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'
import Link from 'next/link'


export const CallToActionBlock: React.FC<CTABlockProps> = ({ link, heading, description }) => {
  return (
    <div className="container">
      <div className="p-4 border border-border rounded-lg overflow-hidden" style={{ backgroundColor: 'rgba(15, 15, 15, 0.9)' }}>
        <div className="prose mb-2 text-xs">
          <h2>{heading}</h2>
        </div>
        <div className={`flex flex-col gap-8 md:flex-row md:justify-between md:items-center`}>

          <div className="max-w-[48rem] flex items-center">
            {description && <p className="mb-0">{description}</p>}
          </div>
          <div className="flex flex-col gap-8">
            <Link
              href={link.url || ""}
              className="border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-black transition-colors duration-200"
            >
              {link.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
