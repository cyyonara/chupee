import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  imageUrl: string;
  name: string;
  displayedPrice: string;
  quantity: number;
  description: string;
}

const ProductCard = ({ id, name, imageUrl, displayedPrice, quantity, description }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/products/${id}`);

  return (
    <div
      className="flex flex-col overflow-hidden rounded-sm p-4 sm:border sm:border-gray-300 cursor-pointer hover:shadow-md relative group"
      onClick={handleClick}
    >
      <img src={imageUrl} alt={name} className="h-[250px] object-center object-contain" />
      <div className="flex flex-col mt-auto">
        <p className="line-clamp-4 mt-3 text-sm font-[400]">{name}</p>
        <div className="flex items-end justify-between">
          <span className="mt-2 text-green-500 leading-none">{displayedPrice}</span>
          <span className="text-xs leading-none text-gray-500">({quantity})</span>
        </div>
      </div>
      <div
        className="flex flex-col absolute inset-0 bottom-0 p-4 text-xs bg-black/60 text-white opacity-0 duration-500 group-hover:opacity-100 cursor-default"
        onClick={(e: React.SyntheticEvent) => e.stopPropagation()}
      >
        <p className="line-clamp-[15]">{description}</p>
        <button
          className="bg-green-600 mt-auto p-[6px] rounded-sm duration-150 hover:bg-green-500"
          onClick={handleClick}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
