import AddItem from "@/Components/AddProduct/AddProduct";
import PrivateRoute from "../ProtectedRoutes/ProtectedRoute";



export default function addProductPage() {
  return (
    <PrivateRoute>
      <AddItem></AddItem>
    </PrivateRoute>
  );
}