import { Box, useTheme, Typography } from "@mui/material"
import HeroSection from "../components/HeroSection"
import homeBanner from "../assets/banners/homeBanner.png"
import { makeStyles } from "@mui/styles"
import { commonStyles } from "./styles/commonStyles"
import WhoWeAreSection from "../components/WhoWeAreSection"
import OurOfferings from "../components/OurOfferings"
import ContactForm from "../components/ContactForm"
import OurTeam from "../components/OurTeam"
import Blogs from "../components/Blogs"

const useStyles = makeStyles(commonStyles)

const Homepage = () => {
	const theme = useTheme()
	const classes = useStyles(theme)
	return (
		<Box className={classes.homepage}>
			<HeroSection banner={homeBanner}>
				<Typography className={classes.heroText}>
					Making your{" "}
					<Typography component='span' className={classes.higlightedText}>
						Real Estate
					</Typography>{" "}
					purchase journey faster, reliable and transparent
				</Typography>
			</HeroSection>
			<WhoWeAreSection />
			<OurOfferings title={true} />
			<section className={classes.ourTeamBlogs}>
				<OurTeam />
				<Blogs title />
			</section>
			<ContactForm />
		</Box>
	)
}
export default Homepage
