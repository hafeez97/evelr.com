import React from "react";
import Navigation from "@/app/shared/components/Navigation";
import Script from 'next/script'


export const metadata = {
  title: "Evelr",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
            />
            <title>{metadata.title}</title>
            {/*<Script src="/assets/js/custom.js" />*/}
        </head>
      <body>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Default Footer</footer>
      </body>
    </html>
  );
};

export default RootLayout;
