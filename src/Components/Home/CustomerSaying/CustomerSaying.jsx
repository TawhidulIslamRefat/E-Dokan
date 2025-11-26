"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function CustomerSaying() {
  const reviews = [
    { id: 1, name: "Sarah Mitchell", role: "Interior Designer", rating: 5, title: "Truly Impressed", message: "Every piece feels custom-made. Exceptional craftsmanship.", img: "https://qx-plank.myshopify.com/cdn/shop/files/testimonials1.gif?v=1738514384&width=300" },
    { id: 2, name: "James Carter", role: "Homeowner", rating: 5, title: "Seamless Shopping", message: "From browsing to delivery, everything was smooth.", img: "https://qx-plank.myshopify.com/cdn/shop/files/testimonials2.gif?v=1738514383&width=300" },
    { id: 3, name: "Emily Zhao", role: "Blogger", rating: 5, title: "Stylish & Sustainable", message: "Decorate beautifully without compromising sustainability.", img: "https://qx-plank.myshopify.com/cdn/shop/files/testimonials3.gif?v=1738514384&width=300" },
    { id: 4, name: "John Smith", role: "Interior Designer", rating: 5, title: "Amazing Quality", message: "Furniture quality exceeded my expectations.", img: "https://qx-plank.myshopify.com/cdn/shop/files/testimonials4.gif?v=1738514384&width=300" },
    { id: 5, name: "Maria Lopez", role: "Homeowner", rating: 4, title: "Comfortable & Stylish", message: "Very comfortable chairs and stylish design.", img: "https://qx-plank.myshopify.com/cdn/shop/files/testimonials2.gif?v=1738514383&width=300" },
    { id: 6, name: "David Kim", role: "Architect", rating: 5, title: "Perfect for Modern Homes", message: "Minimalist design fits perfectly in modern homes.", img: "https://qx-plank.myshopify.com/cdn/shop/files/testimonials1.gif?v=1738514384&width=300" },
  ];
  const groupedReviews = [];
  for (let i = 0; i < reviews.length; i += 3) {
    groupedReviews.push(reviews.slice(i, i + 3));
  }

  return (
    <section className="py-20 w-10/12 mx-auto">
      <h2 className="text-center text-sm tracking-[4px] text-yellow-600">REAL STORIES WITH OUR FURNITURE</h2>
      <h1 className="text-center text-3xl font-bold mt-2">What Our Customers Are Saying</h1>

      <div className="mt-12">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {groupedReviews.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="flex gap-6">
                {group.map((r) => (
                  <div key={r.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition flex-1">
                    <div className="flex gap-1 text-yellow-500">{"★".repeat(r.rating)}</div>
                    <h3 className="text-xl font-semibold mt-4">{r.title}</h3>
                    <p className="text-gray-600 mt-3">{r.message}</p>
                    <div className="flex items-center gap-4 mt-6">
                      <Image src={r.img} alt={r.name} width={50} height={50} className="rounded-full" />
                      <div>
                        <h4 className="font-semibold">{r.name}</h4>
                        <p className="text-sm text-gray-500">{r.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
