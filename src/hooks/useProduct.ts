import { useQuery } from '@tanstack/react-query';
import type { Product } from '@/types/product.type';
import { BASE_URL } from '@/config';

async function fetchProduct(id: number): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}

export function useProduct(id?: number) {
  return useQuery<Product>({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id!),
    enabled: !!id,
  });
}
