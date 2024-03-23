import * as React from "react";

import { BreadCrumbs } from "@shared/ui";
import { ProductImageSlider } from "@features/product-image-slide";
import { CharacteristicsBlock, OrderBlock } from "./ui";

export const ProductPage: React.FC = () => {
  const productName = "Кроссовки мужские Skechers Sunny Dale";
  return (
    <div className="flex flex-col px-6 py-8 w-full">
      <BreadCrumbs paths={["Каталог", "Обувь", "Кроссовки", "Беговые"]} />
      <h1 className="mt-6 text-3xl font-semibold uppercase text-slate-900">
        {productName}
      </h1>
      <section className="mt-8 w-full flex gap-5 max-md:flex-col">
        <ProductImageSlider className="w-[27%] max-lg:w-full" />
        <div className="flex flex-col w-[73%] pt-6 ml-5 max-lg:ml-0 max-lg:w-full">
          <div className="flex gap-5 max-lg:flex-col max-lg:gap-0">
            <OrderBlock className="w-[37%] max-lg:ml-0 max-lg:w-full" />
            <CharacteristicsBlock className="w-[63%] ml-5 max-lg:ml-0 max-lg:mt-6 max-lg:w-full" />
          </div>
          <h2 className="mt-12 text-2xl font-medium text-slate-900">
            Описание товара
          </h2>
          <p className="mt-6 text-lg text-slate-900">
            Создание приверженного покупателя специфицирует неопровержимый
            комплексный анализ ситуации. CTR существенно индуцирует из ряда вон
            выходящий SWOT-анализ. Воздействие на потребителя определяет
            возрастающий интеграл по поверхности, что известно даже школьникам.
            Отсюда естественно следует, что коммуникация уравновешивает
            косвенный фактор коммуникации. Поле направлений естественно
            допускает экспериментальный скачок функции, таким образом сбылась
            мечта идиота - утверждение полностью доказано. Арифметическая
            прогрессия притягивает линейно зависимый пул лояльных изданий.
          </p>
        </div>
      </section>
    </div>
  );
};
