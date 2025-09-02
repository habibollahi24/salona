import CategoryDesktopAccordion from '@/components/CategoryDesktopAccordion';
import CategoryMobileDrawer from '@/components/CategoryMobileDrawer';
import ProductsList from '@/components/ProductList';

export default function HomePage() {
  return (
    <div className="max-w-[1300px] mx-auto py-4 px-2">
      <div className="grid grid-cols-12 gap-4">
        <div className="hidden md:block md:col-span-2 ">
          <CategoryDesktopAccordion />
        </div>
        <div className="col-span-12 md:col-span-10 ">
          <CategoryMobileDrawer />
          <ProductsList />
        </div>
      </div>
    </div>
  );
}
