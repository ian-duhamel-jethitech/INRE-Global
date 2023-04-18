import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const breakpoints = {
	values: {
		xs: 0,
		sm: 450,
		md: 850,
		lg: 1440,
		xl: 1920,
	},
	down: (key) => `@media (max-width:${breakpoints.values[key]}px)`,
}
const theme = createTheme({
	typography: {
		fontFamily: "Open Sans, sans-serif",
	},
	palette: {
		primary: {
			main: "#01244A",
		},
	},
	breakpoints: breakpoints,
})
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
