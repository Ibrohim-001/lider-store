import { ProductTypes } from "@/types";
import { Link } from "react-router-dom";

const ProductCard = ({ data }: ProductTypes) => {
  return (
    <Link to={'/'} className="overflow-hidden">
      <div className="relative">
        <img className="w-full h-[230px] object-cover rounded-t-[var(--radius)]"
          src={data?.image[0]}
          alt={data?.name}
        />
      </div>
      <div className="px-2">
        <h3 className="line-clamp-3">{data?.name}</h3>
        <p className="text-lg text-primary mt-1">{data?.price}</p>
      </div>
    </Link>
  )
}

export default ProductCard