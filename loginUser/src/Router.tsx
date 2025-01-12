import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router"
import Layout from "./components/Layout"
import About from "./components/About"
import HomeRouter from "./components/HomeRouter"


export const router = createBrowserRouter([
    {
        path: '/', element: <Layout/>,
        children: [
            { path: '/home', element: <HomeRouter /> },
            { path: 'about', element: <About /> }]
    }])