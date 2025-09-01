import { useProducts } from '@/hooks/useProducts';
import { useQueryParams } from '@/hooks/useQueryParams';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import type { Product } from '@/types/product.type';
import { getPageNumbers } from '@/lib/utils';
import { Button } from './ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Drawer, DrawerContent } from '@/components/ui/drawer';

import { useMediaQuery } from '@/hooks/useMediaQuery'; // ✅ شاد‌سی‌ان داره
import { ChevronRightIcon, Star } from 'lucide-react';
import { useState } from 'react';
import { ProductDetails } from './ProductDetails';

export default function ProductsList() {
  const { data, isLoading, isError } = useProducts();
  const { page, setPage } = useQueryParams();

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error loading products</p>;

  const total = data.total;
  const totalPages = Math.ceil(total / 10);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.products.map((p: Product) => (
          <div key={p.id} className="w-full rounded-xl p-3 shadow-xs">
            <img
              src={p.thumbnail}
              alt={p.title}
              className="h-50 w-full object-contain rounded-lg mb-2 scale-110"
            />

            <div className="p-3">
              <p className="font-light  line-clamp-1">{p.title}</p>
              {/* <p className="text-sm text-gray-500">{p.category}</p> */}
              <div className="flex items-center justify-between py-4">
                <p className="text-secondary font-semibold text-xl">
                  ${p.price}
                </p>
                <div className="flex gap-1 items-center">
                  <Star className="fill-amber-400 stroke-amber-400" />
                  <p className="text-amber-400 font-semibold">
                    {p.rating}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button className="flex-1 font-light">
                Add To Cart
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="size-9"
                onClick={() => setSelectedId(p.id)}
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <Pagination className="mt-6 flex justify-start">
        <PaginationContent>
          {getPageNumbers(totalPages, page).map((p, i) => (
            <PaginationItem key={i} className="cursor-pointer">
              {p === '...' ? (
                <span className="px-3 py-2 text-gray-400">...</span>
              ) : (
                <PaginationLink
                  isActive={page === p}
                  onClick={() => setPage(p as number)}
                >
                  {p}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>

      {isDesktop ? (
        <Sheet
          open={!!selectedId}
          onOpenChange={() => setSelectedId(null)}
        >
          <SheetContent
            side="right"
            className="w-[500px] sm:w-[600px] right-5 top-5 bottom-5 rounded-2xl overflow-hidden"
          >
            {/* <div className="absolute w-full h-[50px]  top-0"></div> */}
            <div className="min-h-screen w-full bg-transparent relative text-gray-800">
              {/* Zigzag Lightning - Light Pattern */}
              <div
                className="absolute inset-0 -z-10 pointer-events-none"
                style={{
                  backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
        repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.06) 30px, rgba(107, 114, 128, 0.06) 31px),
        repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55, 65, 81, 0.05) 40px, rgba(55, 65, 81, 0.05) 41px),
        repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31, 41, 55, 0.04) 35px, rgba(31, 41, 55, 0.04) 36px)
      `,
                }}
              />
              {/* Your Content/Components */}
              {selectedId && <ProductDetails id={selectedId} />}
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <Drawer
          open={!!selectedId}
          onOpenChange={() => setSelectedId(null)}
        >
          <DrawerContent>
            {selectedId && <ProductDetails id={selectedId} />}
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
}
