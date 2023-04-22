import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import OurOfferingsPage from "./pages/OurOfferingsPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ContactUsPage from "./pages/ContactUsPage"
import OurTeamPage from "./pages/OurTeamPage"
import BlogsPage from "./pages/BlogsPage"

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/offerings' element={<OurOfferingsPage />} />
					<Route path='/contactus' element={<ContactUsPage />} />
					<Route path='/team' element={<OurTeamPage />} />
					<Route path='/blogs' element={<BlogsPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
