import { ClerkProvider } from '@clerk/nextjs'
import Provider from '@/app/provider'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import AuthWrapper from '@/components/wrapper/auth-wrapper'
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import '@/app/globals.css'


export const metadata: Metadata = {
  metadataBase: new URL("https://starter.rasmic.xyz"),
  title: {
    default: 'Code Growth',
    template: `%s | Nextjs Starter Kit`
  },
  description: 'Craft. Code. Grow. - A product-led marketing agency that uses technology and brand voice to drive growth.',
  openGraph: {
    description: 'Craft. Code. Grow. - A product-led marketing agency that uses technology and brand voice to drive growth.',
    images: ['https://yzysuicbsajmgare.public.blob.vercel-storage.com/transparent_butterfly-Ra38A77qkqg9t8YGru2FHQ5JD7L0Rg.png'],
    url: 'https://codegrowth.ai/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Growth',
    description: 'https://yzysuicbsajmgare.public.blob.vercel-storage.com/transparent_butterfly-Ra38A77qkqg9t8YGru2FHQ5JD7L0Rg.png',
    siteId: "",
    creator: "@madhukarkumar",
    creatorId: "",
    images: ['https://yzysuicbsajmgare.public.blob.vercel-storage.com/transparent_butterfly-Ra38A77qkqg9t8YGru2FHQ5JD7L0Rg.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            rel="preload"
            href="https://yzysuicbsajmgare.public.blob.vercel-storage.com/transparent_butterfly-Ra38A77qkqg9t8YGru2FHQ5JD7L0Rg.png"
            as="image"
          />
          <link
            rel="preload"
            href="https://yzysuicbsajmgare.public.blob.vercel-storage.com/transparent_butterfly-Ra38A77qkqg9t8YGru2FHQ5JD7L0Rg.png"
            as="image"
          />
        </head>
        <body className={GeistSans.className}>
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </Provider>
          <Analytics />
        </body>
      </html>
   
  )
}
