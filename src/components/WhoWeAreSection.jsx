import { useTheme } from "@mui/material/styles"
import { makeStyles } from "@mui/styles"
import { commonStyles } from "./styles/commonStyles"
import { ArrowForward } from "@mui/icons-material"
import WhoWeAreImg from "../assets/banners/whoWeAre.png"
import { Paper, Typography, Box, Button } from "@mui/material"

const useStyles = makeStyles(commonStyles)

const WhoWeAreSection = () => {
	const theme = useTheme()
	const classes = useStyles(theme)
	return (
		<Paper id='whoweare' elevation={0} className={classes.whoWeAreSection}>
			<img
				src={WhoWeAreImg}
				alt='whoweareimg'
				className={classes.whoWeAreImg}
			/>
			<Box className={classes.whoWeAreText}>
				<Typography className={classes.whoWeAreTextHeader}>
					Who We Are
				</Typography>
				<Typography className={classes.whoWeAreTextDescription}>
					Despite facing global challenges, the Indian real estate industry has
					shown remarkable resilience. According to a report by Niti Aayog in
					2021, the sector is expected to grow to a market size of US$1 trillion
					by 2030, and the returns have been impressive. However, the process of
					purchasing real estate in India is quite arduous and can take more
					than two years on average. Additionally, since the investment required
					for real estate is significant, trust and security are crucial
					factors. These challenges become even more complicated when one is not
					present in the location of the property. If you are facing
					difficulties during your real estate...
				</Typography>
				<Button variant='outlined' className={classes.whoWeAreButton}>
					Contact Now <ArrowForward sx={{ ml: "10px", width: "15px" }} />
				</Button>
			</Box>
		</Paper>
	)
}
export default WhoWeAreSection
