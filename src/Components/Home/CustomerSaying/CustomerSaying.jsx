"use client";
import Image from "next/image";

export default function CustomerSaying() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Interior Designer",
      rating: 5,
      title: "Truly Impressed With The Quality",
      message:
        "Every piece feels custom-made. The craftsmanship is exceptional and the comfort is unmatched.",
      img: "/user1.jpg",
    },
    {
      id: 2,
      name: "James Carter",
      role: "Homeowner",
      rating: 5,
      title: "Seamless Shopping Experience",
      message:
        "From browsing to delivery, everything was smooth and professional. The sofa looks amazing in our living room.",
      img: "/user2.jpg",
    },
    {
      id: 3,
      name: "Emily Zhao",
      role: "Eco-conscious Blogger",
      rating: 5,
      title: "Stylish & Sustainable Space Beautifully",
      message:
        "Love that I can decorate my space beautifully without compromising on sustainability.",
      img: "/user3.jpg",
    },
  ];

  return (
    <section className="py-20 w-10/12 mx-auto">
      <h2 className="text-center text-sm tracking-[4px] text-yellow-600">
        REAL STORIES WITH OUR FURNITURE
      </h2>
      <h1 className="text-center text-3xl font-bold mt-2">
        What Our Customers Are Saying
      </h1>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div
            key={r.id}
            className=" bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition"
          >
            <div className="flex gap-1 text-yellow-500">
              {"★".repeat(r.rating)}
            </div>

            <h3 className="text-xl font-semibold mt-4">{r.title}</h3>
            <p className="text-gray-600 mt-3">{r.message}</p>

            <div className="flex items-center gap-4 mt-6">
              <Image
                src={r.img}
                alt={r.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold">{r.name}</h4>
                <p className="text-sm text-gray-500">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
