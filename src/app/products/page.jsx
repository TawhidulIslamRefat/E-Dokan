"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ItemList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products") // তোমার API URL
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || product.relevantField === category)
    );
  });

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className=" w-11/12 mx-auto px-4 py-10">
      {/* Header + Search + Image */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-6">
        {/* Title + Description + Search */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left gap-4">
          <h1 className="text-4xl font-bold mb-2">Our Products</h1>
          <p className="text-gray-500 text-lg max-w-3xl">
            Explore our wide range of high-quality products carefully selected
            to suit your needs. From essential everyday items to premium
            selections, find everything you need in one place.
          </p>

          {/* Search + Category Filter */}
          <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input input-bordered w-full md:w-2/3 p-2 rounded-lg"
            />
          </div>
        </div>

        {/* Image on the right */}
        <div className="w-full lg:w-1/3 flex justify-center flex-1">
          <Image
            src="https://qx-plank.myshopify.com/cdn/shop/files/11.jpg?v=1739097813&width=1920"
            alt="Products Banner"
            width={1000}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-center py-10">All Products</h1>
      </div>
      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={400}
                height={300}
                loading="eager"
                className="rounded-lg mx-auto"
              />
              <h2 className="text-2xl font-semibold my-3">{product.title}</h2>
              <p className="text-gray-600 mb-2 font-medium">
                {product.shortDescription}
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-red-500 text-lg">
                  {product.price}
                </span>
                <span className="text-sm font-medium text-green-400 capitalize">
                  {product.priority} priority
                </span>
              </div>
              <button className="btn bg-[#A86111] hover:bg-orange-900 text-white mt-auto">
                View Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500 py-10">
          No products found for your search.
        </p>
      )}
    </div>
  );
}
