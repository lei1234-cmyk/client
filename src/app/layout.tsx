import React from 'react';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from '../lib/AntdRegistry';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '前端面试',
  description: '构建自己的题库的前端网站',
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;