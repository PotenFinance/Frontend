interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

function ArrowDown({ width = '1em', height = '1em', color = 'black' }: IProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_127_1796" fill="white">
        <path d="M0.779053 0.325882L4.88355 4.90515L8.98804 0.325881" />
      </mask>
      <path
        d="M1.89603 -0.675293C1.3431 -1.29219 0.39477 -1.34403 -0.222122 -0.7911C-0.839014 -0.238166 -0.890863 0.710165 -0.337929 1.32706L1.89603 -0.675293ZM4.88355 4.90515L3.76656 5.90632C4.05109 6.22376 4.45725 6.40515 4.88355 6.40515C5.30984 6.40515 5.716 6.22376 6.00053 5.90632L4.88355 4.90515ZM10.105 1.32706C10.658 0.710164 10.6061 -0.238167 9.98921 -0.791101C9.37232 -1.34403 8.42399 -1.29219 7.87106 -0.675294L10.105 1.32706ZM-0.337929 1.32706L3.76656 5.90632L6.00053 3.90397L1.89603 -0.675293L-0.337929 1.32706ZM6.00053 5.90632L10.105 1.32706L7.87106 -0.675294L3.76656 3.90397L6.00053 5.90632Z"
        fill={color}
        mask="url(#path-1-inside-1_127_1796)"
      />
    </svg>
  );
}

export default ArrowDown;