'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {
  const path = usePathname();
  const date = new Date().getFullYear();
  return (
    <div className="flex items-center justify-center pb-4">
      {path.startsWith('/chat') ? null : (
        <footer>
          <p className="text-xs">{date} © Sonu Sahu. All Rights Reserved.</p>
        </footer>
      )}
    </div>
  );
};

export default Footer;
