import { ArrowForward, CalendarMonth } from "@mui/icons-material"
import {
	Typography,
	Box,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Button,
	useTheme,
} from "@mui/material"
import { useState } from "react"
import { makeStyles } from "@mui/styles"
import { commonStyles } from "./styles/commonStyles"
import { Link } from "react-router-dom"
import { blogs } from "../constants/teamBlogs"
import useWidth from "../hooks/useWidth"
import CarrouselButtons from "./CarouselButtons"

const useStyles = makeStyles(commonStyles)

export default function Blogs({ title }) {
	const [indexShown, setIndexShown] = useState(0)
	const theme = useTheme()
	const classes = useStyles(theme)
	const { width } = useWidth()
	const blogSelected = blogs[indexShown]
	return (
		<Box className={classes.blogsSection}>
			{title && (
				<>
					<Box className={classes.titleContainer} to='/blogs' component={Link}>
						<Typography className={classes.sectionTitle}>{title}</Typography>
						<hr className={classes.blogsHr} />
					</Box>
				</>
			)}
			<Box className={classes.blogsCardWrapper}>
				{width > 850 ? (
					blogs.map((card) => (
						<Card key={card.id} className={classes.blogsCard}>
							<CardMedia className={classes.imgContainer}>
								<img src={card.image} alt='card-img' />
							</CardMedia>
							<CardContent className={classes.contentWrapper}>
								<Box className={classes.blogsDateContainer}>
									<Box>
										<CalendarMonth />
										<Typography className={classes.blogsDate}>
											{card.date}
										</Typography>
									</Box>
									<Typography className={classes.cardAuthor}>
										By {card.author}
									</Typography>
								</Box>
								<Typography className={classes.blogTitle}>
									{card.title}
								</Typography>
								<Typography className={classes.ourTeamCardDescription}>
									{card.description}
								</Typography>
							</CardContent>
							<CardActions className={classes.cardActions}>
								<Button
									variant='outlined'
									component={Link}
									reloadDocument
									to={`/blogs/${card.id}`}
									className={classes.cardButton}
								>
									View More
									<ArrowForward sx={{ ml: "10px", width: "25px" }} />
								</Button>
							</CardActions>
						</Card>
					))
				) : (
					<Card key={blogSelected.id} className={classes.blogsCard}>
						<CardMedia>
							<img src={blogSelected.image} alt='card-img' />
						</CardMedia>{" "}
						<CarrouselButtons
							indexShown={indexShown}
							setIndexShown={setIndexShown}
							maxCards={blogs.length}
						/>
						<CardContent className={classes.contentWrapper}>
							<Box className={classes.blogsDateContainer}>
								<Box>
									<CalendarMonth />
									<Typography className={classes.blogsDate}>
										{blogSelected.date}
									</Typography>
								</Box>
								<Typography className={classes.cardAuthor}>
									By {blogSelected.author}
								</Typography>
							</Box>
							<Typography className={classes.blogTitle}>
								{blogSelected.title}
							</Typography>
							<Typography className={classes.ourTeamCardDescription}>
								{blogSelected.description}
							</Typography>
						</CardContent>
						<CardActions className={classes.cardActions}>
							<Button
								variant='outlined'
								component={Link}
								reloadDocument
								to={`/blogs/${blogSelected.id}`}
								className={classes.cardButton}
							>
								View More
								<ArrowForward sx={{ ml: "10px", width: "25px" }} />
							</Button>
						</CardActions>
					</Card>
				)}
			</Box>
		</Box>
	)
}
