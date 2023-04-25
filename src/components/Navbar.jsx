import { useTheme } from "@mui/material/styles"
import { useEffect, useState } from "react"
import { makeStyles } from "@mui/styles"
import { navbarStyles } from "./styles/navbarStyles"
import { Link, useLocation } from "react-router-dom"
import { Drawer, Box, Button, Typography, List, ListItem } from "@mui/material"
import Menu from "@mui/icons-material/Menu"
import WhiteLogo from "../assets/logo/WhiteLogo.png"
import MobileLogo from "../assets/logo/MobileLogo.png"
import DrawerLogo from "../assets/logo/DrawerLogo.png"
import useWidth from "../hooks/useWidth"

const useStyles = makeStyles(navbarStyles)

const navbarItems = [
	{ text: "Home", link: "/" },
	{ text: "Our Offerings", link: "/offerings" },
	{ text: "Our Team", link: "/team" },
	{ text: "Contact Us", link: "/contactus" },
	{ text: "Blogs", link: "/blogs" },
]

const Navbar = () => {
	const [isActive, setIsActive] = useState("")
	const [isOpen, setIsOpen] = useState(false)
	const location = useLocation()
	useEffect(() => {
		setIsActive(location.pathname)
	}, [location.pathname])
	const theme = useTheme()
	const { width } = useWidth()
	if (width > 850 && isOpen) {
		setIsOpen(false)
	}
	const classes = useStyles(theme)

	return (
		<>
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
									className={`${classes.navOptions} ${
										isActive === item.link && classes.navOptionActive
									}`}
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
					<Box className={classes.mobileNavbar}>
						<Menu onClick={() => setIsOpen(!isOpen)} />
						<Box className={classes.mobileLogo}>
							<Link to='/'>
								<img src={MobileLogo} alt='logo' />
							</Link>
						</Box>
						<Button variant='contained' className={classes.navButton}>
							Register Now
						</Button>
					</Box>
				</Box>
			</nav>
			<Drawer
				className={classes.drawer}
				open={isOpen}
				anchor='left'
				onClose={() => setIsOpen(false)}
			>
				<ListItem component={Link} to='/' className={classes.drawerLogo}>
					<img src={DrawerLogo} alt='logo' />
				</ListItem>
				{navbarItems.map((item) => (
					<ListItem
						component={Link}
						to={item.link}
						className={`${classes.drawerOptions} ${
							isActive === item.link && classes.drawerOptionsActive
						}`}
						key={item.text}
					>
						<Typography className={classes.drawerOptionsText}>
							{item.text}
						</Typography>
					</ListItem>
				))}
			</Drawer>
		</>
	)
}

export default Navbar
