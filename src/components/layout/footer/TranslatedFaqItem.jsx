'use client';

import React from 'react';
import { useTranslate } from '@/components/translate/useTranslation';

const TranslatedFaqItem = ({ item, index, activeItems, handleClass }) => {
    
    const question = useTranslate(item.question);

    const rawAnswer = typeof item.answer === 'string' 
        ? item.answer 
        : item.answer?.root?.children
            ?.flatMap(child => child.children?.map(c => c.text) || [])
            .join('') || '';
            
    const answer = useTranslate(rawAnswer);

    return (
        <li
            key={item.id || index}
            className={`accordeon-item ${activeItems[index] ? 'active' : ''}`}
            onClick={() => handleClass(index)}
        >
            <h2 className="accordeon-title">{question}</h2>
            <div className="accordeon-content">
                <p
                    className="accordeon-description"
                    dangerouslySetInnerHTML={{ __html: answer }}
                />
            </div>
            <button className={`decoration ${activeItems[index] ? 'active' : ''}`}></button>
        </li>
    );
};

export default TranslatedFaqItem;