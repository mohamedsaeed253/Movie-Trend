//Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shows from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Details from "./pages/Details/Details";
import Login from "./pages/Sign in/Login";
import Register from "./pages/Sign in/Register";

function App() {
  // need to fix (you need to create details page)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Navbar />}>
        <Route path="/" element={<Shows />}></Route>
        <Route path="movie/:page" element={<Movies />}></Route>
        <Route path="tv/:page" element={<Series />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path=":type/:page/:id/details" element={<Details />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
