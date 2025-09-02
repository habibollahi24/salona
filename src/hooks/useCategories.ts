import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '@/config';

async function fetchCategories(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/products/category-list`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export function useCategories(enabled: boolean) {
  return useQuery<string[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    enabled,
  });
}
