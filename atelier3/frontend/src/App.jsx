import './App.css'
import  'react';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import CreateCustomer from "./pages/CreateCustomer.jsx";
import CustomersList from "./pages/CustomersList.jsx";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<CreateCustomer/>} />
                    <Route path="/customersList" element={<CustomersList/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;
