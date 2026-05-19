import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Gallery from "./components/Gallery/Gallery"
import Contact from "./components/Contact/Contact"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
