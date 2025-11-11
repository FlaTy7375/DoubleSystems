import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import DynamicCase from '@/components/blocks/case1/dynamic-case';
import StaticCase1 from '@/components/blocks/case1/case-page'; 
import "../../../../styles.css";

export const dynamic = 'force-dynamic';

// 💡 Определяем слaги, которые имеют статическую реализацию на фронтенде
// Если потребуется больше статических кейсов, добавьте их сюда.
const STATIC_CASE_SLUGS = ['case1', 'another-static-case']; 

// 💡 Хелпер для получения статического компонента по слагу
const getStaticCaseComponent = (slug) => {
    switch (slug) {
        case 'case1':
            return <StaticCase1 />;
        default:
            return null;
    }
}

export default async function CasePage(props) {
  
    const { slug } = await props.params; 
    
    const payload = await getPayload({ config: payloadConfig });

    // --- 1. Попытка загрузить динамический кейс из БД ---
    const caseData = await payload.find({
        collection: 'cases',
        where: { slug: { equals: slug } },
        limit: 1,
        // depth: 2 достаточно для секций, если в блоках нет глубоких отношений
        depth: 2, 
        cache: 'no-store', 
    });
    
    const caseItem = caseData.docs[0];

    // --- 2. Логика отображения ---
    if (caseItem) {
        // Найден динамический кейс: отображаем его
        return <DynamicCase caseData={caseItem} />;
    }
    
    // Если динамический кейс не найден, проверяем, должен ли существовать статический
    if (STATIC_CASE_SLUGS.includes(slug)) {
        const StaticComponent = getStaticCaseComponent(slug);
        if (StaticComponent) {
            return StaticComponent;
        }
    }

    // Если ни динамический, ни статический кейс не найден
    return <div>Кейс **{slug}** не найден</div>; 
}