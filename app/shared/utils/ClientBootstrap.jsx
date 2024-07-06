"use client"; // This directive ensures the component is treated as a client component

import { useEffect } from "react";

const ClientBootstrap = () => {
  useEffect(() => {
    // Dynamically import Bootstrap JS only on the client side
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null; // This component does not render anything
};

export default ClientBootstrap;
