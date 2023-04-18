import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Homepage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
