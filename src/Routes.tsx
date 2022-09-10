import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Cart } from "./pages/Cart";
import { Catalogo } from "./pages/Catalogo";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/catalogo" element={<Catalogo />}/>
            </Routes>
        </Router>
    )
}