import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import DynamicCase from '@/components/blocks/case1/dynamic-case';
import StaticCase1 from '@/components/blocks/case1/case-page'; 
import "../../../../styles.css";

export const dynamic = 'force-dynamic';

const STATIC_CASE_SLUGS = ['case1', 'another-static-case']; 

const getStaticCaseComponent = (slug) => {
    switch (slug) {
        case 'case1':
            return <StaticCase1 />;
        default:
            return null;
    }
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    
    const payload = await getPayload({ config: payloadConfig });

    const caseData = await payload.find({
        collection: 'cases',
        where: { slug: { equals: slug } },
        limit: 1,
        depth: 1,
    });
    
    const c = caseData.docs[0];

    if (c) {
        const seo = c.seo || {};
        const defaultTitle = `Кейс: ${c.title || c.previewTitle || slug}`;
        const defaultDescription = 'Полный обзор проекта и стратегических решений.';
        
        return {
            title: seo.title || defaultTitle,
            description: seo.description || defaultDescription,
            keywords: seo.keywords || 'портфолио, кейс, разработка, digital, solutions',
        };
    }

    if (STATIC_CASE_SLUGS.includes(slug)) {
        let staticTitle = `Кейс ${slug}`;
        let staticDescription = `Подробный обзор нашего статического проекта: ${slug}.`;

        if (slug === 'case1') {
            staticTitle = 'Case1 (Static): Платформа E-commerce';
            staticDescription = 'Полное описание статически сгенерированного E-commerce решения.';
        }
        
        return {
            title: staticTitle,
            description: staticDescription,
            keywords: `${slug}, статический кейс, портфолио, frontend`,
        };
    }
    
    return {
        title: '404 | Кейс не найден',
        description: `Запрашиваемый кейс со слагом ${slug} не существует.`,
    };
}

export default async function CasePage({ params }) {
    const { slug } = await params;
    
    const payload = await getPayload({ config: payloadConfig });

    const caseData = await payload.find({
        collection: 'cases',
        where: { slug: { equals: slug } },
        limit: 1,
        depth: 4, 
        cache: 'no-store', 
    });
    
    const caseItem = caseData.docs[0];

    if (caseItem) {
        return <DynamicCase caseData={caseItem} />;
    }
    
    if (STATIC_CASE_SLUGS.includes(slug)) {
        const StaticComponent = getStaticCaseComponent(slug);
        if (StaticComponent) {
            return StaticComponent;
        }
    }

    return (
        <div style={{ padding: '40px', textAlign: 'center', marginTop: '60px' }}>
            <h1>404 | Кейс не найден</h1>
            <p>Кейс с названием {slug} не существует.</p>
        </div>
    );
}