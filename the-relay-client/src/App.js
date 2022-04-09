import React from "react"
import MenuBar from "./MenuBar"
import Header from "./Header"
import Landing from "./Landing"
import ListingItems from "./ListingItems"
import About from "./About"
import Legal from "./Legal"
import Login from "./Login"
import Account from "./Account"
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main component of the app
function App() {

  // Router serves to navigate to different page contents, rest of the page components are always the same
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
      <Route path="myaccount" element={<Account create={true}/>} />
    </Routes>
  </BrowserRouter>
  </div>
}

export default App