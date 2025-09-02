import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';
import { useCategories } from '@/hooks/useCategories';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useSearchParams } from 'react-router';
import { cn } from '@/lib/utils';

export default function CategoryList() {
  const { setCategory } = useQueryParams();
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  const { data, isLoading, isError } = useCategories(open);

  return (
    <Accordion
      type="single"
      collapsible
      onValueChange={(val) => setOpen(val === 'item-1')}
      className="sticky top-22"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="cursor-pointer">
          Categories
        </AccordionTrigger>
        <AccordionContent>
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
              <p className="text-red-500">Error loading categories</p>
            )}

            {data && (
              <ul className="flex flex-col gap-4 ">
                <li
                  className="text-base font-light capitalize cursor-pointer"
                  onClick={() => setCategory('')}
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
                    onClick={() => setCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="cursor-pointer">
          Other Filter
        </AccordionTrigger>
        <AccordionContent>Here other filter</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
