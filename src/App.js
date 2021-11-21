import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NavigationBar from "./Pages/Shared/NavigationBar";
import AuthProvider from "./Context/AuthProvider";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
// import Products from "./Pages/Products/Products ";
import FullProfile from "./Pages/Products/FullProfile";
import Partners from "./Pages/Products/Partners";

function App() {
  return (
    
      <AuthProvider>
        <NavigationBar> </NavigationBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/fullProfile/:id" element={<FullProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    
  );
}

export default App;
