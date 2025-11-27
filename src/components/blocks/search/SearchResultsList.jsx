import Link from 'next/link';
import { useLocalizedPath } from '@/components/translate/useLocalizedPath';

export const SearchResultsList = ({ results, onCloseSearch }) => {
    const getLocalizedPath = useLocalizedPath();

    if (!results || results.length === 0) {
        return (
            <div className="search-results-list">
                <p className="no-results">Ничего не найдено</p>
            </div>
        );
    }

    // Группируем по типу
    const groupedResults = results.reduce((acc, result) => {
        const type = result.type || 'Другое';
        if (!acc[type]) acc[type] = [];
        acc[type].push(result);
        return acc;
    }, {});

    // Иконки для разных типов
    const typeIcons = {
        'Страница': '📄',
        'Кейс': '💼', 
        'Блог': '📝',
        'Услуга': '⚙️',
        'FAQ': '❓',
        'Тег': '🏷️',
        'Медиа': '🖼️',
        'Пользователь': '👤',
        'Заявка': '📋',
        'Главная': '🏠',
        'Шапка': '🔝',
        'Глобал': '🌍',
        'Другое': '📁'
    };

    // Функция для рендеринга текста с подсветкой
    const renderHighlightedText = (text) => {
        if (!text || typeof text !== 'string') return text;
        
        return text.split('**').map((part, index) => 
            index % 2 === 1 ? (
                <mark key={index} className="search-highlight">{part}</mark>
            ) : (
                part
            )
        );
    };

    return (
        <div className="search-results-list">
            {Object.entries(groupedResults).map(([type, items]) => (
                <div key={type} className="results-group">
                    <h3 className="group-title">
                        {typeIcons[type] || '📁'} {type}
                        <span className="group-count">({items.length})</span>
                    </h3>
                    <ul className="results-group-list">
                        {items.map((item) => (
                            <li key={`${item.id}-${item.type}`} className="result-item">
                                <Link 
                                    href={getLocalizedPath(item.url)} 
                                    onClick={onCloseSearch}
                                    className="result-link"
                                >
                                    <span className="item-title">
                                        {renderHighlightedText(item.title)}
                                    </span>
                                    {item.snippet && (
                                        <div className="item-snippet">
                                            {renderHighlightedText(item.snippet)}
                                        </div>
                                    )}
                                    <div className="item-meta">
                                        <span className="item-type">{type}</span>
                                        {item.source === 'global' && (
                                            <span className="item-source">глобал</span>
                                        )}
                                        {item.rank < 0.8 && (
                                            <span className="item-relevance">низкая релевантность</span>
                                        )}
                                        {item.debug && (
                                            <span className="item-debug">
                                                {item.debug.matchType} ({Math.round(item.rank * 100)}%)
                                            </span>
                                        )}
                                    </div>
                                    <span className="item-url">{item.url}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};