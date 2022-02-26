import React from "react"
import MenuBar from "./MenuBar"
import Header from "./Header"
import Footer from "./Footer"
import ListingItems from "./ListingItems"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

    return <>
    <Header />
    <MenuBar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListingItems />} />
      <Route path="about" element={<ListingItems />} />
      <Route path="buy" element={<ListingItems />} />
      <Route path="sell" element={<ListingItems />} />
      <Route path="legal" element={<Header />} />
    </Routes>
  </BrowserRouter>
    <Footer />
    </>
}

export default App