/**
 * @typedef {{name:string;icon:string;note:string;money:string}} SpendingItemProps
 * @type {React.FC<SpendingItemProps & React.HTMLAttributes<HTMLDivElement>>}
 */
const SpendingItem = ({ name, icon, note, money = 0, ...props }) => {
  return (
    <div
      {...props}
      className="spending-detail-list"
    >
      <div className="spending-category">
        <div className="spending-icon">
          <img
            className="w-14 h-14"
            src={`${process.env.REACT_APP_API_ENDPOINT_PRODUCT}/icons/` + icon}
            alt="icon"
          />
        </div>
        <div className="spending-info">
          <div className="spending-info-category font-medium py-[1px]">{name}</div>
          <div className="w-[150px] truncate text-[#91919F] font-medium py-[1px]">
            {note}
          </div>
        </div>
      </div>
      <div className="text-[#FD3C4A] text-lg font-semibold">
        {Number(money).toLocaleString()} đ
      </div>
    </div>
  );
};
export default SpendingItem;
