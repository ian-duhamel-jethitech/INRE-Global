import { makeStyles } from "@mui/styles"
import { Box, useTheme, Typography, Button } from "@mui/material"
import { commonStyles } from "./styles/commonStyles"
import HeroSection from "../components/HeroSection"
import Blogs from "../components/Blogs"
import { Link, useNavigate, useParams } from "react-router-dom"
import { blogs } from "../constants/teamBlogs"
import { ArrowBack, ArrowForward, CalendarMonth } from "@mui/icons-material"

const useStyles = makeStyles(commonStyles)

export default function BlogPage() {
	const theme = useTheme()
	const classes = useStyles(theme)
	const { id } = useParams()
	const blog = blogs.find((blog) => blog.id === id)
	const nav = useNavigate()

	return (
		<section className={classes.blogPage}>
			<Box className={classes.goBack}>
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
					<Typography className={classes.blogDate}>
						<CalendarMonth />
						{blog.date}
					</Typography>
					<Typography className={classes.blogAuthor}>
						By: {blog.author}
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
					<Typography>
						For more insightful details Contact Us today,{" "}
						<Typography
							component={Link}
							to='/contactus'
							className={classes.contactUs}
						>
							Click Here
						</Typography>
					</Typography>
				</Box>
			</Box>
			<section className={classes.blogs}>
				<Blogs title={"You May Also Like This"} />
			</section>
		</section>
	)
}
