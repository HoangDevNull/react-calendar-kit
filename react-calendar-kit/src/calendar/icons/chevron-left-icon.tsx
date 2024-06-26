import * as React from 'react';
import { type SVGProps } from 'react';

const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    role="presentation"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m12.5 15-5-5 5-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export default ChevronLeftIcon;
