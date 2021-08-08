import * as React from "react";

function Run(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <circle cx={36} cy={7} r={5} fill="#5a7a84" />
      <path
        d="M16.937 31.073a6.447 6.447 0 01-2.143-3.14L4.536 40.953a2.5 2.5 0 003.928 3.094L18.112 31.8a6.242 6.242 0 01-1.175-.727z"
        fill="#335262"
      />
      <path
        d="M44.923 20.451a2 2 0 00-2.472-1.374l-5.512 1.575-3.97-6.768a4.319 4.319 0 00-2.106-1.965c-.055-.028-9.1-3.767-9.1-3.767a2 2 0 00-2.3.568l-5 6a2 2 0 003.074 2.56l4.063-4.869 3.392 1.4-7.5 9.375a4.449 4.449 0 001.6 6.867c.042.022 6.2 2.778 6.2 2.778l-5.6 5.952a2.5 2.5 0 003.64 3.428l8-8.5a2.5 2.5 0 00-.789-3.991l-4.964-2.24 6.167-7.71 2.53 4.244a2 2 0 002.273.909l7-2a2 2 0 001.374-2.472z"
        fill="#5a7a84"
      />
    </svg>
  );
}

export default Run;