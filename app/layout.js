import React from "react";
import "./shared/assets/css/style.css";
import "./shared/assets/css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientBootstrap from "@/app/shared/utils/ClientBootstrap";

export const metadata = {
  title: "Evelr",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      {children}
      <ClientBootstrap />
    </html>
  );
};

export default RootLayout;
