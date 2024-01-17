'use client'
import { NextUiProvider } from "@nextui-org/react";
export function Providers({ children }) {
  return (
    <NextUiProvider>
      {children}
    </NextUiProvider>
  );
}
