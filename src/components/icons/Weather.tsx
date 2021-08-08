import * as React from "react";

function Weather(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path
        fill="#EFD358"
        d="M46 18h-2a1 1 0 110-2h2a1 1 0 110 2zM42.314 7.1l-1.415 1.415A1 1 0 1139.485 7.1L40.9 5.686a1 1 0 111.415 1.415zM32 2v2a1 1 0 11-2 0V2a1 1 0 112 0zM21.1 5.686l1.415 1.415A1 1 0 1121.1 8.515L19.686 7.1a1 1 0 111.415-1.415z"
      />
      <circle fill="#EFD358" cx={31} cy={17} r={10} />
      <path
        fill="#C6C6C6"
        d="M10 37c-4.963 0-9-4.037-9-9s4.037-9 9-9c.812 0 1.623.115 2.422.344A12.006 12.006 0 0123 13c4.724 0 8.962 2.767 10.9 6.998A8.894 8.894 0 0138 19c4.963 0 9 4.037 9 9s-4.037 9-9 9H10z"
      />
      <path
        fill="#42A6DD"
        d="M24 47a1 1 0 01-1-1V36a1 1 0 112 0v10a1 1 0 01-1 1zM16 43a1 1 0 01-1-1V32a1 1 0 112 0v10a1 1 0 01-1 1zM32 43a1 1 0 01-1-1V32a1 1 0 112 0v10a1 1 0 01-1 1z"
      />
    </svg>
  );
}

export default Weather;
