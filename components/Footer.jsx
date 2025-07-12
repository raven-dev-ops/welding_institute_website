import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-4">
      © {new Date().getFullYear()} Crider's Institute. All rights reserved.
    </footer>
  );
}