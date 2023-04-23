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
import { makeStyles } from "@mui/styles"
import { commonStyles } from "./styles/commonStyles"
import { Link, useNavigate } from "react-router-dom"
import { blogs } from "../constants/teamBlogs"

const useStyles = makeStyles(commonStyles)

export default function Blogs({ title }) {
	const theme = useTheme()
	const classes = useStyles(theme)
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
				{blogs.map((card) => (
					<Card key={card.id} className={classes.blogsCard}>
						<CardMedia>
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
				))}
			</Box>
		</Box>
	)
}
