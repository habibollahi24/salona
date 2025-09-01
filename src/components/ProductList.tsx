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
import {
  // Drawer,
  // DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

// import { useMediaQuery } from '@/hooks/useMediaQuery'; // ✅ شاد‌سی‌ان داره
import {
  BookmarkIcon,
  ChevronRightIcon,
  HeartIcon,
  ShoppingCartIcon,
  Star,
} from 'lucide-react';
import { useState } from 'react';
import { ProductDetails } from './ProductDetails';

export default function ProductsList() {
  const { data, isLoading, isError } = useProducts();
  const { page, setPage } = useQueryParams();

  const [selectedId, setSelectedId] = useState<number | null>(null);
  // const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error loading products</p>;

  const total = data.total;
  const totalPages = Math.ceil(total / 10);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.products.map((p: Product) => (
          <div
            key={p.id}
            className="w-full rounded-xl p-3 shadow-xs relative"
          >
            <div className="absolute bg-secondary px-2 py-1 rounded-2xl">
              {Math.round(p.discountPercentage)} % OFF
            </div>
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
                <ShoppingCartIcon />
              </Button>

              <Button variant="ghost" size="icon" className="size-9 ">
                <HeartIcon className="" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="size-9"
              >
                <BookmarkIcon />
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
            <div className="bg-red-50 border-dashed border-red-300 border-1 text-center rounded-md my-2 py-1 text-xs">
              {p.stock > 0 ? (
                <p>{p.stock} In Stock</p>
              ) : (
                <p>Out of Stock</p>
              )}
              <p>{p.shippingInformation}</p>
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
      <Sheet
        open={!!selectedId}
        onOpenChange={() => setSelectedId(null)}
      >
        <SheetContent
          side="right"
          className="pb-8 w-[90%]  md:right-5 md:top-5 md:bottom-5 rounded-2xl overflow-auto 
            [&::-webkit-scrollbar]:[width:10px]
            [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-md "
        >
          <DrawerHeader className="hidden">
            <DrawerTitle />
            <DrawerDescription />
          </DrawerHeader>
          {selectedId && <ProductDetails id={selectedId} />}
        </SheetContent>
      </Sheet>
    </div>
  );
}
