import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';
/* 
1. 전체 상품 페이지, 로그인, 상품상세페이지
2. 전체 상품페이지에선 전체 상품
3. 로그인 버튼 누르면 로그인 페이지
4. 상품 눌렀을때 로그인 안됐으면 로그인 페이지
5. 로그아웃 누르면 로그아웃되고 로그인 페이지
6. 로그인 하면 로그아웃, 로그아웃 하면 로그인
7. 상품 검색
*/
function App() {
  const[authenticate,setAuthenticate]=useState(false)
  return (
    <div>
      <Navbar/>
<Routes>
  <Route path="/" element={<ProductAll/>}/>
  <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
  <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
</Routes>
    </div>
  );
}

export default App;
