import Cart from "@/pages/cart"
import Home from "@/pages/home"
import ProductSlug from "@/pages/home/slug/slug"
import NotFound from "@/pages/NotFound"
import { Route, Routes } from "react-router-dom"
import Statistics from "../pages/admin"
import Category from "../pages/category"

const Routers = () => {
  return (
    <div style={{ height: '100%', width: "100%", position: 'relative' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/admin" element={<Statistics />} />
        <Route path="/products/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductSlug />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default Routers