import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
//import Grocery from "./components/Grocery" // now we did chunking using lazy
import { Suspense } from "react"
import Cart from "./components/Cart"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"

// This is called as:
// code splitting,
// lazy loading
// on demand loading 
// chunking
// dynamic loading

const Grocery = lazy(() => import("./components/Grocery"))
// actually we are bundling grocery in a different bundle as we saw in network tab.
// this increases our app's speed.
// we can do the same for about as well.
   
const  App =  () =>{

    return (
        <Provider store = {appStore}>
        <>
        <Header/>
        {/* <Body/>  we were simply rendering body here but now will make use of outlet to display the component while keeping header intact */}
        <Outlet/> {/*what ever the path will be now outler will be replaced accordingly*/}
        </>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        // errorElement: <Error/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/cart",
                element: <Cart/>
            },
            {
                path:"/grocery",
                element: <Suspense  fallback = {<h1>Loading...</h1>} ><Grocery/></Suspense>
            },
            {
                path: "/restaurant/:resId", //{/* :id is dynamic here */},
                element: <RestaurantMenu/>
            },
        ],
        errorElement: <Error/>,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<App/>)
root.render(<RouterProvider router = {appRouter}/>) // after installing router.