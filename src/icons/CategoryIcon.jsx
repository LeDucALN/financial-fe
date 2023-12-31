const CategoryIcon = ({ size, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size || 32}
      height={size || 32}
      x="0"
      y="0"
      viewBox="0 0 35 35"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M11.933 15.055H3.479A3.232 3.232 0 0 1 .25 11.827V3.478A3.232 3.232 0 0 1 3.479.25h8.454a3.232 3.232 0 0 1 3.228 3.228v8.349a3.232 3.232 0 0 1-3.228 3.228zM3.479 2.75a.73.73 0 0 0-.729.728v8.349a.73.73 0 0 0 .729.728h8.454a.729.729 0 0 0 .728-.728V3.478a.729.729 0 0 0-.728-.728zM11.974 34.75H3.52a3.233 3.233 0 0 1-3.229-3.229v-8.348a3.232 3.232 0 0 1 3.229-3.228h8.454a3.232 3.232 0 0 1 3.226 3.228v8.348a3.232 3.232 0 0 1-3.226 3.229zM3.52 22.445a.73.73 0 0 0-.729.728v8.348a.73.73 0 0 0 .729.729h8.454a.73.73 0 0 0 .728-.729v-8.348a.729.729 0 0 0-.728-.728zM31.522 34.75h-8.454a3.233 3.233 0 0 1-3.229-3.229v-8.348a3.232 3.232 0 0 1 3.229-3.228h8.454a3.232 3.232 0 0 1 3.228 3.228v8.348a3.232 3.232 0 0 1-3.228 3.229zm-8.454-12.3a.73.73 0 0 0-.729.728v8.348a.73.73 0 0 0 .729.729h8.454a.73.73 0 0 0 .728-.729v-8.353a.729.729 0 0 0-.728-.728zM27.3 15.055a7.4 7.4 0 1 1 7.455-7.4 7.437 7.437 0 0 1-7.455 7.4zm0-12.3a4.9 4.9 0 1 0 4.955 4.9A4.935 4.935 0 0 0 27.3 2.75z"
          fill="#000000"
          opacity="1"
          class=""
        ></path>
      </g>
    </svg>
  );
};
export default CategoryIcon;
