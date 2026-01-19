import React, { Fragment } from 'react'
import type { Page } from '@/payload-types'

import { FeaturesBlock } from '@/blocks/Features/Component'
import { TestimonialsBlock } from '@/blocks/Testimonials/Component'
import { CallToActionBlock } from './CallToAction/Component'
import { FormBuilderBlock } from './FormBuilder/Component'

export const RenderBlocks = ({ blocks }: { blocks: Page['layout'] }) => {
  if (!blocks?.length) return null

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case 'features':
            return (
              <React.Fragment key={index}>
                <FeaturesBlock {...block} />
              </React.Fragment>
            )

          case 'testimonials':
            return (
              <React.Fragment key={index}>
                <TestimonialsBlock {...block} />
              </React.Fragment>
            )

          case 'cta':
            return (
              <React.Fragment key={index}>
                <CallToActionBlock {...block} />
              </React.Fragment>
            )

          case 'formBuilder':
            return (
              <React.Fragment key={index}>
                <FormBuilderBlock {...block} />
              </React.Fragment>
            )

          default:
            return null
        }
      })}
    </>
  )
}