import '@/themes/globals.css';

import type { ReactElement } from 'react';
import type { AppProps } from 'next/app';

import { fontMono, fontSans } from '@/config/fonts';
import { cn } from '@/lib/utils';

export default function Nextra({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <div suppressHydrationWarning className={cn('font-sans antialiased', fontSans.variable, fontMono.variable)}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
