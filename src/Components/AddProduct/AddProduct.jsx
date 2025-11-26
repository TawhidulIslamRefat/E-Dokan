"use client";

import { use, useState } from "react";
import Head from "next/head";
import { AuthContext } from "@/Context/AuthContext";
import { useRouter } from "next/navigation";
export default function AddItem() {
  const { user } = use(AuthContext);
  const router = useRouter();

  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      title: e.target.title.value,
      shortDescription: e.target.shortDescription.value,
      priority: e.target.priority.value,
      price: parseFloat(e.target.price.value),
      fullDescription: e.target.fullDescription.value,
      date: e.target.date.value,
      imageUrl: e.target.image.value,
      postedBy: {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      },
    };
    fetch("https://e-dokan-server-dusky.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Property Added !",
          text: "Your product listing has been successfully posted",
          icon: "success",
          confirmButtonColor: "#FF5A3C",
        });
        router.push("/products");
      });
  };

  return (
    <div className=" py-14 min-h-screen">
      <Head>
        <title>Add Product</title>
      </Head>

      <div className="w-[95%] lg:w-3xl mx-auto bg-white  shadow-xl rounded-xl mt-20 p-5 md:p-10">
        <h1 className="text-center text-xl sm:text-2xl md:text-4xl font-bold mb-8">
          Add New <span className="text-[#A86111]">Product</span>
        </h1>

        <form onSubmit={handleAddProduct} className="w-full space-y-5">
         
          <div>
            <label className="block font-semibold mb-1 text-sm">Title</label>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full"
              placeholder="Enter title"
              required
            />
          </div>

          
          <div>
            <label className="block font-semibold mb-1 text-sm">
              Short Description
            </label>
            <input
              type="text"
              name="shortDescription"
              className="input input-bordered w-full"
              placeholder="Enter short description"
              required
            />
          </div>

          
          <div>
            <label className="block font-semibold mb-1 text-sm">
              Full Description
            </label>
            <textarea
              name="fullDescription"
              className="textarea textarea-bordered w-full"
              rows="4"
              placeholder="Enter full description"
              required
            ></textarea>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold mb-1 text-sm">Price</label>
              <input
                type="number"
                name="price"
                className="input input-bordered w-full"
                placeholder="Enter price"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-sm">Date</label>
              <input
                type="date"
                name="date"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-sm">
                Priority
              </label>
              <select name="priority" className="select select-bordered w-full">
                <option value="">Select priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

        
          <div>
            <label className="block font-semibold mb-1 text-sm">
              Image URL (optional)
            </label>
            <input
              type="text"
              name="image"
              className="input input-bordered w-full"
              placeholder="Enter image URL"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              value={user?.displayName || ""}
              className="input input-bordered w-full bg-gray-100 "
              readOnly
            />
            <input
              type="email"
              value={user?.email || ""}
              className="input input-bordered w-full bg-gray-100"
              readOnly
            />
          </div>
          
          <button
            type="submit"
            className="btn w-full bg-[#A86111] hover:bg-orange-900 text-white text-sm sm:text-lg py-2 rounded-md transition-all duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
