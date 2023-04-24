import { makeStyles } from "@mui/styles"
import { Box, useTheme, Typography, Button } from "@mui/material"
import { commonStyles } from "./styles/commonStyles"
import HeroSection from "../components/HeroSection"
import Blogs from "../components/Blogs"
import { Link, useNavigate, useParams } from "react-router-dom"
import {
	PreBooking,
	PostBooking,
	PostRegistration,
} from "../constants/Offerings"
import { ArrowBack, ArrowForward, CalendarMonth } from "@mui/icons-material"

const useStyles = makeStyles(commonStyles)

export default function BlogPage() {
	const theme = useTheme()
	const classes = useStyles(theme)
	const { slug, id } = useParams()

	// const nav = useNavigate()
	const content = [PostBooking, PreBooking, PostRegistration].find(
		(x) => x.toLocaleString().toLowerCase() === slug
	)
	console.log(content)

	return (
		<section className={classes.blogPage}>
			{slug}
			{id}
			{/* <Box className={classes.goBack}>
				<Typography
					to={"/blogs"}
					component={Link}
					className={classes.goBackText}
				>
					<ArrowBack />
					{blog.title}
				</Typography>
			</Box>
			<HeroSection banner={blog.image} />
			<Box className={classes.blogSection}>
				<Box className={classes.blogHeader}>
					<Typography className={classes.blogAuthor}>
						{offering.title}
					</Typography>
				</Box>
				<Typography className={classes.blogDescription}>
					{blog.descriptionExtended}
				</Typography>
				<hr className={classes.blogHr} />
				<Box className={classes.blogsNavigation}>
					<Box className={classes.blogButtons}>
						<Button
							variant='outlined'
							onClick={() => {
								Number(id) > 1 && nav(`/blogs/${Number(id) - 1}`)
							}}
						>
							<ArrowBack />
							Previous Post
						</Button>
						<Button
							variant='contained'
							onClick={() => {
								Number(id) < blogs.length && nav(`/blogs/${Number(id) + 1}`)
							}}
						>
							Next Post <ArrowForward />
						</Button>
					</Box>
					<Typography className={classes.contactUsLink}>
						For more insightful details Contact Us today,{" "}
						<Typography component={Link} to='/contactus'>
							Click Here
						</Typography>
					</Typography>
				</Box>
			</Box> */}
			<section className={classes.blogs}>
				<Blogs title={"You May Also Like This"} />
			</section>
		</section>
	)
}
