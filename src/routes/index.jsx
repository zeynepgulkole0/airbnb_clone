import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import MainLayout from "../layouts/main";

const routes = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            // "/" I gotta go straight home with these signs, it's a special situation
            {
index: true,
element: <Home/>
            },
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
  
  
}
])

export default routes;