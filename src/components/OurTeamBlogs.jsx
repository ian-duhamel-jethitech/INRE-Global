import { ArrowForward } from "@mui/icons-material"
import {
	Typography,
	Box,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Button,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useTheme } from "@mui/material"
import { commonStyles } from "./styles/commonStyles"
import Member1Img from "../assets/Team/image 28.png"
import Member2Img from "../assets/Team/image 28 (1).png"
import Member3Img from "../assets/Team/image 28 (2).png"

const useStyles = makeStyles(commonStyles)

const teamMembers = [
	{
		name: "Brajesh Pathak",
		description:
			"Brajesh Pathak, a professional with dual qualifications as a Chartered Accountant and Company Secretary, possesses more than ten years of expertise in overseeing venture capital funds that focus on the real estate industry.",
		role: "Co-Founder",
		image: Member1Img,
	},
	{
		name: "Deepak Shukla",
		description:
			"Deepak Shukla, an alumnus of the Indian Institute of Technology (IIT) Kharagpur and a graduate of the prestigious Indian Institute of Management (IIM) Ahmedabad, has amassed an impressive 11 years of professional experience.",

		role: "Co-Founder",
		image: Member2Img,
	},
	{
		name: "Alok Kumar Singh",
		description:
			"Alok kumar Singh, An Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital.",
		role: "Advisor",
		image: Member3Img,
	},
]

export default function OurTeamBlogs() {
	const theme = useTheme()
	const classes = useStyles(theme)
	return (
		<section className={classes.ourTeamBlogs}>
			<Box className={classes.ourTeamSection}>
				<Box className={classes.titleContainer}>
					<Typography className={classes.sectionTitle}>Our Team</Typography>
					<hr className={classes.ourTeamHr} />
				</Box>
				<Box className={classes.ourTeamCardsWrapper}>
					{teamMembers.map((card) => (
						<Card key={card.id} className={classes.ourTeamCard}>
							<CardMedia>
								<img src={card.image} alt='card-img' />
							</CardMedia>
							<CardContent className={classes.contentWrapper}>
								<Box className={classes.nameAndRole}>
									<Typography className={classes.ourTeamCardTitle}>
										{card.name}
									</Typography>
									<Typography className={classes.cardRole}>
										{card.role}
									</Typography>
								</Box>
								<Typography className={classes.ourTeamCardDescription}>
									{card.description}
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
			{/* <Box className={classes.blogsSection}>
				<Box className={classes.titleContainer}>
					<Typography className={classes.sectionTitle}>Blogs</Typography>
					<hr className={classes.offeringsHr} />
				</Box>
			</Box> */}
		</section>
	)
}
