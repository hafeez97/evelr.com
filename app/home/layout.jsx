import React from "react";
import Navigation from "@/app/shared/components/Navigation";

export const metadata = {
  title: "Evelr",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
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
