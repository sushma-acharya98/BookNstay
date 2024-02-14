'use client'
import { NextUIProvider } from "@nextui-org/react";
// import "./globals.css";
export default function Providers({children}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}

