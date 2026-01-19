import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
// import { s3Storage } from '@payloadcms/storage-s3'
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob"

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages';
import { getServerSideURL } from './utilities/getURL'
import { Header } from './components/Header/config'
import { FormSubmissions } from './collections/FormSubmissions'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [Header],
  collections: [Pages, FormSubmissions, Users, Media],
  cors: [getServerSideURL()].filter(Boolean),
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [
    // s3Storage({
    //   collections: {
    //     media: true,
    //   },
    //   bucket: process.env.AWS_S3_BUCKET || "",
    //   config: {
    //     region: process.env.AWS_REGION,
    //     credentials: {
    //       accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    //       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    //     },
    //   },
    // }),
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true
      },
      token: process.env.BLOB_READ_WRITE_TOKEN
    })
  ],
  localization: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
    fallback: true,
  },
})
