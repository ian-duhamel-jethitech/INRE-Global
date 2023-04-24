import { ArrowForward } from "@mui/icons-material"
import { useState } from "react"
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
import useWidth from "../hooks/useWidth"
import { Link, useNavigate } from "react-router-dom"
import { teamMembers } from "../constants/teamBlogs"
import CarouselButtons from "./CarouselButtons"

const useStyles = makeStyles(commonStyles)

export default function OurTeam() {
	const [indexShown, setIndexShown] = useState(0)
	const { width } = useWidth()
	const theme = useTheme()
	const nav = useNavigate()
	const classes = useStyles(theme)
	const cardSelected = teamMembers[indexShown]
	return (
		<Box className={classes.ourTeamSection}>
			<Box className={classes.titleContainer} to='/team' component={Link}>
				<Typography className={classes.sectionTitle}>Our Team</Typography>
				<hr className={classes.ourTeamHr} />
			</Box>
			<Box className={classes.ourTeamCardWrapper}>
				{width > 850 ? (
					teamMembers.map((card) => (
						<Card key={card.id} className={classes.ourTeamCard}>
							<CardMedia className={classes.imgContainer}>
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
					))
				) : (
					<Card key={cardSelected.id} className={classes.ourTeamCard}>
						<CardMedia>
							<img src={cardSelected.image} alt='card-img' />
						</CardMedia>
						<CarouselButtons
							indexShown={indexShown}
							setIndexShown={setIndexShown}
							maxCards={teamMembers.length}
						/>
						<CardContent className={classes.contentWrapper}>
							<Box className={classes.nameAndRole}>
								<Typography className={classes.ourTeamCardTitle}>
									{cardSelected.name}
								</Typography>
								<Typography className={classes.cardRole}>
									{cardSelected.role}
								</Typography>
							</Box>
							<Typography className={classes.ourTeamCardDescription}>
								{cardSelected.description}
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
				)}
			</Box>
		</Box>
	)
}
