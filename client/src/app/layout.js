'use client'
import {  providers} from "./providers";
// import ReduxProvider from '@/reduxProvider';
import ReduxProvider from "@/redux/reduxProvider";
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


