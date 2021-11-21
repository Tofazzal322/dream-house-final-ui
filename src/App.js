import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NavigationBar from "./Pages/Shared/NavigationBar";
import AuthProvider from "./Context/AuthProvider";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import FullProfile from "./Pages/Products/FullProfile";
import Partners from "./Pages/Products/Partners";
import PrivateRoute from "./Pages/Home/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome";
import AddPartners from "./Pages/Dashboard/AddPartners";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Deposit from "./Pages/Dashboard/Deposit";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import AdminRoute from "./Pages/Dashboard/AdminRoute";
import Products from "./Pages/Products/Products ";

function App() {
  return (
    <AuthProvider>
      <NavigationBar> </NavigationBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/partners"
          element={
            <PrivateRoute>
              <Partners />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/addPartners" element={<AddPartners />} />
          <Route path="/dashboard/myProfile" element={<MyProfile />} />
          <Route path="/dashboard/deposit" element={<Deposit />} />
          <Route
            path="/dashboard/makeAdmin"
            element={
              <AdminRoute>
                <MakeAdmin />
              </AdminRoute>
            }
          />
        </Route>

        <Route path="/fullProfile/:id" element={<FullProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
