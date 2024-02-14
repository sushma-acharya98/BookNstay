
// 'use client'
// import { Inter } from 'next/font/google'

// import {Providers} from "./providers";
// const inter = Inter({ subsets: ['latin'] })
// import 'react-toastify/dist/ReactToastify.css';
// import ReduxProvider from '../redux/reduxProvider';

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" >
//       <body className={inter.className}>
//         <ReduxProvider>
//       <Providers>
//           {children}
//         </Providers>
//         </ReduxProvider>
//         </body>
//     </html>
//   )
// }

'use client'
import {  providers} from "./providers";

// import ReduxProvider from '@/reduxProvider';
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

