import { DeleteIcon } from "@/components/icons/icons";
import Breadcrumb from "@/components/shared/BreadCrumb";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductsContext } from "@/store/products";
import { formatPrice } from "@/utils";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

interface Product {
  name: string;
  brand: string;
  price: number;
  image: string[];
}

const Cart = () => {
  const [countOfProduct, setCountOfProduct] = React.useState(1);
  const [selectedType, setSelectedType] = React.useState("0");
  const { t } = useTranslation();

  const { lovelyProducts } = useContext(ProductsContext);

  const decrement = () => {
    setCountOfProduct((prev) => Math.max(1, prev - 1));
  };

  const increment = () => {
    setCountOfProduct((prev) => prev + 1);
  };

  const chooseType = (type: string) => {
    setSelectedType(type);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-8">
        <Breadcrumb />
        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="col-span-3">
            {lovelyProducts.map((pr: Product, index: number) => (
              <div
                key={index}
                className="px-8 py-4 border mt-4 rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-8">
                  <img
                    className="w-[100px] h-[100px] object-cover rounded-full"
                    src={pr.image[0]}
                    alt={pr.name}
                  />
                  <div>
                    <div className="flex items-center gap-6">
                      <p className="font-semibold text-[24px]">
                        {formatPrice(pr.price)} {t("сум")}
                      </p>
                      <Select onValueChange={chooseType} defaultValue="0">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select a payment plan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="0">{t("Полная оплата")}</SelectItem>
                            <SelectItem value="6">{t("6 мес")}</SelectItem>
                            <SelectItem value="9">{t("9 мес")}</SelectItem>
                            <SelectItem value="12">{t("12 мес")}</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <h3 className="text-[20px] mt-2">{pr.name}</h3>
                    <p className="text-[14px] text-gray-600 mt-2">
                      {t("Код товара")}: 9203
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[100px]">
                  <div className="p-2 cursor-pointer hover:bg-slate-100 rounded-full">
                    <DeleteIcon />
                  </div>
                  <div className="flex items-center gap-4">
                    <Button onClick={increment} variant="outline">
                      +
                    </Button>
                    <span className="font-semibold text-[18px]">
                      {countOfProduct}
                    </span>
                    <Button onClick={decrement} variant="outline">
                      -
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Card className="rounded-lg">
              <CardContent className="py-4">
                <p>{t("Ваша корзина")}</p>
                <div className="flex flex-col gap-2">
                  {lovelyProducts.map((pr: Product, idx: number) => (
                    <div key={idx} className="border p-1 rounded-lg">
                      <p>{pr.name}</p>
                      <p className="font-semibold mt-2">
                        {formatPrice(pr.price)} {t("сум")}
                      </p>
                    </div>
                  ))}
                </div>

                {selectedType !== "0" && (
                  <div className="mt-4">
                    <p className="font-semibold">
                      {t("Общий период рассрочки")}: {selectedType} {t("мес")}
                    </p>
                    <p>
                      {formatPrice(
                        Math.floor(
                          lovelyProducts.reduce(
                            (total, pr) => total + pr.price * countOfProduct,
                            0
                          ) / parseInt(selectedType)
                        )
                      )}{" "}
                      {t("сум")} x {selectedType} {t("мес")}
                    </p>
                  </div>
                )}

                <div className="mt-8">
                  <p>{t("Ваш платеж")}:</p>
                  <p>
                    {formatPrice(
                      lovelyProducts.reduce(
                        (total, pr) => total + pr.price * countOfProduct,
                        0
                      )
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
