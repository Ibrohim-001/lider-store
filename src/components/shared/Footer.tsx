import React from "react"
import { Icon } from "./Icon";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="mt-8">
      <div className="bg-[#282F3C] py-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 gap-4">
            <div>
              <h1 className="text-white text-3xl">LIDER</h1>
              {/* <img width={120} src="public/logo.jpg" alt="" /> */}
              <div className="flex gap-4 mt-4">
                <Icon className="p-1.5 border border-[#7B7D8C] rounded-full" icon="Tg" color="#7B7D8C" width={32} height={32} />
                <Icon className="p-1.5 border border-[#7B7D8C] rounded-full" icon="Insta" color="#7B7D8C" width={32} height={32} />
                <Icon className="p-1.5 border border-[#7B7D8C] rounded-full" icon="X" color="#7B7D8C" width={32} height={32} />
              </div>
            </div>
            <div className="[&>p]:text-white [&>p]:mb-4">
              <p>Покупателям</p>
              <ul className="[&>li]:text-[#7B7D8C] [&>li]:text-sm flex flex-col gap-2">
                <li>
                  <Link to="/faq">Вопросы и ответы</Link>
                </li>
                <li>
                  <Link to="/how-to-order">Как сделать заказ на сайте</Link>
                </li>
              </ul>
            </div>
            <div className="[&>p]:text-white [&>p]:mb-4">
              <p>lider.uz</p>
              <ul className="[&>li]:text-[#7B7D8C] [&>li]:text-sm flex flex-col gap-2">
                <li>
                  <Link to="/faq">О нас</Link>
                </li>
                <li>
                  <Link to="/how-to-order">Наши магазины</Link>
                </li>
                <li>
                  <Link to="/how-to-order">Контакты</Link>
                </li>
              </ul>
            </div>
            <div className="[&>p]:text-white [&>p]:mb-4">
              <p>Информация</p>
              <ul className="[&>li]:text-[#7B7D8C] [&>li]:text-sm flex flex-col gap-2">
                <li>
                  <Link to="/faq">Статьи</Link>
                </li>
                <li>
                  <Link to="/how-to-order">Рассрочка</Link>
                </li>
                <li>
                  <Link to="/how-to-order">Оферта</Link>
                </li>
                <li>
                  <Link to="/how-to-order">Вакансии</Link>
                </li>
              </ul>
            </div>
            <div className="[&>p]:text-white [&>p]:mb-4">
              <p>Обратная связь</p>
              <Button className="mb-4" variant="outline">Написать нам</Button>
              <ul className="[&>li]:text-[#7B7D8C] [&>li]:text-sm flex flex-col gap-2">
                <li>
                  <Link to="/faq">Вопросы и ответы</Link>
                </li>
                <li>
                  <Link to="/how-to-order">Как сделать заказ на сайте</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center py-4 container mx-auto [&>p]:text-sm">
        <p>2024 © lider.uz - интернет-магазин»</p>
        <p className="flex items-center gap-2">Разработка
          <Link to='https://github.com/acadbek'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m2.96 6.056a.75.75 0 0 1 1.056-.096l.277.23c.605.504 1.12.933 1.476 1.328c.379.42.674.901.674 1.518s-.295 1.099-.674 1.518c-.356.395-.871.824-1.476 1.328l-.277.23a.75.75 0 1 1-.96-1.152l.234-.195c.659-.55 1.09-.91 1.366-1.216c.262-.29.287-.427.287-.513s-.025-.222-.287-.513c-.277-.306-.707-.667-1.366-1.216l-.234-.195a.75.75 0 0 1-.096-1.056M17.75 15a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75" clip-rule="evenodd" /></svg>
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer;
