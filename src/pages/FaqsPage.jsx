import {
	Box,
	AccordionSummary,
	Accordion,
	Typography,
	AccordionDetails,
	useTheme,
} from "@mui/material"
import { useState } from "react"
import HeroSection from "../components/HeroSection"
import FAQsBanner from "../assets/banners/FAQs banner.png"
import { makeStyles } from "@mui/styles"
import { commonStyles } from "./styles/commonStyles"
import { Add } from "@mui/icons-material"

const useStyles = makeStyles(commonStyles)
const titles = [
	"What is an Encumbrance Certificate?",
	"What is TDS and Why it needs to be paid by buyer?",
	"What is Khata Transfer?",
	"What is BESCOM Transfer",
	"Do you advice any other aspects of Real Estate buying process?",
	"What is the Special Power of Attorney?",
]
const AccordionItem = ({ title }) => {
	const [expanded, setExpanded] = useState(false)
	console.log(title)
	return (
		<Accordion
			key={titles[title]}
			expanded={expanded === title}
			onChange={() => setExpanded(expanded !== title ? title : false)}
			sx={{
				paddingY: "25px",
				boxShadow:
					"0px 1px 0px 0px rgba(0,0,0,0.12), 0px 1px 0px 0px rgba(0,0,0,0.12)",
			}}
		>
			<AccordionSummary expandIcon={<Add />}>
				<Typography
					sx={{
						width: "40%",
						flexShrink: 0,
						fontSize: "20px",
						fontWeight: "600",
					}}
				>
					{titles.indexOf(title) + 1}. {title}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography
					sx={{
						fontSize: "16px",
						fontWeight: "400",
						color: "#1A1A1A",
						opacity: "0.6",
					}}
				>
					Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
					amet egestas eros, vitae egestas augue. Duis vel est augue. Nunc vitae
					orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet
					egestas eros, vitae egestas augue. Duis vel est augue.
				</Typography>
			</AccordionDetails>
		</Accordion>
	)
}
const FaqsPage = () => {
	const theme = useTheme()
	const classes = useStyles(theme)

	return (
		<Box className={classes.homepage}>
			<HeroSection banner={FAQsBanner} />
			<Box sx={{ width: "100%", maxWidth: "1460px" }}>
				{titles.map((title) => (
					<AccordionItem title={title} key={titles.indexOf(title) + 1} />
				))}
			</Box>
		</Box>
	)
}

export default FaqsPage
