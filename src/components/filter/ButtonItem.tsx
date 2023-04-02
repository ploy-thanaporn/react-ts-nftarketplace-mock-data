import { AiOutlineClose } from 'react-icons/ai';

const ButtonItem = ({
  item,
  onClose,
}: {
  item: { key: string; name: string };
  onClose: (key: string) => void;
}) => {
  return (
    <div className="mr-3">
      <button className="border-solid border-[1px] border-neutral-500 py-[15px] px-[20px] rounded-[30px] flex items-center focus:outline-none">
        <span className="text-16 2xl:text-18 text-neutral-500 mr-[10px]">
          {item.name}
        </span>
        <AiOutlineClose
          className="w-[15px] h-[15px] cursor-pointer"
          onClick={() => onClose(item.key)}
        />
      </button>
    </div>
  );
};

export default ButtonItem;
