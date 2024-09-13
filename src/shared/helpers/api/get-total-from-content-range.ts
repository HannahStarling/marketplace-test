// Функция для извлечения общего количества из заголовка Content-Range
export const getTotalFromContentRange = (contentRange?: string | null): number => {
  if (!contentRange) return 0;
  const parts = contentRange.split('/');
  return parts.length > 1 ? Number(parts[1]) : 0;
};
