// "2024-03" -> "03/2024" ; vide -> "Présent"
export function formatMonth(s?: string): string {
  if (!s) return 'Présent';
  const [y, m] = s.split('-');
  return `${m}/${y}`;
}