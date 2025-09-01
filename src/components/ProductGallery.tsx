import { useState } from 'react';
import type { Product } from '@/types/product.type';

export function ProductGallery({ product }: { product: Product }) {
  const [mainImage, setMainImage] = useState(product.thumbnail);

  return (
    <div className=" w-full bg-transparent relative text-gray-800 p-8">
      <div
        className="absolute inset-0 -z-10  pointer-events-none"
        style={{
          backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
        repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.06) 30px, rgba(107, 114, 128, 0.06) 31px),
        repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55, 65, 81, 0.05) 40px, rgba(55, 65, 81, 0.05) 41px),
        repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31, 41, 55, 0.04) 35px, rgba(31, 41, 55, 0.04) 36px)
      `,
        }}
      />
      <div className="bg-background z-10 p-4 border-2 rounded-2xl ">
        <img
          src={mainImage}
          alt={product.title}
          className="w-full h-64 object-contain rounded-lg mb-3 "
        />

        <div className="flex gap-2 overflow-x-auto justify-center">
          {product.images.slice(0, 3).map((img) => (
            <img
              key={img}
              src={img}
              onClick={() => setMainImage(img)}
              className={`h-16 w-16 object-cover rounded-lg cursor-pointer  hover:border-2 ${
                mainImage === img ? 'border-primary border-2' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
