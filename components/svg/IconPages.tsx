import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const IconPages: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 72 72"
    fill="currentColor"
    {...props}
  >
    <path d="m58 66h-44a5.006 5.006 0 0 1 -5-5v-50a5.006 5.006 0 0 1 5-5h44a5.006 5.006 0 0 1 5 5v50a5.006 5.006 0 0 1 -5 5zm-44-58a3 3 0 0 0 -3 3v50a3 3 0 0 0 3 3h44a3 3 0 0 0 3-3v-50a3 3 0 0 0 -3-3z" />
    <rect height="22" rx="3" width="12" x="14" y="39" />
    <rect height="22" rx="3" width="12" x="30" y="39" />
    <rect height="22" rx="3" width="12" x="46" y="39" />
    <rect height="12" rx="3" width="26" x="14" y="23" />
    <path d="m57 25h-12a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z" />
    <path d="m57 30h-12a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z" />
    <path d="m57 35h-12a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z" />
    <path d="m58 6h-44a5.006 5.006 0 0 0 -5 5v8a1 1 0 0 0 1 1h17.1a9.016 9.016 0 0 0 5.761-2.086l1.55-1.292a7.013 7.013 0 0 1 4.489-1.622h23.1a1 1 0 0 0 1-1v-3a5.006 5.006 0 0 0 -5-5zm-42 9a2 2 0 1 1 2-2 2 2 0 0 1 -2 2zm6 0a2 2 0 1 1 2-2 2 2 0 0 1 -2 2zm6 0a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z" />
  </svg>
);

export default IconPages;
