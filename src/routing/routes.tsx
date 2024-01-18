import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import App from "../App";
import AboutPage from "../components/pages/AboutPage";
import ContactPage from "../components/pages/ContactPage";
import EventPage from "../components/pages/EventPage";


const router = createBrowserRouter( [ 
    { 
        path:'/', 
        element: <App /> , 
        children: [ 
            { path: '', element: <HomePage /> },
            {path:'about', element: <AboutPage/>},
            {path:'contact', element: <ContactPage/>},
            {path:'events', element: <EventPage/>},
           // {path:'*', element: <NotFound />}
       
        ]




    }







])


export default router