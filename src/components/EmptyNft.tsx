// import { useContext } from 'react';
// import { useTranslation } from 'react-i18next';
// import { FiSearch } from 'react-icons/fi';
// import { FilterContext } from '../../app/context/FilterContext';
// import empty from '../../assets/collected/empty.png';

// const EmptyNft = () => {
//   const { t } = useTranslation();
//   const { textSearch, filteredCollectedItems, openBar } =
//     useContext(FilterContext);

//   return (
//     <div
//       className={`flex flex-col justify-center lg:w-[1440px] 2xl:min-w-[2048px] ${
//         openBar ? 'lg:w-[1037px] 2xl:min-w-[1600px]' : ''
//       }`}
//     >
//       <div className="flex justify-center mt-[25.87px] lg:mt-[44.33px]">
//         <img src={empty} alt="" className="w-[80px] h-[80px]" />
//       </div>
//       <div className="flex justify-center text-center mt-[20.13px]">
//         <div className="flex items-center text-23 lg:text-28 font-semibold max-w-[360px] lg:max-w-xl text-neutral-300">
//           {textSearch !== '' && filteredCollectedItems.length === 0 ? (
//             <div className="flex items-center">
//               <FiSearch className="mr-2 w-6 h-6 text-neutral-300 cursor-pointer" />{' '}
//               <span>{`There's no “ ${textSearch} ” NFT here`}</span>
//             </div>
//           ) : (
//             <div>
//               <span>{t('txt_empty_nft')}</span>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmptyNft;

import React from "react";

const EmptyNft = () => {
  return <div>EmptyNft</div>;
};

export default EmptyNft;
