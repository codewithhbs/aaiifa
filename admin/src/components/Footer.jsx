import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-dark text-center py-3 shadow-md">
      <p className="text-sm font-medium tracking-wide">
         © Aaiifa {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
}
