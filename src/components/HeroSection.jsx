import { useTheme } from "@mui/material/styles"
import { makeStyles } from "@mui/styles"
import { commonStyles } from "./styles/commonStyles"
import { Box, Typography } from "@mui/material"

const useStyles = makeStyles(commonStyles)

const HeroSection = ({ banner, children }) => {
	const theme = useTheme()
	const classes = useStyles(theme)
	return (
		<Box className={classes.heroSection}>
			{children && (
				<Box className={classes.textWrapper}>
					<Typography className={classes.heroText}>{children}</Typography>
				</Box>
			)}
			<img
				style={{ width: "100%", objectFit: "cover", height: "100%" }}
				src={banner}
				alt='rectangle'
			/>
		</Box>
	)
}
export default HeroSection
