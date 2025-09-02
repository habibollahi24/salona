import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';

import CategoryList from './CategoryList';

export default function CategoryDesktopAccordion() {
  const [open, setOpen] = useState(false);

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
          <CategoryList open={open} />
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
