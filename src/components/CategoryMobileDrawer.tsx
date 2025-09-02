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
import CategoryList from './CategoryList';

export default function CategoryMobileDrawer() {
  const [open, setOpen] = useState(false);

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
            <CategoryList open={open} setOpen={setOpen} />
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
