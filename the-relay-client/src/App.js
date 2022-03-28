import React from "react"
import MenuBar from "./MenuBar"
import Header from "./Header"
import Landing from "./Landing"
import ListingItems from "./ListingItems"
import About from "./About"
import Legal from "./Legal"
import Login from "./Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

    return <div id="content">
    <Header />
    <MenuBar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="about" element={<About />} />
      <Route path="buy" element={<ListingItems isSale={true}/>} />
      <Route path="sell" element={<ListingItems isSale={false}/>} />
      <Route path="legal" element={<Legal />} />
      <Route path="login" element={<Login create={false}/>} />
      <Route path="signup" element={<Login create={true}/>} />
    </Routes>
  </BrowserRouter>
  </div>
}

export default App