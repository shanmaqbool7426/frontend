'use client';

import { Provider } from 'react-redux';
import store from '@/redux/store'; 
import '@/styles/globals.css'; 
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar />
          {children}</Provider>
      </body>
    </html>
  );
}