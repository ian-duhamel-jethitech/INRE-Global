import { Box, Container, Typography } from "@mui/material"
import HeroSection from "../components/HeroSection"
import homeBanner from "../assets/banners/homeBanner.png"
import { makeStyles } from "@mui/styles"
import { useTheme } from "@mui/material"
import { commonStyles } from "./styles/commonStyles"
import WhoWeAreSection from "../components/WhoWeAreSection"

const useStyles = makeStyles(commonStyles)

const Homepage = () => {
	const theme = useTheme()
	const classes = useStyles(theme)
	return (
		<Box className={classes.homepage}>
			<HeroSection banner={homeBanner}>
				Making your{" "}
				<Typography component='span' className={classes.higlightedText}>
					Real Estate
				</Typography>{" "}
				purchase journey faster, reliable and transparent
			</HeroSection>
			<WhoWeAreSection />
		</Box>
	)
}
export default Homepage
