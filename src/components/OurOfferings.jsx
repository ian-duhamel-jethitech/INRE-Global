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
import CarrouselButtons from "./CarouselButtons"
import useWidth from "../hooks/useWidth"

const useStyles = makeStyles(commonStyles)

export default function OurOfferings({ title }) {
	const { width } = useWidth()
	const [indexShown, setIndexShown] = useState(0)
	const [groupShown, setGroupShown] = useState(0)
	const theme = useTheme()
	const classes = useStyles(theme)
	const [activeTab, setActiveTab] = useState(1)
	const content = [PreBooking, PostBooking, PostRegistration]
	const cardsContentSelected = content[activeTab - 1]
	const cardSelected = cardsContentSelected[indexShown]
	const changeTab = (id) => {
		setActiveTab(id)
		setIndexShown(0)
		setGroupShown(0)
	}
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
							onClick={() => changeTab(tab.id)}
						>
							<Box className={classes.tabNumber}>{tab.id}</Box>
							{width > 850 || activeTab === tab.id ? (
								<Typography className={classes.tabTitle}>
									{tab.title}
								</Typography>
							) : null}
							{tab.id === activeTab && <hr className={classes.hrTab} />}
						</Box>
					))}
				</Box>
				<Box className={classes.cardsWrapper}>
					{width > 850 ? (
						<>
							<CarrouselButtons
								sliderButtons
								indexShown={groupShown}
								setIndexShown={setGroupShown}
								maxCards={cardsContentSelected.length - 2}
							/>
							{cardsContentSelected
								.slice(groupShown, groupShown + 3)
								.map((card) => (
									<Card key={card.id} className={classes.card}>
										<CardMedia className={classes.imgContainer}>
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
											<Button
												variant='outlined'
												className={classes.cardButton}
												component={Link}
												to={`/offerings/${tabs[activeTab - 1]?.slug}/${
													card.id
												}`}
											>
												View More
												<ArrowForward sx={{ ml: "10px", width: "25px" }} />
											</Button>
										</CardActions>
									</Card>
								))}
						</>
					) : (
						<Card key={cardSelected.id} className={classes.card}>
							<CardMedia>
								<img src={cardSelected.media} alt='card-img' />
							</CardMedia>
							<CarrouselButtons
								indexShown={indexShown}
								setIndexShown={setIndexShown}
								maxCards={cardsContentSelected.length}
							/>
							<CardContent className={classes.contentWrapper}>
								<Typography className={classes.cardTitle}>
									{cardSelected.header}
								</Typography>
								<Typography className={classes.cardDescription}>
									{cardSelected.content}
								</Typography>
							</CardContent>
							<CardActions className={classes.cardActions}>
								<Button
									variant='outlined'
									className={classes.cardButton}
									component={Link}
									to={`/offerings/${tabs[activeTab - 1]?.slug}/${
										cardSelected.id
									}`}
								>
									View More
									<ArrowForward sx={{ ml: "10px", width: "25px" }} />
								</Button>
							</CardActions>
						</Card>
					)}
				</Box>
			</Box>
		</>
	)
}
