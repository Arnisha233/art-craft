import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ErrorPage from "../pages/ErrorPage";
import CraftDetails from "../pages/CraftDetails";
import AddCraftItem from "../pages/AddCraftItem";
import MyArtCraftList from "../pages/MyArtCraftList";
// import AllArtCraftItems from "../pages/AllArtCraftItems";
// import UpdateCraft from "../pages/UpdateCraft";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
        index: true,
        element: <Home />,
        loader: () => fetch(`https://art-eight-pi.vercel.app/cards`),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Register />
      },
      {
        path: '/craft/:id',
        element: <CraftDetails />,
        loader: ({params}) => fetch(`https://art-eight-pi.vercel.app/card/${params.id}`),
      },
      {
        path: '/addCraftItem',
        element: <AddCraftItem />,
      },
      {
        path: '/my-art-craft-list',
       element: <MyArtCraftList />
      },
      // {
      //   path: '/updateCraft/:id',
      //   element: <UpdateCraft />,
      //   loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/craft/${params.id}`),
      // }
    ],
    },
    // {
    //   path: '/all-art-craft-items',
    //   element: <AllArtCraftItems />
    // }
  ]);

  export default router