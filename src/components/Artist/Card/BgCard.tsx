function BgCard({ className = '' }) {
  return (
    <>
      <div
        className={`w-[319px] h-[255px] lg:h-[442px] ${className} absolute z-10 rounded-[12.87px]`}
      ></div>
      <div
        className={`lg:hidden w-[319px] h-[255px] ${className} absolute z-10 rounded-[12.87px]`}
      ></div>
    </>
  );
}
export default BgCard;
