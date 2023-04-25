import { makeStyles } from "@mui/styles"
import CarrouselButtons from "../components/CarouselButtons"
import { useState } from "react"
import {
	Box,
	useTheme,
	Typography,
	Button,
	Card,
	CardMedia,
	CardContent,
	CardActions,
} from "@mui/material"
import { commonStyles } from "./styles/commonStyles"
import HeroSection from "../components/HeroSection"
import { Link, useNavigate, useParams } from "react-router-dom"
import {
	PreBooking,
	PostBooking,
	PostRegistration,
} from "../constants/Offerings"
import { ArrowBack, ArrowForward, CalendarMonth } from "@mui/icons-material"
import OurOfferings from "../components/OurOfferings"
import useWidth from "../hooks/useWidth"

const useStyles = makeStyles(commonStyles)

export default function OfferingPage() {
	const theme = useTheme()
	const { width } = useWidth()
	const classes = useStyles(theme)
	const { slug, id } = useParams()
	const [indexShown, setIndexShown] = useState(0)

	const nav = useNavigate()
	const categorieSelected =
		slug === "prebooking"
			? PreBooking
			: slug === "postbooking"
			? PostBooking
			: PostRegistration
	const offering = categorieSelected[id - 1]
	const cardSelected = categorieSelected[indexShown]
	return (
		<section className={classes.blogPage}>
			<Box className={classes.goBack}>
				<Typography
					to={"/offerings"}
					component={Link}
					className={classes.goBackText}
				>
					<ArrowBack />
					{offering.header}
				</Typography>
			</Box>
			<HeroSection banner={offering.media} />
			<Box className={classes.blogSection}>
				<Box className={classes.blogHeader}>
					<Typography className={classes.blogAuthor}>
						{offering.header}
					</Typography>
				</Box>
				<Typography className={classes.blogDescription}>
					{offering.contentExtended}
				</Typography>
				<hr className={classes.blogHr} />
				<Box className={classes.blogsNavigation}>
					<Box className={classes.blogButtons}>
						<Button
							variant='outlined'
							onClick={() => {
								Number(id) > 1 && nav(`/offerings/${slug}/${Number(id) - 1}`)
							}}
						>
							<ArrowBack />
							Previous offering
						</Button>
						<Button
							variant='contained'
							onClick={() => {
								Number(id) < categorieSelected.length &&
									nav(`/offerings/${slug}/${Number(id) + 1}`)
							}}
						>
							Next Offering <ArrowForward />
						</Button>
					</Box>
					<Typography className={classes.contactUsLink}>
						For more insightful details Contact Us today,{" "}
						<Typography component={Link} to='/contactus'>
							Click Here
						</Typography>
					</Typography>
				</Box>
			</Box>
			<section className={classes.blogs}>
				<>
					<Box
						className={classes.titleContainer}
						to='/offerings'
						component={Link}
					>
						<Typography className={classes.sectionTitle}>
							You may also Like:
						</Typography>
						<hr className={classes.offeringsHr} />
					</Box>
					<Box className={classes.cardsWrapper}>
						{width < 850 ? (
							<Card key={cardSelected.id} className={classes.card}>
								<CardMedia>
									<img src={cardSelected.media} alt='card-img' />
								</CardMedia>
								<CarrouselButtons
									indexShown={indexShown}
									setIndexShown={setIndexShown}
									maxCards={categorieSelected.length}
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
										to={`/offerings/${slug}/${cardSelected.id}`}
									>
										View More
										<ArrowForward sx={{ ml: "10px", width: "25px" }} />
									</Button>
								</CardActions>
							</Card>
						) : (
							categorieSelected.slice(0, 3).map((card) => (
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
											to={`/offerings/${slug}/${cardSelected.id}`}
										>
											View More
											<ArrowForward sx={{ ml: "10px", width: "25px" }} />
										</Button>
									</CardActions>
								</Card>
							))
						)}
					</Box>
				</>
			</section>
		</section>
	)
}
