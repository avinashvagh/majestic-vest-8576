import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer";
import Navbar from "../Navbar/Navbar";
import { Categeory } from "./categeory";
import "./product.css";

export const ProductPage = () => {
	const [items, setItems] = useState([]);
	const [brands, setBrands] = useState([]);
	const [makeup, setMakeup] = useState([]);
	const [makeupPr, setMakeupPr] = useState([]);
	const [cFormat, setCFormat] = useState([]);
	const [cFinish, setCFinish] = useState([]);
	const [cCoverage, setCCoverage] = useState([]);
	const [cTA, setCTA] = useState([]);
	const [cBT, setCBT] = useState([]);
	const [lProducts, setLProducts] = useState([]);
	const [preferences, setPreferences] = useState([]);
	const [price, setPrice] = useState([]);
	const [savings, setSavings] = useState([]);
	const [aReviews, setAReviews] = useState([]);

	useEffect(() => {
		setBrands(Categeory.Brand);
	}, []);

	useEffect(() => {
		setMakeup(Categeory.Makeup_Category);
	}, []);

	useEffect(() => {
		setMakeupPr(Categeory.Makeup_Product_Type);
	}, []);

	useEffect(() => {
		setCFormat(Categeory.Complexion_Format);
	}, []);

	useEffect(() => {
		setCFinish(Categeory.Complexion_Finish);
	}, []);

	useEffect(() => {
		setCCoverage(Categeory.Complexion_Coverage);
	}, []);

	useEffect(() => {
		setCTA(Categeory.Cosmetics_TA);
	}, []);

	useEffect(() => {
		setCBT(Categeory.Cosmetics_BT);
	}, []);

	useEffect(() => {
		setLProducts(Categeory.Lips_Products);
	}, []);

	useEffect(() => {
		setPreferences(Categeory.Preferences);
	}, []);

	useEffect(() => {
		setPrice(Categeory.Price);
	}, []);

	useEffect(() => {
		setSavings(Categeory.Savings);
	}, []);

	useEffect(() => {
		setAReviews(Categeory.Average_Reviews);
	}, []);

	useEffect(() => {
		getData();
	}, []);

	async function getData() {
		const data = await fetch("http://localhost:8080/data").then((d) =>
			d.json()
		);
		setItems(data);
		//  console.log(data);
	}

	const Sort = (e) => {
		if (e.target.value == "LTH") {
			const d = [...items].sort((a, b) => {
				return Number(a.price) - Number(b.price);
			});
			console.log(d);
			setItems(d);
		}

		if (e.target.value == "HTL") {
			const d = [...items].sort((a, b) => {
				return Number(b.price) - Number(a.price);
			});
			console.log(d);
			setItems(d);
		}

		if (e.target.value == "ATZ") {
			const d = [...items].sort((a, b) => {
				return a.title > b.title ? 1 : -1;
			});
			console.log(d);
			setItems(d);
		}
	};

	const handleBrand = (brand) => {
		axios.get(`http://localhost:8080/data?brand=${brand}`).then(({ data }) => {
			// console.log(data);
			setItems(data);
		});
		// console.log(brand)
	};

	return (
		<div>
			<Navbar />
			<div style={{ width: "100%", display: "flex", marginBottom : "3%" }}>
				<div className="sort">
					<div>
						<h3>Refine</h3>
						<hr />
					</div>
					<div>
						<h3>Brand</h3>
						<hr />
						<div className="Brands">
							{brands.map((e, index) => {
								return (
									<div
										key={index}
										onClick={() => handleBrand(e[0])}
										className="SI">
										<button></button>
										<p>{`${e[0]} (${e[1]})`}</p>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<h3>Makeup Category</h3>
						<hr />
						<div>
							{makeup.map((e, index) => {
								return (
									<div key={index} className="SI">
										<button></button>
										<p>{e}</p>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<h3>Makeup Product Type</h3>
						<hr />
						<div>
							{makeupPr.map((e, index) => {
								return (
									<div key={index} className="SI">
										<button></button>
										<p>{e}</p>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<h3>Complexion Format</h3>
						<hr />
						<div>
							{cFormat.map((e, index) => {
								return (
									<div key={index} className="SI">
										<button></button>
										<p>{e}</p>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<h3>Complexion Finish</h3>
						<hr />
						<div>
							{cFinish.map((e, index) => {
								return (
									<div key={index} className="SI">
										<button></button>
										<p>{e}</p>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<h3>Complexion Finish</h3>
						<hr />
						<div>
							{cCoverage.map((e, index) => {
								return (
									<div key={index} className="SI">
										<button></button>
										<p>{e}</p>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<h3>Cosmetics Tools & Accessories</h3>
						<hr />
						<div>
							{cTA.map((e, index) => {
								return (
									<div key={index} className="SI">
										<button></button>
										<p>{e}</p>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<h3>Cosmetics Brush Type</h3>
						<hr />
						<div>
							{cBT.map((e, index) => {
								return (
									<div key={index} className="SI">
										<button></button>
										<p>{e}</p>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<h3>Lips Products</h3>
						<hr />
						<div className="Lips">
							{lProducts.map((e, index) => {
								return (
									<div key={index} className="SI">
										<button></button>
										<p>{e}</p>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<h3>Preferences</h3>
						<hr />
						<div className="Preference">
							{preferences.map((e, index) => {
								return (
									<div key={index} className="SI">
										<button></button>
										<p>{e}</p>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<h3>Price</h3>
						<hr />
						<div>
							{price.map((e, index) => {
								return (
									<div key={index} className="SI">
										<button></button>
										<p>{e}</p>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<h3>Savings</h3>
						<hr />
						<div>
							{savings.map((e, index) => {
								return (
									<div key={index} className="SI">
										<button></button>
										<p>{e}</p>
									</div>
								);
							})}
						</div>
					</div>
					<div>
						<h3>Average Reviews</h3>
						<hr />
						<div>
							{aReviews.map((e, index) => {
								return (
									<div key={index} className="SI">
										<button></button>
										<p>{e}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<div className="product">
					<div className="HPP">
						<p
							style={{
								fontSize: "x-large",
								fontFamily: "serif",
								marginBottom: "0",
							}}>
							Lipstick
						</p>
						<p style={{ marginTop: "1%" }}>29 results</p>
						<p style={{ fontSize: "80%", marginTop : "1%", marginBottom : "1%"}}>
							Perfecting your pout takes just a single swipe of this velvety
							rich trick: lipstick. Whether you want to simply enhance the color
							of your lips or hydrate them with a clear moisturizing gloss,
							lipstick is one of those cosmetics that women simply can't—and
							won't—go without. Here at Dermstore, we've taken the guesswork out
							of finding the perfect shade from top brands like jane iredale,
							DHC and Tarte Cosmetics.
						</p>
					</div>
					<div className="Sortby">
						<p>Sort by</p>
						<select onClick={Sort}>
							<option value="">Default</option>
							{/* <option value="">Bestsellers</option> */}
							<option value="LTH">Price : Low to High</option>
							<option value="HTL">Price : High to Low</option>
							<option value="ATZ">A - Z</option>
							{/* <option value="">Newest Arrivals</option> */}
							{/* <option value="PD">Percentage Discount</option> */}
						</select>
					</div>
					<div className="PRlist">
						{items.map((elem, index) => {
							return (
								<div key={index} style={{ width: "99%" }}>
									<div className="IW">
										<div className="ImG">
											<img
												src={elem.img}
												style={{ width: "100%", height: "100%" }}
											/>
										</div>
										<div
											onClick={() => {
												alert("Item Added to Wishlist ☺️");
												getData();
												const data = elem;
												fetch("http://localhost:8080/wishlist", {
													method: "POST",
													headers: {
														"content-type": "application/json",
													},
													body: JSON.stringify(data),
												});
											}}
											className="wishlist">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="30"
												height="30"
												fill="currentColor"
												className="bi bi-heart"
												viewBox="0 0 16 16">
												<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
											</svg>
										</div>
									</div>
									<div className="TRP">
										<p>{elem.title}</p>
										<div
											style={{
												display: "flex",
												width: "100px",
												margin: "auto",
											}}>
											<svg
												style={{ marginTop: "5px" }}
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-star-fill"
												viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg
												style={{ marginTop: "5px" }}
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-star-fill"
												viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg
												style={{ marginTop: "5px" }}
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-star-fill"
												viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg
												style={{ marginTop: "5px" }}
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-star-fill"
												viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<svg
												style={{ marginTop: "5px" }}
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-star-fill"
												viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
											</svg>
											<h3>
												{elem.rating}
											</h3>
										</div>
										<h3 name="price" style={{ marginTop: "0px", textAlign : "center" }}>
											$ {elem.price}
										</h3>
									</div>
									<div
										className="QB"
										style={{
											marginBottom: "0",
											height: "10%",
										}}>
										<button
											onClick={() => {
												alert("Item Added to Cart ☺️");
												getData();
												const data = elem;
												fetch("http://localhost:8080/Cart", {
													method: "POST",
													headers: {
														"content-type": "application/json",
													},
													body: JSON.stringify(data),
												});
											}}
											className="ATC">
											Add To Cart
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
      <Footer/>
		</div>
	);
};
