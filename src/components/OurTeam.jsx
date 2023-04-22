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
import { teamMembers, blogs } from "../constants/teamBlogs"

const useStyles = makeStyles(commonStyles)

export default function OurTeam() {
	const theme = useTheme()
	const nav = useNavigate()
	const classes = useStyles(theme)
	return (
		<Box className={classes.ourTeamSection}>
			<Box className={classes.titleContainer} to='/team' component={Link}>
				<Typography className={classes.sectionTitle}>Our Team</Typography>
				<hr className={classes.ourTeamHr} />
			</Box>
			<Box className={classes.ourTeamCardWrapper}>
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
							<Button
								variant='outlined'
								onClick={() => nav("/team")}
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
