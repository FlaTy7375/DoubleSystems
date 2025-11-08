import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';
import Cookie from '@/components/ui/cookie/cookie'

export default async function SiteLayout({ children }) {

  const payload = await getPayload({ config: payloadConfig });
  const faq = await payload.findGlobal({ slug: 'faq', cache: 'no-store' });

  return (
      <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer faq={faq} />
        <Cookie />
      </body>
      </html>
  )
}