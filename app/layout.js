// app/layout.js
import React from "react";
import "./shared/assets/css/style.css";
import "./shared/assets/css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'flatpickr/dist/flatpickr.min.css';
import ClientBootstrap from "@/app/shared/utils/ClientBootstrap";

export const metadata = {
    title: "Evelr",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{metadata.title}</title>
        </head>
        <body>
        {children}
        <ClientBootstrap />
        </body>
        </html>
    );
};

export default RootLayout;
