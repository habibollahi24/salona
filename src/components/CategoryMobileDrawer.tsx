import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { FilterIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useCategories } from '@/hooks/useCategories';
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'react-router';
import { useQueryParams } from '@/hooks/useQueryParams';

export default function CategoryMobileDrawer() {
  const [open, setOpen] = useState(false);
  const { data, isLoading, isError } = useCategories(open);
  const [searchParams] = useSearchParams();
  const { setCategory } = useQueryParams();
  return (
    <div className="md:hidden my-2">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button>
            Category <FilterIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Filter By Category</DrawerTitle>
            <DrawerDescription />
            <div
              className="p-4 pb-10 overflow-y-auto relative h-[300px] [&::-webkit-scrollbar]:[width:10px]
            [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-md [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%][-webkit-mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]"
            >
              {isLoading && (
                <div className="flex flex-col gap-5">
                  <Skeleton className="h-[300px] w-full" />
                </div>
              )}

              {isError && (
                <p className="text-red-500">
                  Error loading categories
                </p>
              )}

              {data && (
                <ul className="flex flex-col gap-4 ">
                  <li
                    className="text-base font-light capitalize cursor-pointer"
                    onClick={() => {
                      setOpen(false);
                      setCategory('');
                    }}
                  >
                    All
                  </li>
                  {data.map((cat) => (
                    <li
                      key={cat}
                      className={cn(
                        'text-base font-light capitalize cursor-pointer',
                        {
                          'text-primary font-medium':
                            cat === searchParams.get('category'),
                        }
                      )}
                      onClick={() => {
                        setOpen(false);
                        setCategory(cat);
                      }}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
