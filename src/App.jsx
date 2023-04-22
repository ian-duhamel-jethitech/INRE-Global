import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import OurOfferingsPage from "./pages/OurOfferingsPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ContactUsPage from "./pages/ContactUsPage"
import OurTeamPage from "./pages/OurTeamPage"

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/offerings' element={<OurOfferingsPage />} />
					<Route path='/contactus' element={<ContactUsPage />} />
					<Route path='/ourteam' element={<OurTeamPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
