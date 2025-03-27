import categoryImage3 from '@/assets/images/lider-category.png';
import categoryImage5 from '@/assets/images/lider-computer.png';
import categoryImage2 from '@/assets/images/lider-condi.png';
import categoryImage6 from '@/assets/images/lider-darmol.png';
import categoryImage4 from '@/assets/images/lider-ice.png';
import categoryImage1 from '@/assets/images/lider-phone.png';
import { Carousel, GenericCard, Hero, MorphingCard, Navbar } from "@/components/shared";
import { Card, CardTitle } from "@/components/ui/card";
import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>();
  const { t } = useTranslation();

  const products = [
    {
      name: "Wireless Headphones",
      brand: "SoundPro",
      price: 49.99,
      rating: 4,
      image: ["https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"]
    },
    {
      name: "Wireless Headphones",
      brand: "SoundPro SoundPro",
      price: 49.99,
      rating: 4,
      image: ["https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"]
    },
    {
      name: "Baseboard Buddy – Baseboard & Molding Cleaning Tool! Includes 1 Baseboard Buddy and 3 Reusable Cleaning Pad",
      brand: "Apple",
      price: 999.99,
      rating: 4,
      image: ["https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"]
    },
    {
      name: "Laptop",
      brand: "Dell",
      price: 1299.99,
      rating: 1,
      image: ["https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"]
    },
    {
      name: "O-Cedar EasyWring Microfiber Spin Mop, Bucket Floor Cleaning System, Red, Gray, Standard",
      brand: "SoundPro",
      price: 49.99,
      rating: 5,
      image: ["https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"]
    },
    {
      name: "Smartphone Smartphone Smartphone Smartphone Smartphone Smartphone Smartphone Smartphone Smartphone",
      brand: "Apple",
      price: 999.99,
      rating: 3,
      image: ["https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"]
    }
  ]

  const categoryImages = [
    { link: categoryImage1, size: '50%', bgColor: '#FF6347', title: t('Смартфоны') },
    { link: categoryImage2, size: '70%', bgColor: '#A7F432', title: t('Кондиционеры') },
    { link: categoryImage3, size: '70%', bgColor: '#FFDAB9', title: t('Телевизоры') },
    { link: categoryImage4, size: '60%', bgColor: '#FF00FF', title: t('Холодильники') },
    { link: categoryImage5, size: '70%', bgColor: '#FAD1D3', title: t('Компьютеры') },
    { link: categoryImage6, size: '50%', bgColor: '#960018', title: t('Мелкая техника для дома') },
  ]

  const generic1 = [
    {
      title: "Cleaning tools",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_2x._SY232_CB563137408_.jpg",
      alt: "Men's gift collection including toiletries and accessories"
    },
    {
      title: "Home storage",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_2x._SY232_CB563137408_.jpg",
      alt: "Women's gift collection including beauty products and accessories"
    },
    {
      title: "Home decor",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_2x._SY232_CB563137408_.jpg",
      alt: "Kids' gift collection including toys and camera"
    },
    {
      title: "Bedding",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bedding_2x._SY232_CB563137408_.jpg",
      alt: "Teen gift collection including instant camera and accessories"
    },
    {
      title: "For kids",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_2x._SY232_CB563137408_.jpg",
      alt: "Kids' gift collection including toys and camera"
    },
    {
      title: "For teens",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_2x._SY232_CB563137408_.jpg",
      alt: "Teen gift collection including instant camera and accessories"
    }
  ]

  const generic2 = [
    {
      title: "Cleaning tools",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4480_HS2_DQC_2-2_ShopbyRecipient_For-Him_Nov_1H_2x_372x232._SY232_CB543392481_.jpg",
      alt: "Men's gift collection including toiletries and accessories"
    },
    {
      title: "Cleaning tools",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4480_HS2_DQC_2-2_ShopbyRecipient_For-Him_Nov_1H_2x_372x232._SY232_CB543392481_.jpg",
      alt: "Men's gift collection including toiletries and accessories"
    },
    {
      title: "Cleaning tools",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4480_HS2_DQC_2-2_ShopbyRecipient_For-Him_Nov_1H_2x_372x232._SY232_CB543392481_.jpg",
      alt: "Men's gift collection including toiletries and accessories"
    },
    {
      title: "Home storage",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4481_HS2_DQC_2-2_ShopbyRecipient_For-Her_Nov_1H_2x_372x232._SY232_CB543392481_.jpg",
      alt: "Women's gift collection including beauty products and accessories"
    },
    {
      title: "Home decor",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4482_HS2_DQC_2-2_ShopbyRecipient_For-Kids_Nov_1H_2x_372x232._SY232_CB543392481_.jpg",
      alt: "Kids' gift collection including toys and camera"
    },
    {
      title: "Bedding",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4483_HS2_DQC_2-2_ShopbyRecipient_For-Teens_Nov_1H_2x_372x232._SY232_CB543392481_.jpg",
      alt: "Teen gift collection including instant camera and accessories"
    }
  ]

  const generic3 = [
    {
      title: "Phones",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Smartphone_2x._SY232_CB566164844_.jpg",
      alt: "Men's gift collection including toiletries and accessories"
    },
    {
      title: "Watches",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Watches_2x._SY232_CB566164844_.jpg",
      alt: "Women's gift collection including beauty products and accessories"
    },
    {
      title: "Headphones",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Headphone_2x._SY232_CB566164844_.jpg",
      alt: "Kids' gift collection including toys and camera"
    },
    {
      title: "Tablets",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Aug/Tablet_2x._SY232_CB566164844_.jpg",
      alt: "Teen gift collection including instant camera and accessories"
    },
    {
      title: "Projectors",
      image: "https://m.media-amazon.com/images/I/61kRNDZh8UL._AC_UY436_FMwebp_QL65_.jpg",
      alt: "Teen gift collection including instant camera and acce ssories"
    },
    {
      title: "Speakers",
      image: "https://m.media-amazon.com/images/I/61qMO3TS2RL._AC_UY436_FMwebp_QL65_.jpg",
      alt: "Teen gift collection including instant camera and acce ssories"
    },
  ]

  const generic4 = [
    {
      title: "Cleaning tools",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4480_HS2_DQC_2-2_ShopbyRecipient_For-Him_Nov_1H_2x_372x232._SY232_CB543392481_.jpg",
      alt: "Men's gift collection including toiletries and accessories"
    },
    {
      title: "Home storage",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4481_HS2_DQC_2-2_ShopbyRecipient_For-Her_Nov_1H_2x_372x232._SY232_CB543392481_.jpg",
      alt: "Women's gift collection including beauty products and accessories"
    },
    {
      title: "Home decor",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4482_HS2_DQC_2-2_ShopbyRecipient_For-Kids_Nov_1H_2x_372x232._SY232_CB543392481_.jpg",
      alt: "Kids' gift collection including toys and camera"
    },
    {
      title: "Bedding",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4483_HS2_DQC_2-2_ShopbyRecipient_For-Teens_Nov_1H_2x_372x232._SY232_CB543392481_.jpg",
      alt: "Teen gift collection including instant camera and accessories"
    }
  ]

  const generic5 = [
    {
      title: "Cleaning tools",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4480_HS2_DQC_2-2_ShopbyRecipient_For-Him_Nov_1H_2x_372x232._SY232_CB543392481_.jpg",
      alt: "Men's gift collection including toiletries and accessories"
    },
    {
      title: "Home storage",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4481_HS2_DQC_2-2_ShopbyRecipient_For-Her_Nov_1H_2x_372x232._SY232_CB543392481_.jpg",
      alt: "Women's gift collection including beauty products and accessories"
    },
    {
      title: "Home decor",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4482_HS2_DQC_2-2_ShopbyRecipient_For-Kids_Nov_1H_2x_372x232._SY232_CB543392481_.jpg",
      alt: "Kids' gift collection including toys and camera"
    },
    {
      title: "Bedding",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/HOL/GW/QuadCard/HS2/HOL24_4483_HS2_DQC_2-2_ShopbyRecipient_For-Teens_Nov_1H_2x_372x232._SY232_CB543392481_.jpg",
      alt: "Teen gift collection including instant camera and accessories"
    }
  ]

  const carouselImages = () => {
    return generic1.concat(generic2, generic3, generic4)
  }

  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(240px,1fr))] mt-6 container mx-auto">
        <GenericCard title={t('Shop for your home essentials')} products={generic1} />
        <GenericCard gridCols={2} title={t('Shop gifts by recipient')} products={generic2} />
      </div>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(240px,1fr))] mt-6 container mx-auto">
        <GenericCard title={t('Fantastic Finds for Home')} products={generic1} />
        <GenericCard gridCols={3} title={t('Top categories in Kitchen appliances')} products={generic2} />
        <GenericCard gridCols={3} title={t('Wireless Tech')} products={generic3} />
      </div>
      <Card className="mt-8 shadow-none container mx-auto p-2 border-zinc-100 dark:border-zinc-800">
        <div className="flex gap-2 text-sm text-black dark:text-white mt-0 pl-2">
          <h2 className="text-black dark:text-white mt-0">Here come Holiday Specials</h2>
          <Link to='' className="text-primary hover:underline">More...</Link>
        </div>
        <Carousel products={carouselImages()} />
      </Card>
      <div className="container mx-auto">
        <section className='grid gap-2 grid-cols-[repeat(auto-fit,minmax(240px,1fr))] mt-10'>
          {products.map((product) => (
            <MorphingCard data={product} />
          ))}
        </section>
        <section>
          <h2 className="text-2xl font-bold mt-12 text-black dark:text-white">{t("Акции и видеообзоры")}</h2>
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))] mt-6">
            <div className="border p-4 h-[330px] rounded-lg">
              <img className="w-full rounded-lg h-[230px] object-cover" src="https://placehold.co/285x230" alt="" />
              <CardTitle className="text-xl font-bold mt-2 line-clamp-1">Скидки до 40% на смартфоны Скидки до 40% на смартфоны Скидки до 40% на смартфоны</CardTitle>              <div className="flex gap-2 mt-2">
                <time className="text-gray-500 text-sm" dateTime="2024-01-01">01.01.2024</time>
                <time className="text-gray-500 text-sm" dateTime="2024-01-01">01.01.2024</time>
              </div>
            </div>
            <div className="border p-4 h-[330px] rounded-lg">
              <img className="w-full rounded-lg h-[230px] object-cover" src="https://placehold.co/285x230" alt="" />
              <CardTitle className="text-xl font-bold mt-2 line-clamp-1">Скидки до 40% на смартфоны Скидки до 40% на смартфоны Скидки до 40% на смартфоны</CardTitle>
              <div className="flex gap-2 mt-2">
                <time className="text-gray-500 text-sm" dateTime="2024-01-01">01.01.2024</time>
                <time className="text-gray-500 text-sm" dateTime="2024-01-01">01.01.2024</time>
              </div>
            </div>
            <div className="border p-4 h-[330px] rounded-lg">
              <img className="w-full rounded-lg h-[230px] object-cover" src="https://placehold.co/285x230" alt="" />
              <CardTitle className="text-xl font-bold mt-2 line-clamp-1">Скидки до 40% на смартфоны Скидки до 40% на смартфоны Скидки до 40% на смартфоны</CardTitle>              <div className="flex gap-2 mt-2">
                <time className="text-gray-500 text-sm" dateTime="2024-01-01">01.01.2024</time>
                <time className="text-gray-500 text-sm" dateTime="2024-01-01">01.01.2024</time>
              </div>
            </div>
          </div>
        </section>
        <h2 className="text-2xl font-bold mt-12 text-black dark:text-white">Категории</h2>
        <section className="flex items-start justify-between mt-6 gap-4">
          <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {categoryImages.map((item, index) => (
              <div
                key={index}
                className="group border p-4 w-[310px] h-[260px] rounded-lg cursor-pointer dark:hover:text-black"
                style={{
                  backgroundImage: `url(${item.link})`,
                  backgroundSize: item.size,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'bottom right',
                  backgroundColor: hoveredIndex === index ? item.bgColor : 'transparent',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h2 className="text-[20px] transition group-hover:text-black font-bold mb-4 text-black dark:text-white">{item.title}</h2>
              </div>
            ))}
          </div>
          <div className="border p-4 w-[310px] h-[535px] rounded-lg">
            <p className="text-2xl font-bold mb-4">{t("Люди часто ищут")}</p>
            <ul className="[&>li]:pb-2 [&>li]:mb-3 [&>li]:cursor-pointer [&>li]:border-b [&>li]:text-black dark:[&>li]:text-white">
              <li>
                <Link to="/products">Стиральные машины Premier</Link>
              </li>
              <li>
                <Link to="/products">Стиральные машины Premier</Link>
              </li>
              <li>
                <Link to="/products">Стиральные машины Premier</Link>
              </li>
              <li>
                <Link to="/products">Стиральные машины Premier</Link>
              </li>
              <li>
                <Link to="/products">Стиральные машины Premier</Link>
              </li>
              <li>
                <Link to="/products">Стиральные машины Premier</Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
