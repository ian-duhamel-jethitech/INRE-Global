import { makeStyles } from "@mui/styles"
import { useTheme } from "@mui/material"
import { commonStyles } from "./styles/commonStyles"
import bannerOfferings from "../assets/banners/bannerOfferings.png"
import { Box, Typography } from "@mui/material"
import HeroSection from "../components/HeroSection"
import OurOfferings from "../components/OurOfferings"

const useStyles = makeStyles(commonStyles)

export default function OurOfferingsPage() {
	const theme = useTheme()
	const classes = useStyles(theme)
	return (
		<section className={classes.homepage}>
			<HeroSection banner={bannerOfferings}>
				<Typography className={classes.heroText}>
					We provide top-notch{" "}
					<Typography component='span' className={classes.higlightedText}>
						Services
					</Typography>{" "}
					to cater to the needs of our valued users
				</Typography>
			</HeroSection>
			<OurOfferings />
		</section>
	)
}
