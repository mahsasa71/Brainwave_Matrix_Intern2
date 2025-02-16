import Home from "../../client/src/pages/home/Home";
import Login from "../../client/src/pages/login/Login";
import Register from "../../client/src/pages/register/Register";
import ProductCategory from "./pages/productCategory/ProductCategory";
import ProductList from "./pages/ProductList";
import Deatail from "./pages/Deatail";
import Sucess from "./pages/Sucess";
import ContactUs from "./component/ContactUs";
import AboutUs from "./component/AboutUs";
import Histori from "./component/Histori";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/productcategory", element: <ProductCategory /> },
  { path: "/productlist/:subheading", element: <ProductList /> },

  { path: "/:slug", element: <Deatail /> },
  { path: "/success", element: <Sucess /> },
  { path: "/contactUs", element: <ContactUs /> },
  { path: "/aboutUs", element: <AboutUs /> },
  { path: "/history", element: <Histori /> },
];

export default routes;
