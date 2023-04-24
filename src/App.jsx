import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import OurOfferingsPage from "./pages/OurOfferingsPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ContactUsPage from "./pages/ContactUsPage"
import OurTeamPage from "./pages/OurTeamPage"
import BlogsPage from "./pages/BlogsPage"
import BlogPage from "./pages/BlogPage"
import FaqsPage from "./pages/FaqsPage"
import OfferingPage from "./pages/OfferingPage"

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
					<Route path='/blogs/:id' element={<BlogPage />} />
					<Route path='/offerings/:slug/:id' element={<OfferingPage />} />
					<Route path='/faqs' element={<FaqsPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
