import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import React from "react";
import "../../../styles.css";
import News from "@/components/blocks/news/news";

export default async function Blog() {

    const payload = await getPayload({ config: payloadConfig });

    const blogGlobal = await payload.findGlobal({ slug: 'blog' });

    return (
        <>
            <News pageData={blogGlobal} />
        </>
    );
  }