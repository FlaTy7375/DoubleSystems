import { useTranslatedArray } from '@/components/translate/useTranslation'; 

export default function TagsRenderer({ rawTags, limit = 0 }) {
  
  const translatedTags = useTranslatedArray(rawTags); 
  
  const tagsToRender = limit > 0 ? translatedTags.slice(0, limit) : translatedTags;

  return (
    <>
      {tagsToRender.map((tag, i) => (
        <li key={i} className="stamp">{tag}</li>
      ))}
    </>
  );
}