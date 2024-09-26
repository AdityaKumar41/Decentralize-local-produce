import { Link } from "@nextui-org/link";

import { Navbar } from "@/components/navbar";
import { IconShoppingBag } from "@tabler/icons-react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full py-6 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <IconShoppingBag className="h-6 w-6" />
              <p className="text-center text-sm leading-loose md:text-left">
                © 2023 LocalMarket. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                className="text-sm hover:underline underline-offset-4"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-sm hover:underline underline-offset-4"
                href="#"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
