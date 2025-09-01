import { useProduct } from '@/hooks/useProduct';
import { Skeleton } from '@/components/ui/skeleton';
import { ProductGallery } from './ProductGallery';

export function ProductDetails({ id }: { id: number }) {
  const { data, isLoading, isError } = useProduct(id);

  if (isLoading) {
    return (
      <div className="p-4 space-y-3 ">
        <Skeleton className="h-64 w-full rounded-lg" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-1/3" />
      </div>
    );
  }

  if (isError || !data)
    return <p className="p-4">Error loading product</p>;

  return (
    <div className="p-4 space-y-4  ">
      <ProductGallery product={data} />
      <h2 className="text-xl font-bold">{data.title}</h2>
      <p className="text-gray-600">{data.description}</p>
      <p className="text-green-600 font-semibold">${data.price}</p>
    </div>
  );
}
