import { useState } from "react"
import { useTheme } from "@mui/material/styles"
import { makeStyles } from "@mui/styles"
import { commonStyles } from "./styles/commonStyles"
import {
	Typography,
	Box,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Button,
} from "@mui/material"
import { Link } from "react-router-dom"
import { ArrowForward } from "@mui/icons-material"
import {
	tabs,
	PreBooking,
	PostBooking,
	PostRegistration,
} from "../constants/Offerings"

const useStyles = makeStyles(commonStyles)

export default function OurOfferings({ title }) {
	const theme = useTheme()
	const classes = useStyles(theme)
	const [activeTab, setActiveTab] = useState(1)
	const content = [PreBooking, PostBooking, PostRegistration]
	const cardContentSelected = content[activeTab - 1]
	return (
		<>
			<Box className={classes.offeringsSection}>
				{title && (
					<>
						<Box
							className={classes.titleContainer}
							to='/offerings'
							component={Link}
						>
							<Typography className={classes.sectionTitle}>
								Our Offerings
							</Typography>
							<hr className={classes.offeringsHr} />
						</Box>
						<Typography className={classes.sectionDescription}>
							This Real Estate purchase journey can be divided into three
							stages. For more details,{" "}
							<Link to='/offerings' className={classes.linkHighlighted}>
								Click Here
							</Link>
						</Typography>
					</>
				)}
				<Box className={classes.tabsWrapper}>
					{tabs.map((tab) => (
						<Box
							className={`${classes.tab} ${
								tab.id === activeTab && classes.activeTab
							}`}
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
						>
							<Box className={classes.tabNumber}>{tab.id}</Box>
							<Typography className={classes.tabTitle}>{tab.title}</Typography>
							{tab.id === activeTab && <hr className={classes.hrTab} />}
						</Box>
					))}
				</Box>
				<Box className={classes.cardsWrapper}>
					{cardContentSelected.slice(0, 3).map((card) => (
						<Card key={card.id} className={classes.card}>
							<CardMedia>
								<img src={card.media} alt='card-img' />
							</CardMedia>
							<CardContent className={classes.contentWrapper}>
								<Typography className={classes.cardTitle}>
									{card.header}
								</Typography>
								<Typography className={classes.cardDescription}>
									{card.content}
								</Typography>
							</CardContent>
							<CardActions className={classes.cardActions}>
								<Button variant='outlined' className={classes.cardButton}>
									View More
									<ArrowForward sx={{ ml: "10px", width: "25px" }} />
								</Button>
							</CardActions>
						</Card>
					))}
				</Box>
			</Box>
		</>
	)
}
