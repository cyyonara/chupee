import { useSearchParams } from "react-router-dom";

interface ICheckedOutProduct {
  productId: number;
  quantity: number;
}

const Checkout: React.FC = () => {
  const checkedOutItems: ICheckedOutProduct[] = [];
  const [searchParams] = useSearchParams();
  const productString = searchParams.get("products");

  productString!.split("-").forEach((product): void => {
    checkedOutItems.push({ productId: parseInt(product[0]), quantity: parseInt(product[2]) });
  });

  console.log(checkedOutItems);

  return <div>Checkout</div>;
};

export default Checkout;
