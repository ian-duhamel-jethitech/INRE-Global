import { makeStyles } from "@mui/styles"
import { Typography, useTheme } from "@mui/material"
import { commonStyles } from "./styles/commonStyles"
import bannerOfferings from "../assets/banners/bannerOfferings.png"
import HeroSection from "../components/HeroSection"
import Blogs from "../components/Blogs"

const useStyles = makeStyles(commonStyles)

export default function BlogsPage() {
	const theme = useTheme()
	const classes = useStyles(theme)
	return (
		<section className={classes.blogPage}>
			<HeroSection banner={bannerOfferings}>
				<Typography className={classes.heroText}>
					Delve into captivating insights on the dynamic world of{" "}
					<Typography component='span' className={classes.higlightedText}>
						Real Estate.
					</Typography>
				</Typography>
			</HeroSection>
			<section className={classes.blogs}>
				<Blogs />
			</section>
		</section>
	)
}
