
import {provider} from "./providers";
import "./globals.css";
export default function RootLayout({children}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <provider>
          {children}
        </provider>
      </body>
    </html>
  );
}

