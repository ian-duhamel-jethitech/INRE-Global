import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import OurOfferingsPage from "./pages/OurOfferingsPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
	return (
		<div className='App' style={{ overflowX: "hidden" }}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/offerings' element={<OurOfferingsPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
