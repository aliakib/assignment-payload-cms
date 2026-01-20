import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'

export async function generateStaticParams() {
  // if (process.env.NEXT_PHASE === 'phase-production-build') {
  //   return []
  // }

  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Locale = 'en' | 'hi'

type Args = {
  params: Promise<{
    slug?: string
  }>,
  searchParams: Promise<{
    lang?: Locale
  }>
}

export default async function Page({ params: paramsPromise, searchParams: searchParamsPromise }: Args) {
  // const { isEnabled: draft } = await draftMode();
  const { slug = 'home' } = await paramsPromise

  const searchParams = await searchParamsPromise
  const locale: Locale = searchParams?.lang === 'hi' ? 'hi' : 'en'

  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  // const url = '/' + decodedSlug
  const page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPageBySlug({
    slug: decodedSlug,
    locale
  })

  const { hero, layout } = page

  return (
    <article className='pb-12'>
      <PageClient />
      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise, searchParams: searchParamsPromise }: Args): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise
  const searchParams = await searchParamsPromise
  const locale = searchParams?.lang === 'hi' ? 'hi' : 'en'
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const page = await queryPageBySlug({
    slug: decodedSlug,
    locale
  })

  return generateMeta({ doc: page })
}

// const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build'

const queryPageBySlug = cache(async ({ slug, locale }: { slug: string; locale: Locale }) => {
  // if (isBuildTime) {
  //   return null
  // }

  const { isEnabled: draft } = await draftMode()
  locale = locale ?? "en"

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    locale,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
