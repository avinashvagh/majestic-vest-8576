import { Route, Routes } from "react-router-dom";

import "./App.css";

import { Middle } from "./Components/Middle";
import { second_extra } from "./Components/slider";
import { Login } from "./Components/SignUp&Login/Login";
import { SignUp } from "./Components/SignUp&Login/SignUp";
import { ProductPage } from "./Components/productPage/Productpage";
// import { Wishlist } from "./Components/wishlistPage/Wishlist";
// import { CheckoutPage } from "./Components/cartprovider/CheckoutPage";
import PrivateRoute from "./Components/PrivateRoute";
// import { Cart } from "./Components/cart/Cart";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Middle slides={second_extra} />} />
				<Route
					path="/checkoutPage"
					element={
						<PrivateRoute>
							{/* <CheckoutPage /> */}
						</PrivateRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route
					path="/cart"
					element={
						<PrivateRoute>
							{/* <Cart /> */}
						</PrivateRoute>
					}
				/>
				<Route path="/productPage" element={<ProductPage />} />
				<Route
					path="/wishlist"
					element={
						<PrivateRoute>
							{/* <Wishlist /> */}
						</PrivateRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
