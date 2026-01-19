import React from 'react'
import './styles.css'
import { Header } from '@/components/Header/Component'
import { getHeader } from '@/utilities/getHeader'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const header = await getHeader();

  return (
    <html lang="en">
      <body>
        <Header data={header} />
        <main className='bg-black'>{children}</main>
      </body>
    </html>
  )
}
