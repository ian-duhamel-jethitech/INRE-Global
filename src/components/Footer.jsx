import { Link } from "react-router-dom"
import { useTheme } from "@mui/material/styles"
import { makeStyles } from "@mui/styles"
import { footerStyles } from "./styles/footerStyles"
import { Box, Typography } from "@mui/material"
import LinkedinLogo from "../assets/Icons/Linkedin.png"
import FacebookLogo from "../assets/Icons/Vector-1.png"
import InstagramLogo from "../assets/Icons/Vector-3.png"
import PhoneLogo from "../assets/Icons/Vector-4.png"
import EmailLogo from "../assets/Icons/Vector-5.png"
import CompanyLogo from "../assets/Icons/10.svg"

const SocialBarData = [
	{ logo: LinkedinLogo, text: "LinkedIn" },
	{ logo: FacebookLogo, text: "Facebook" },
	{ logo: InstagramLogo, text: "Instagram" },
]
const companyLinks = [
	{ text: "Home", href: "#" },
	{ text: "Our Team", href: "#" },
	{ text: "Contact Us", href: "#" },
	{ text: "Blogs", href: "#" },
]

const contactInfo = [
	{ icon: EmailLogo, title: "Email", text: "support@inreglobal.com" },
	{ icon: PhoneLogo, title: "Phone", text: "+91 | 7019305889" },
]
const useStyles = makeStyles(footerStyles)

const Footer = () => {
	const theme = useTheme()
	const classes = useStyles(theme)
	return (
		<footer className={classes.footer}>
			<Box className={classes.sectionWrapper}>
				<Box className={classes.footerTop}>
					<Box className={classes.logoContainer}>
						<img src={CompanyLogo} />
					</Box>
					<Box>
						<Typography className={classes.footerTitle}>Company </Typography>
						{companyLinks.map((x) => (
							<Link
								to={x.href}
								key={x.text}
								className={classes.footerOptions}
								underline='none'
							>
								<Typography>{x.text}</Typography>
							</Link>
						))}
					</Box>
					<Box>
						<Typography className={classes.footerTitle}>
							Useful Links
						</Typography>
						<Link to={"/"} className={classes.footerOptions} underline='none'>
							<Typography>Blogs</Typography>
						</Link>
					</Box>
					<Box className={classes.footerContact}>
						{contactInfo.map((info) => (
							<Box key={info.title} className={classes.footerContactInfo}>
								<img src={info.icon} alt={`${info.title} logo`} />
								<Box className={classes.footerContactInfoText}>
									<Typography className={classes.footerContactInfoTitle}>
										{info.title}
									</Typography>
									<Typography className={classes.footerContactInfoDescription}>
										{info.text}
									</Typography>
								</Box>
							</Box>
						))}
					</Box>
				</Box>
				<Box className={classes.infoBar}>
					<Typography className={classes.infoBarCopyRight}>
						Copyright 2023. Designed by INRE Global
					</Typography>
					<Box className={classes.socialMediaWrapper}>
						{SocialBarData.map((x) => (
							<Box className={classes.socialMedia} key={x.text}>
								<Box>
									<img src={x.logo} alt='logo' />
								</Box>
								<Typography>{x.text}</Typography>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		</footer>
	)
}
export default Footer
