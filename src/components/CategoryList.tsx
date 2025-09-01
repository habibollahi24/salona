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

export default function CategoryList() {
  const { setCategory } = useQueryParams();
  const [open, setOpen] = useState(false);
  const { data, isLoading, isError } = useCategories(open);

  return (
    <Accordion
      type="single"
      collapsible
      onValueChange={(val) => setOpen(val === 'item-1')}
      className="sticky top-4"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="cursor-pointer border-1  px-4">
          Categories
        </AccordionTrigger>
        <AccordionContent>
          <div
            className=" overflow-y-auto relative! h-[300px] border-l-   [&::-webkit-scrollbar]:[width:12px]
            [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-md"
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
              <div className=" w-full bg-transparent relative p-3">
                {/* Grid Background */}

                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
                    backgroundSize: '80px 50px',
                  }}
                />
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
                      className="text-base font-light capitalize cursor-pointer"
                      onClick={() => setCategory(cat)}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
