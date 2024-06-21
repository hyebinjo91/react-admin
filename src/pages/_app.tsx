import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  if (process.env.NODE_ENV === "development") {
    if (typeof window === "undefined") {
      (async () => {
        const { server } = await import("@/mocks/node");
        server.listen();
      })();
    } else {
      (async () => {
        const { worker } = await import("@/mocks/browser");
        worker.start();
      })();
    }
  }
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
