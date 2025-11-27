"use client";

import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/Context/AuthContext";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";

export default function ManageProducts() {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://e-dokan-server-dusky.vercel.app/products"
        );
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

 const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "This property will be permanently removed!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#A76111",
    cancelButtonColor: "#555",
    confirmButtonText: "Yes, Delete!",
  });

  if (result.isConfirmed) {
    try {
      const res = await fetch(
        `https://e-dokan-server-dusky.vercel.app/products/${id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setProducts(products.filter((p) => p._id !== id));
        Swal.fire("Deleted!", "Property has been removed.", "success");
      } else {
        Swal.fire("Error!", "Failed to delete product.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  }
};

  if (loading || isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className=" py-8 md:py-14 min-h-screen px-4 lg:px-16">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Manage <span className="text-[#A86111]">Products</span>
      </h1>

      {products.length === 0 ? (
        <p className="text-center">No products found.</p>
      ) : (
        <>
         
          <div className="overflow-x-auto hidden lg:block">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Priority</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => (
                  <tr key={product._id}>
                    <td>{idx + 1}</td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td>{new Date(product.date).toLocaleDateString()}</td>
                    <td>{product.priority}</td>
                    <td className="flex gap-2">
                      <button
                        className="btn btn-sm btn-info"
                        onClick={() => router.push(`/products/${product._id}`)}
                      >
                        View
                      </button>
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-5 mt-10">
            {products.map((product) => (
              <div
                key={product._id}
                className="border rounded-md p-4 shadow-md"
              >
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p>Price: {product.price}</p>
                <p>Date: {new Date(product.date).toLocaleDateString()}</p>
                <p>Priority: {product.priority}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    className="btn btn-sm btn-info"
                    onClick={() => router.push(`/products/${product._id}`)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
