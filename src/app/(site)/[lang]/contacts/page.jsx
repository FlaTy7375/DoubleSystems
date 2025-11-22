import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import React from "react";
import "../../../../styles.css";
import ContactsForm from "@/components/blocks/contacts/contacts-form";

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
    const payload = await getPayload({ config: payloadConfig });

    const pageData = await payload.find({
        collection: 'pages',
        where: { slug: { equals: 'contacts' } },
        limit: 1,
        depth: 1, 
    });

    const page = pageData.docs[0];
    
    const defaultTitle = 'Контакты | Заказать консультацию | Double Systems';
    const defaultDescription = 'Свяжитесь с отделом продаж, получите бесплатную консультацию и узнайте юридические данные компании.';
    
    if (page) {
        const seo = page.seo || {};

        return {
            title: seo.title || page.title || defaultTitle,
            description: seo.description || defaultDescription,
            keywords: seo.keywords || 'контакты, телефон, почта, инн, адрес',
        };
    }
    
    return {
        title: defaultTitle,
        description: defaultDescription,
        keywords: 'контакты, телефон, почта, инн, адрес',
    };
}

export default function Contacts() {
    return (
        <ContactsForm></ContactsForm>
    );
}