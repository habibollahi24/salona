import { useQuery } from '@tanstack/react-query';
import type { Product } from '@/types/product.type';

async function fetchProduct(id: number): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}

export function useProduct(id?: number) {
  return useQuery<Product>({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id!),
    enabled: !!id, // Only run the query if id is defined
  });
}
