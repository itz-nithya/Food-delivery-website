import './App.css';

import { BrowserRouter, Route, Routes} from "react-router-dom"
import { GetTheApp } from "./MyWeb/GetTheApp";
import { Login } from "./MyWeb/Login";
import { InvestorRelations } from "./MyWeb/InvestorRelations";
import { AddRestaurent } from "./MyWeb/AddRestaurent";
import { Signup } from "../src/MyWeb/Signup";
import { Header } from './MyWeb/Component/Header';
import { Card } from './MyWeb/Component/Card';
import OrderOnline from './MyWeb/Component/OrderOnline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          
          <Routes>
            <Route path="/" element={<Header />}></Route>
            <Route path="/gettheapp" element={<GetTheApp />}></Route>
            <Route path="/investorrelations" element={<InvestorRelations />}></Route>
            <Route path="/addrestaurent" element={<AddRestaurent />}></Route>
            <Route path="/orderonline" element={<OrderOnline />}></Route>

            {/* <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route> */}
          

          </Routes>
         
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
