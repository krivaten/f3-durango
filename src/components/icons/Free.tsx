import * as React from "react";

function Free(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path fill="#307730" d="M40 22H8a1 1 0 01-1-1V6a1 1 0 011-1h32a1 1 0 011 1v15a1 1 0 01-1 1z" />
      <path fill="#3F8E3F" d="M43 22H5a1 1 0 01-1-1V10a1 1 0 011-1h38a1 1 0 011 1v11a1 1 0 01-1 1z" />
      <path fill="#4DA34D" d="M46 43H2a1 1 0 01-1-1V14a1 1 0 011-1h44a1 1 0 011 1v28a1 1 0 01-1 1z" />
      <path fill="#9EDB9E" d="M38 16H10a6 6 0 01-6 6v12a6 6 0 016 6h28a6 6 0 016-6V22a6 6 0 01-6-6z" />
      <circle fill="#4DA34D" cx={24} cy={28} r={7} />
      <path
        fill="#E86C60"
        d="M24 2C11.87 2 2 11.87 2 24s9.87 22 22 22 22-9.87 22-22S36.13 2 24 2zm0 4c4.243 0 8.141 1.485 11.222 3.95L9.95 35.222A17.902 17.902 0 016 24c0-9.925 8.075-18 18-18zm0 36a17.902 17.902 0 01-11.222-3.95L38.05 12.778A17.902 17.902 0 0142 24c0 9.925-8.075 18-18 18z"
      />
    </svg>
  );
}

export default Free;
