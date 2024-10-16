//Libraries
import "bootstrap/dist/css/bootstrap.min.css";
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
import Details, { showLoader } from "./pages/Details/Details";
import MovieDetails, { movieLoader } from "./pages/Details/MovieDerails";
import Login from "./pages/Sign in/Login";
import Register from "./pages/Sign in/Register";

function App() {
  // need to fix (you need to create details page)
  const showRouter = (
    <Route path=":id" loader={showLoader} element={<Details />}></Route>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Navbar />}>
        <Route path="/" element={<Shows />}>
          {showRouter}
        </Route>
        <Route path="movie/:page" element={<Movies />}>
          <Route
            path=":id"
            loader={movieLoader}
            element={<MovieDetails />}
          ></Route>
        </Route>
        <Route path="tv/:page" element={<Series />}>
          {showRouter}
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
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
