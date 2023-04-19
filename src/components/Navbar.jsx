import { useTheme } from "@mui/material/styles"
import { makeStyles } from "@mui/styles"
import { navbarStyles } from "./styles/navbarStyles"
import { Link, NavLink } from "react-router-dom"
import { Box, Button, Typography, List, ListItem } from "@mui/material"
import WhiteLogo from "../assets/logo/WhiteLogo.png"

const useStyles = makeStyles(navbarStyles)

const navbarItems = [
	{ text: "Home", link: "/" },
	{ text: "Our Offerings", link: "/offerings" },
	{ text: "Our Team", link: "/" },
	{ text: "Contact Us", link: "/" },
	{ text: "Blogs", link: "/" },
]

const Navbar = () => {
	const theme = useTheme()
	const classes = useStyles(theme)
	return (
		<nav className={classes.navContainer}>
			<Box className={classes.navbar}>
				<Box className={classes.navbarLeft}>
					<Link to='/'>
						<img src={WhiteLogo} alt='logo' className={classes.logo} />
					</Link>
				</Box>
				<Box className={classes.navbarRight}>
					<List className={classes.navigation}>
						{navbarItems.map((item) => (
							<ListItem
								component={Link}
								to={item.link}
								className={classes.navOptions}
								key={item.text}
							>
								<Typography className={classes.navOptionsText}>
									{item.text}
								</Typography>
							</ListItem>
						))}
						<ListItem>
							<Button variant='contained' className={classes.navButton}>
								Register Now
							</Button>
						</ListItem>
					</List>
				</Box>
			</Box>
		</nav>
	)
}

export default Navbar
