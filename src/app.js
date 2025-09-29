import {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./components/body";
import FooterComponent from "./components/footer";
import { LOGO_URL } from "./common/contents";
import {useState} from "react" 
import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";
import About from "./components/about";
import Error from "./components/error";
import ContactUs from "./components/contact-us";
import Restaurants from "./components/restaurants";
// import Groceries from "./components/groceries";
import useOnlineStatus from "./common/useOnlineStatus";
import OfflineScreen from "./components/offlineStatus";
const k = "REACT ON 01/10/2025"
// const heading = <h2>Hi hello im kira
//    <div> {k} </div>
// </h2>
// const HeadingComponent = ()=> { return <div>
//     heading componen   

// </div>

// }


const HeadingComponent = ()=>{
    const [btnName, setBtnName]= useState('Login');
    const onlineStatus = useOnlineStatus()
    return !onlineStatus ? <OfflineScreen /> :  (
    
    <div className="contaniner">
    <div className="header">
        <img alt="logo" className="headerLogo" src={LOGO_URL} />

        <nav className="navv">
            <ul className="navItems">
                <li> <Link to="/"> Home</Link></li>
                <li><Link to="/contact-us">Contact us</Link></li>
                <li> <Link to="/about"> About us </Link> </li>
                <li> <Link to="/groceries"> Grocery </Link> </li>
                <li>Cart</li>
                <button onClick={()=>{
                    btnName === "Login" ? 
                    setBtnName("Log out") : setBtnName("Login")
                }}>{btnName}</button>
            </ul>
        </nav>
    </div>
    {/* Dynamically load child components based on path */}
    <Outlet/>  
    <FooterComponent />
    </div>
)
}

const Groceries = lazy(()=> import("./components/groceries") )

const appRouter = createBrowserRouter([{
    path: '/',
    element: <HeadingComponent />,
    children: [
        {
            path: '/',
            element: <BodyComponent />
        },
        {
            path: '/about',
            element: <About />
        },{
            path: '/contact-us',
            element: <ContactUs />
        },{
            path:'restaurants/:id',
            element: <Restaurants />
        },{
            path:'/groceries',
            element: <Suspense fallback={<h1>Loading......</h1>}> <Groceries /></Suspense> 
        }
    ],
    errorElement: <Error />
}])
const roott = ReactDOM?.createRoot(document?.getElementById("root"));
roott.render(<RouterProvider router={appRouter} />)

// const h = React.createElement("div", {id: "root"}, 
//     React.createElement("h2", {id: "nest"}, React.createElement("h3", {}, "Im Kiran"))
// )
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(h)