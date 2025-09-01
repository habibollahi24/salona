import CategoryList from '@/components/CategoryList';
import ProductsList from '@/components/ProductList';

export default function HomePage() {
  return (
    <div className="max-w-[1200px] mx-auto py-4 px-2">
      <div className="grid grid-cols-12 gap-3">
        <div className="hidden md:block md:col-span-3 ">
          <CategoryList />
        </div>
        <div className="col-span-12 md:col-span-9 ">
          <ProductsList />
        </div>
      </div>
    </div>
  );
}
