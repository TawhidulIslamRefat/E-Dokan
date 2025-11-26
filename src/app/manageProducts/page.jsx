import ManageProducts from "@/Components/manageProduct/manageProduct";
import PrivateRoute from "../ProtectedRoutes/ProtectedRoute";

export default function manageProducts() {
  return (
    <div>
      <PrivateRoute>
        <ManageProducts></ManageProducts>
      </PrivateRoute>
    </div>
  );
}