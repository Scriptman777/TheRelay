import React from "react"
import MenuBar from "./MenuBar"
import Header from "./Header"
import Landing from "./Landing"
import ListingItems from "./ListingItems"
import About from "./About"
import Legal from "./Legal"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

    return <div id="content">
    <Header />
    <MenuBar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="about" element={<About />} />
      <Route path="buy" element={<ListingItems />} />
      <Route path="sell" element={<ListingItems />} />
      <Route path="legal" element={<Legal />} />
    </Routes>
  </BrowserRouter>
  </div>
}

export default App