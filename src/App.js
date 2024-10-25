import './App.css';

import { BrowserRouter, Route, Routes} from "react-router-dom"
import { GetTheApp } from "./MyWeb/Component/GetTheApp";
import { InvestorRelations } from "./MyWeb/Component/InvestorRelations";
import { AddRestaurant } from "./MyWeb/Component/AddRestaurant";
import { Header } from './MyWeb/Component/Header';
import OrderOnline from './MyWeb/Component/OrderOnline';
import { Dining } from './MyWeb/Component/Dining';
import { Events } from './MyWeb/Component/Events';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          
          <Routes>
            <Route path="/home" element={<Header />}></Route>
            <Route path="/gettheapp" element={<GetTheApp />}></Route>
            <Route path="/investorrelations" element={<InvestorRelations />}></Route>
            <Route path="/addrestaurant" element={<AddRestaurant />}></Route>
            <Route path="/orderonline" element={<OrderOnline />}></Route>
            <Route path="/dinning" element={<Dining />}></Route>
            <Route path="/events" element={<Events />}></Route>
            


          
          

          </Routes>
         
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
