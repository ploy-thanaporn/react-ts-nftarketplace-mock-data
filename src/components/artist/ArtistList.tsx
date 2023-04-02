// import { useEffect, useState } from 'react';
// import { UserItems } from '../../type/type';

// import { Link } from 'react-router-dom';
// const ArtistsList = () => {
//   const [user, setUser] = useState([]);

//   const url = 'http://localhost:3000/api/user';

//   useEffect(() => {
//     axios.get(url).then((res) => {
//       setUser(res.data.data);
//     });
//   }, []);

//   return (
//     <div className="h-screen mt-10 px-10">
//       <p className="text-16 mb-4">User</p>
//       <ul>
//         {user.map((item: UserItems) => (
//           <Link to={`collected/collection-list/${item._id}`} key={item._id}>
//             <li className="py-2 hover:bg-200 text-16 text-neutral-600 hover:text-neutral-800 my-1 flex items-center cursor-pointer rounded-lg">
//               <img
//                 src={item.profile_url}
//                 alt=""
//                 className="mx-2 w-7 h-7 rounded-full"
//               />
//               <span className="mx-2">{item.username}</span>
//             </li>
//           </Link>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ArtistsList;
import React from "react";

const ArtistList = () => {
  return <div>ArtistList</div>;
};

export default ArtistList;
