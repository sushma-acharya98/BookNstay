'use client'
import {  providers} from "./providers";

import ReduxProvider from "@/redux/reduxProvider";
import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ReduxProvider>
         <providers>
          {children}
          </providers>
          </ReduxProvider>
      </body>
    </html>
  )
};

