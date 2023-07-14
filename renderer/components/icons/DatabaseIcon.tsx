type DatabaseIconProps = {
  size?: number;
};

export const DatabaseIcon = ({ size = 24 }: DatabaseIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4Zm6.328.17A7.61 7.61 0 0 0 20 9.053V18c0 2.21-3.582 4-8 4s-8-1.79-8-4V9.053a7.61 7.61 0 0 0 1.672 1.117C7.37 11.018 9.608 11.5 12 11.5c2.392 0 4.63-.482 6.328-1.33Z"
        fill="#33CCFF"
      />
    </svg>
  );
};
