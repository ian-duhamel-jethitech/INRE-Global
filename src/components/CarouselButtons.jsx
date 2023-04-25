import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"

import { useTheme } from "@mui/material/styles"
import { makeStyles } from "@mui/styles"
import { Box } from "@mui/material"
import { commonStyles } from "./styles/commonStyles"

const useStyles = makeStyles(commonStyles)

const CarouselButtons = ({
	indexShown,
	setIndexShown,
	maxCards,
	sliderButtons,
}) => {
	const theme = useTheme()
	const classes = useStyles(theme)
	return (
		<>
			{indexShown > 0 && (
				<Box
					className={sliderButtons ? classes.sliderBack : classes.carouselBack}
					onClick={() => indexShown > 0 && setIndexShown(indexShown - 1)}
				>
					<ArrowBackIosIcon />
				</Box>
			)}
			{indexShown < maxCards - 1 && (
				<Box
					className={
						sliderButtons ? classes.sliderForward : classes.carouselForward
					}
					onClick={() =>
						indexShown < maxCards - 1 && setIndexShown(indexShown + 1)
					}
				>
					<ArrowForwardIosIcon sx={{ color: "white" }} />
				</Box>
			)}
		</>
	)
}
export default CarouselButtons
