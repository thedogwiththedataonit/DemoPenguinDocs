/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Image from 'next/image'
export const metadata = {
  metadataBase: new URL('https://docs.demopenguin.com'),
  title: {
    template: '%s - DemoPenguin'
  },
  description: 'DemoPenguin: The platform for creating onboarding and user flow experiences.',
  applicationName: 'DemoPenguin',
  generator: 'Next.js',
  appleWebApp: {
    title: 'DemoPenguin'
  },
  other: {
    'msapplication-TileImage': '/penguin-facing.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://docs.demopenguin.com'
  }
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexDirection: 'row' }}>
          <Image src="/penguin-jump.gif" alt="DemoPenguin" width={30} height={30} className="object-contain" />
          <span style={{
            WebkitTextSizeAdjust: "100%",
            tabSize: 4,
            fontVariationSettings: "normal",
            WebkitTapHighlightColor: "transparent",
            backgroundImage: "linear-gradient(to bottom, #f5f5f5, #737373)",
            backgroundClip: "text",
            fontSize: "1.3rem",
            lineHeight: "2rem",
            fontWeight: 700,
            color: "transparent",
          }}>DemoPenguin Docs</span>
        </div>
      }
      // Next.js discord server
      projectLink="https://www.github.com/thedogwiththedataonit/demopenguin"
      logoLink="https://docs.demopenguin.com"
      chatLink="mailto:thomas@demopenguin.com"
      chatIcon={<Image src="/penguin-facing.png" alt="DemoPenguin" width={30} height={30} className="object-contain" style={{ imageRendering: 'pixelated', marginTop: '0px' }} />}
    />
  )
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          banner={<Banner storageKey="DemoPenguin">DemoPenguin is now in beta! 🎉</Banner>}
          navbar={navbar}
          footer={<Footer>{new Date().getFullYear()} © DemoPenguin.</Footer>}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/thedogwiththedataonit/demopenguin"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
