export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-8 prose prose-slate dark:prose-invert space-y-8">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold text-primary">
          About Salona • Box
        </h1>
        <p className="text-sm text-muted-foreground">
          A modern beauty booking + e-commerce experience — combining
          salon appointments with a curated product shop.
        </p>
      </header>

      <section>
        <h2>Project Overview</h2>
        <p>
          <strong>Salona • Shop</strong> extends the original Salona
          booking product by adding a lightweight shop module. The
          product view supports a gallery (single + thumbnails),
          product listing with pagination & category search, and a
          modal to view single product details. Themes (light/dark)
          are supported and persisted in <code>localStorage</code>.
          The codebase uses TypeScript for strict typing throughout.
        </p>
      </section>

      <section>
        <h2>Tech Stack & Versions</h2>
        <ul>
          <li>
            <strong>React</strong> — v19
          </li>
          <li>
            <strong>React Router (react-router-dom)</strong> — v7
            (routing & modal routes)
          </li>
          <li>
            <strong>React Query</strong> — v5 (data fetching, caching,
            pagination)
          </li>
          <li>
            <strong>Tailwind CSS</strong> — v4 (utility-first styling)
          </li>
          <li>
            <strong>shadcn/ui</strong> — UI primitives (Cards,
            Buttons, Modals, etc.)
          </li>
          <li>
            <strong>TypeScript</strong> — types for API responses and
            components
          </li>
        </ul>
      </section>

      <section>
        <h2>Key Features</h2>
        <ul>
          <li>
            Product listing with client-side pagination (React Query
            v5).
          </li>
          <li>Category search </li>
          <li>
            Clickable gallery (single image + thumbnails) for each
            product.
          </li>
          <li>
            Single product detail shown in a modal (modal route via
            react-router-dom v7).
          </li>
          <li>
            Light / Dark theme toggle with persistence in{' '}
            <code>localStorage</code>.
          </li>
          <li>Reviews shown in a marquee-style carousel .</li>
          <li>Well-typed data models using TypeScript interfaces.</li>
        </ul>
      </section>

      <section>
        <h2>Architecture Highlights</h2>
        <ol>
          <li>
            <strong>Data Layer</strong>: <code>react-query</code> (v5)
            provides useQuery for lists and caching for product detail
            queries.
          </li>

          <li>
            <strong>Styling</strong>: Tailwind utilities + shadcn
            components for consistent UI. Dark mode handled via a root
            <code>class</code> (e.g., <code>class="dark"</code>).
          </li>
          <li>
            <strong>Theme Persistence</strong>: Toggle writes the
            current theme to <code>localStorage</code> and hydrates on
            app start.
          </li>
        </ol>
      </section>

      <section>
        <h2>Example TypeScript Types</h2>
        <pre className="rounded-md bg-slate-50 dark:bg-slate-800 p-4 overflow-auto">
          {`// types.ts
export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string; // ISO
  reviewerName: string;
  reviewerEmail?: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  tags?: string[];
  sku?: string;
  weight?: number;
  dimensions?: Dimensions;
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: Review[];
  returnPolicy?: string;
}`}
        </pre>
      </section>

      <section>
        <h2>Small Code Samples</h2>

        <h3>React Router (v7) — React Query (v5)</h3>
        <pre className="rounded-md bg-slate-50 dark:bg-slate-800 p-4 overflow-auto">
          {`// routes.tsx (concept)
<StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
`}
        </pre>
      </section>

      <h2>Some Screen shot</h2>
      <div className="rounded-2xl overflow-hidden shadow-lg border">
        <img
          src="/sample.JPG"
          alt="Project screenshot"
          className="w-full"
        />
      </div>

      <footer className="mt-8 text-sm text-muted-foreground">
        <p>
          Built with ❤️ — React v19, React Query v5, react-router-dom
          v7, Tailwind v4, shadcn/ui and TypeScript. If you'd like, I
          can also scaffold the ProductList + ProductDetails pages
          (with query hooks + marquee reviews) next.
        </p>
      </footer>
    </main>
  );
}
