// src/components/ui/tags-renderer/TagsRenderer.jsx
// Убедитесь, что useTranslatedArray импортирован из вашего файла useTranslation
import { useTranslatedArray } from '@/components/translate/useTranslation'; 

// Этот компонент берет на себя ответственность за цикл useTranslate
export default function TagsRenderer({ rawTags, limit = 0 }) {
  
  // 💡 ОДИН ВЫЗОВ ХУКА ДЛЯ ВСЕГО МАССИВА
  const translatedTags = useTranslatedArray(rawTags); 
  
  const tagsToRender = limit > 0 ? translatedTags.slice(0, limit) : translatedTags;

  // Поскольку здесь нет условного return, React не будет жаловаться на динамическую длину
  return (
    <>
      {tagsToRender.map((tag, i) => (
        <li key={i} className="stamp">{tag}</li>
      ))}
    </>
  );
}