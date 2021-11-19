import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NavigationBar from "./Pages/Shared/NavigationBar";
import AuthProvider from "./Context/AuthProvider";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Products from "./Pages/Products/Products ";
import FullProfile from "./Pages/Products/FullProfile";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavigationBar> </NavigationBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/fullProfile" element={<FullProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
