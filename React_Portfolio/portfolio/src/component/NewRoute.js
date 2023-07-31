import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstComponent from "./FirstComponent";
import Newabout from "./Newabout";
import Newhome from "./Newhome";
import Newnav from "./Newnav";
import Newproduct from "./Newproduct";
import Algebric from "./Algebric";
import Demo22 from "./Demo22";
import Bootstrap from "./Bootsrtap";
import Diffproduct from "./Diffproduct";
import Gallery1 from "./Gallery1";
import Inlinecss from "./Inlinecss";
import Product from "./Product";
import CounterComp from "./CounterComp";
import Likedislike from "./Likedislike";
import LocalStorage from "./LocalStorage";
import Viewtodo from "./Viewtodo";

export default function NewRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Newnav />}>
          <Route path="/newhome" element={<Newhome />} />
          <Route path="/newproduct" element={<Newproduct />} />
          <Route path="/newabout" element={<Newabout />} />
          <Route path="/firstcomponent" element={<FirstComponent />} />
          <Route path="/algebric" element={<Algebric />} />
          <Route path="/demo22" element={<Demo22 />} />
          <Route path="/bootstrap" element={<Bootstrap />} />
          <Route path="/diffproduct" element={<Diffproduct />} />
          <Route path="/gallery1" element={<Gallery1 />} />
          <Route path="/inlinecss" element={<Inlinecss />} />
          <Route path="/product" element={<Product />} />
          <Route path="/countercomp" element={<CounterComp />} />
          <Route path="/likedislike" element={<Likedislike />} />
          <Route path="/LocalStorage" element={<LocalStorage />}></Route>
          <Route path="/Viewtodo" element={<Viewtodo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
