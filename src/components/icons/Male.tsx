import * as React from "react";

function Male(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path
        fill="#42A6DD"
        d="M42.004 5h-9.008A.997.997 0 0032 6.01v1.98A1 1 0 0033.003 9h3.169l-7.086 7.085A14.914 14.914 0 0020 13c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15c0-3.42-1.158-6.563-3.085-9.086L39 11.828v3.17A1 1 0 0040.01 16h1.98c.558 0 1.01-.445 1.01-.996V5.996A.995.995 0 0042.004 5zM20 39c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11-4.925 11-11 11z"
      />
    </svg>
  );
}

export default Male;
