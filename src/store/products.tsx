import axios from "axios";
import React, { ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string[];
}

interface ProductsContextType {
  lovelyProducts: Product[];
  products: Product[];
  addToCart: (product: Product) => void;
}

export const ProductsContext = React.createContext<ProductsContextType>({
  lovelyProducts: [],
  products: [],
  addToCart: (product: Product) => {
    console.log(`${product.name} added to cart`);
  },
});

interface ProductsProviderProps {
  children: ReactNode;
}

const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {

  const [lovelyProducts, setLovelyProducts] = React.useState<Product[]>([
    {
      id: 1,
      name: "Smartphone",
      brand: "Apple",
      price: 1300000,
      image: ["https://picsum.photos/id/29/200/360"],
    },
  ]);

  const [products, setProducts] = React.useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setLovelyProducts((prevProducts) => [...prevProducts, product]);
    console.log("Works", products);
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get<Product[]>("http://localhost:3000/products");
      setProducts(response.data);
    } catch (error) {
      alert(error);
    }
  };

  React.useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <ProductsContext.Provider value={{ lovelyProducts, addToCart, products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider