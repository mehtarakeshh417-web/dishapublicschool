import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNavbar } from "@/components/site/SiteNavbar";
import { SiteFooter } from "@/components/site/SiteFooter";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-semibold text-royal">404</h1>
        <p className="mt-3 text-muted-foreground">The page you're looking for could not be found.</p>
        <a href="/" className="mt-6 inline-flex rounded-full bg-royal px-6 py-2.5 text-sm font-medium text-white hover:bg-navy transition">Return home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl text-royal">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-full bg-royal px-6 py-2.5 text-sm font-medium text-white hover:bg-navy transition"
        >Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Disha Public School — Nurturing Leaders, Inspiring Excellence" },
      { name: "description", content: "A CISCE-affiliated senior secondary school in Ferozepur, Punjab. Since 2018, Disha Public School has cultivated academic excellence, character and global citizenship." },
      { property: "og:title", content: "Disha Public School — Nurturing Leaders, Inspiring Excellence" },
      { property: "og:description", content: "A CISCE-affiliated senior secondary school in Ferozepur, Punjab. Since 2018, Disha Public School has cultivated academic excellence, character and global citizenship." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Disha Public School — Nurturing Leaders, Inspiring Excellence" },
      { name: "twitter:description", content: "A CISCE-affiliated senior secondary school in Ferozepur, Punjab. Since 2018, Disha Public School has cultivated academic excellence, character and global citizenship." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/241f446b-d959-4423-8878-e12995b9c77e" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/241f446b-d959-4423-8878-e12995b9c77e" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background">
        <SiteNavbar />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
      </div>
      <Toaster />
      <ResourceLimitOverlay />

    </QueryClientProvider>
  );
}
