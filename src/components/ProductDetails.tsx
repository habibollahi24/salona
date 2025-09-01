import { useProduct } from '@/hooks/useProduct';
import { Skeleton } from '@/components/ui/skeleton';
import { ProductGallery } from './ProductGallery';
import { Button } from './ui/button';
import { Star } from 'lucide-react';

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
      <div>
        <h1 className="text-3xl font-extralight mb-2">
          {data.title}
        </h1>
        <p className="text-foreground/50 mb-4">{data.description}</p>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl font-light">${data.price}</span>
          <span className="text-green-600 text-sm">
            {data.discountPercentage}% OFF
          </span>
        </div>

        <p className="text-sm ">SKU: {data.sku}</p>
        <p className="text-sm ">Stock: {data.stock}</p>
        <p className="text-sm ">Category: {data.category}</p>

        <Button className="my-4 w-full">Add to Cart</Button>

        {/* <Separator className="my-6" /> */}

        {/* مشخصات فنی */}
        <div className="space-y-2 text-xs">
          <p>
            <strong>Weight:</strong> {data.weight} kg
          </p>
          <p>
            <strong>Dimensions:</strong> {data.dimensions.width} ×{' '}
            {data.dimensions.height} × {data.dimensions.depth} cm
          </p>
          <p>
            <strong>Warranty:</strong> {data.warrantyInformation}
          </p>
          <p>
            <strong>Shipping:</strong> {data.shippingInformation}
          </p>
          <p>
            <strong>Availability:</strong> {data.availabilityStatus}
          </p>
          <p>
            <strong>Return Policy:</strong> {data.returnPolicy}
          </p>
        </div>

        {/* 🏷️ تگ‌ها - marquee */}
        {/* <div className="col-span-2 overflow-hidden whitespace-nowrap border rounded-xl bg-gray-100 my-6">
          <div className="inline-block animate-marquee py-3">
            {data.tags.map((tag, idx) => (
              <span
                key={idx}
                className="mx-6 text-gray-700 font-medium inline-block"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div> */}

        <p className="text-xl font-light my-4">Comments:</p>
        <div className="flex animate-marquee gap-6 py-4 flex-nowrap">
          {data.reviews.map((review, idx) => (
            <div
              key={idx}
              className="w-56 flex-shrink-0 bg-secondary p-4 rounded-2xl "
            >
              <div>
                <div className="text-base">{review.reviewerName}</div>
                <p className="text-sm text-gray-500">
                  {review.date.slice(0, 10)}
                </p>
              </div>
              <div>
                <p className="text-amber-500 mb-2 flex items-center gap-x-2">
                  <Star className="fill-amber-400 stroke-amber-400" />
                  <span> {review.rating}</span>
                </p>
                <p className="text-sm">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
