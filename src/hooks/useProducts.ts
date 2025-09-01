import { useQuery } from '@tanstack/react-query';
import { useQueryParams } from './useQueryParams';
import type { ProductsResponse } from '@/types/product.type';

const LIMIT = 10;

async function fetchProducts({
  page,
  category,
}: {
  page: number;
  category: string;
}): Promise<ProductsResponse> {
  const skip = (page - 1) * LIMIT;

  let url = `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`;

  if (category) {
    url = `https://dummyjson.com/products/category/${category}?limit=${LIMIT}&skip=${skip}`;
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export function useProducts() {
  const { page, category } = useQueryParams();

  return useQuery<ProductsResponse>({
    queryKey: ['products', page, category],
    queryFn: () => fetchProducts({ page, category }),
    placeholderData: (prev) => prev,
    // keepPreviousData: true,
  });
}
