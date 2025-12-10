import { useState, useEffect } from 'react';

/**
 * Хук для задержки обновления значения (Debouncing)
 * @param {any} value - Значение, которое нужно отложить
 * @param {number} delay - Задержка в миллисекундах
 */
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Устанавливаем таймер для обновления значения
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Очистка таймера при изменении value или unmount
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}