import { useState } from 'react';
import { MdOutlineImage } from 'react-icons/md';

const ChangeImage = ({
  src,
  container,
  radius,
}: {
  src: string;
  container: string;
  radius: string;
}) => {
  const [isHoverImage, setisHoverImage] = useState(false);
  return (
    <div>
      {isHoverImage ? (
        <div
          onMouseEnter={() => setisHoverImage(true)}
          onMouseLeave={() => setisHoverImage(false)}
          className="cursor-pointer"
        >
          <div className={`${container} bg-600 absolute opacity-60 ${radius}`}>
            <div className="flex justify-center items-center h-full">
              <MdOutlineImage className="w-12 h-12 text-white" />
            </div>
          </div>
          <div className={`top-0 ${container}`}>
            <img
              src={src}
              alt=""
              className={`w-full h-full object-cover ${radius}`}
            />
          </div>
        </div>
      ) : (
        <div className={container}>
          <img
            src={src}
            alt=""
            className={`w-full h-full object-cover ${radius}`}
            onMouseEnter={() => setisHoverImage(true)}
          />
        </div>
      )}
    </div>
  );
};

export default ChangeImage;
