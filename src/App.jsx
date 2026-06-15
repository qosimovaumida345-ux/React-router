import { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Skeleton from "./components/Skeleton/Skeleton"

const Home = lazy(() => import("./components/Home/Home"))
const About = lazy(() => import("./components/About/About"))
const Services = lazy(() => import("./components/Services/Services"))
const Gallery = lazy(() => import("./components/Gallery/Gallery"))
const Contact = lazy(() => import("./components/Contact/Contact"))
const NotFound = lazy(() => import("./components/NotFound/NotFound"))

const App = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
