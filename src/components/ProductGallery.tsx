import { useState } from 'react';
import type { Product } from '@/types/product.type';

export function ProductGallery({ product }: { product: Product }) {
  const [mainImage, setMainImage] = useState(product.thumbnail);

  return (
    <div className="bg-background p-4 border-2 rounded-2xl ">
      <img
        src={mainImage}
        alt={product.title}
        className="w-full h-64 object-contain rounded-lg mb-3 "
      />

      <div className="flex gap-2 overflow-x-auto">
        {product.images.slice(0, 3).map((img) => (
          <img
            key={img}
            src={img}
            onClick={() => setMainImage(img)}
            className={`h-16 w-16 object-cover rounded-lg cursor-pointer border ${
              mainImage === img
                ? 'border-blue-500'
                : 'border-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
