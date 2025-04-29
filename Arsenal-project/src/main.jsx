import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root';
import Singup from './layouts/Singup';
import Login from './layouts/Login';
import Home from './layouts/Home';
import AuthProvider from './AuthProvider/AuthProvider';
import AllEquip from './layouts/AllEquip';
import AddEquipe from './layouts/AddEquipe';
import MyEquipe from './layouts/MyEquipe';
import Private_Route from './PrivateRoute';
import UpdateProfile from './layouts/UpdateProfile';
import UpdateEquipement from './layouts/UpdateEquipement';
import DetailsEquipe from './layouts/DetailsEquipe';
import Allcards from './components/Allcards';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        children:[
          {
            path:"",
            element:<Allcards></Allcards>,
            loader:()=>fetch('http://localhost:3000/equipement'),
          },
          {
            path:"/Cricket",
            element:<Allcards></Allcards>,
            loader:()=>fetch('http://localhost:3000/equipement/category/Cricket'),
          },
          {
            path:"/Golf",
            element:<Allcards></Allcards>,
            loader:()=>fetch('http://localhost:3000/equipement/category/Golf'),
          },
          {
            path:"/football",
            element:<Allcards></Allcards>,
            loader:()=>fetch('http://localhost:3000/equipement/category/football'),
          },
          {
            path:"/basketball",
            element:<Allcards></Allcards>,
            loader:()=>fetch('http://localhost:3000/equipement/category/basketball'),
          },
        ]
      },
      {
        path:"/singup",
        element: <Singup></Singup>,
      },
      {
        path:"/login",
        element: <Login></Login>,
      },
      {
        path:"/allEquipe",
        element: <AllEquip></AllEquip>,
        loader:()=>fetch('http://localhost:3000/allequipement'),
      },
      {
        path:"/addEquipe",
        element: <Private_Route>
                <AddEquipe></AddEquipe>,
                </Private_Route>
      },
      {
        path:"/myequipe/email/:email",
        element: <Private_Route>
          <MyEquipe></MyEquipe>
        </Private_Route>,
        loader:({params})=>fetch(`http://localhost:3000/equipement/email/${params.email}`),
      },
      {
        path:`/updateEquipement/:id`,
        element: <Private_Route>
          <UpdateEquipement></UpdateEquipement>
        </Private_Route>
      },
      {
        path:"/updateProfile",
        element: <Private_Route>
          <UpdateProfile></UpdateProfile>
        </Private_Route>
      },
      {
        path:`/Details/:id`,
        element: <Private_Route>
          <DetailsEquipe></DetailsEquipe>
        </Private_Route>
      },
    ]
  },
  {
    path:"*",
    element: <h1 className='text-3xl font-bold text-center m-28'>Error 404 !</h1>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
