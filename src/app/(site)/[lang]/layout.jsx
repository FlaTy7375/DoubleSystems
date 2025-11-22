import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer/footer';
import Cookie from '@/components/ui/cookie/cookie'
import "../../../styles.css";

export default async function LocalizedSiteLayout({ children, params }) {
  // params.lang доступен здесь, например: params.lang === 'ru'

  const payload = await getPayload({ config: payloadConfig });
  const faq = await payload.findGlobal({ slug: 'faq', cache: 'no-store' });

  const headerData = await payload.findGlobal({
    slug: 'header',
    depth: 1,
  });

  return (
      <>
        {/* Ваши компоненты, которые обертывают страницу */}
        <Header headerData={headerData} />
        {children}
        <Footer faq={faq} />
        <Cookie />
      </>
  )
}