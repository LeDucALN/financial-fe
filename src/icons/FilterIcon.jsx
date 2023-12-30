const FilterIcon = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size || 24}
    height={size || 24}
    x="0"
    y="0"
    viewBox="0 0 24 24"
    style={{ enableBackground: "new 0 0 512 512" }}
    xmlSpace="preserve"
  >
    <g>
      <path
        d="M18 13H6c-.6 0-1-.4-1-1s.4-1 1-1h12c.6 0 1 .4 1 1s-.4 1-1 1zM15 19H9c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zM21 7H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1z"
        fill="#000000"
        opacity="1"
        dataOriginal="#000000"
      ></path>
    </g>
  </svg>
);
export default FilterIcon;
