import { makeStyles } from "@mui/styles"
import { useTheme } from "@mui/material"
import { commonStyles } from "./styles/commonStyles"
import ourTeamBanner from "../assets/banners/ourTeamBanner.png"
import { Box, Typography } from "@mui/material"
import HeroSection from "../components/HeroSection"
import Member1Img from "../assets/Team/image 28.png"
import Member2Img from "../assets/Team/image 28 (1).png"
import Member3Img from "../assets/Team/image 28 (2).png"

const useStyles = makeStyles(commonStyles)

const teamMembers = [
	{
		name: "Brajesh Pathak",
		description:
			"Brajesh Pathak, a professional with dual qualifications as a Chartered Accountant and Company Secretary, possesses more than ten years of expertise in overseeing venture capital funds that focus on the real estate industry. As the former head of Azure Capital Advisors Private Limited, he has served on both the managing committee and execution committee for the 100 Crore real estate-focused funds at Azure Capital. He has also played a key role in overseeing the execution committees for several special purpose vehicles of investee companies, specifically for development work, construction management, plotted development, villa projects, and apartments. In addition, he has actively participated in the fundraising process, including developing investor relationships, retail sales, and NRI relationship handling for real estate advisory. Most recently, he led the fundraising efforts of several startups, from seed round to series-B round.",
		role: "Co-Founder",
		image: Member1Img,
	},
	{
		name: "Deepak Shukla",
		description:
			"Deepak Shukla, an alumnus of the Indian Institute of Technology (IIT) Kharagpur and a graduate of the prestigious Indian Institute of Management (IIM) Ahmedabad, has amassed an impressive 11 years of professional experience across a range of geographies and firms such as Credit Suisse, Telus International, FICO, Alvarez and Marsal, and The World Bank. His more recent endeavors have centred around leveraging the power of Artificial Intelligence (AI) to address real-world challenges. He has played a pivotal role in developing innovative voicebots for contact centers and pioneering automated training and validation techniques for computer vision applications, among other cutting-edge AI-driven initiatives.",

		role: "Co-Founder",
		image: Member2Img,
	},
	{
		name: "Alok Kumar Singh",
		description:
			"Alok kumar Singh, An Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Real Estate Private Equity Fund and Azven Realty, a full service Real Estate Development firm in Bangalore. Set-up and managed a SEBI registered VC fund under Azure Capital. Actively involved in mentoring and advising seed and growth stage startups  at C-Level in Visioning, Governance, Strategy Development & Implementation, Growth Planning, Goal Setting and Investment Structuring & Management.",
		role: "Advisor",
		image: Member3Img,
	},
]

export default function OurTeamPage() {
	const theme = useTheme()
	const classes = useStyles(theme)
	return (
		<section className={classes.ourTeamPage}>
			<HeroSection banner={ourTeamBanner}>
				<Typography className={classes.heroText} style={{ width: "40%" }}>
					Success sprouts from a great idea, fueled by
					<Typography component='span' className={classes.higlightedText}>
						{" "}
						teamwork, dedication,{" "}
						<Typography component='span' className={classes.heroText}>
							{" "}
							and{" "}
						</Typography>
						collaboration.
					</Typography>{" "}
				</Typography>
			</HeroSection>
			{teamMembers.map((section) => (
				<Box className={classes.teamMember}>
					<Box className={classes.teamMemberHead}>
						<img
							src={section.image}
							alt='card-img'
							className={classes.teamMemberImg}
						/>
						<Box className={classes.teamMemberNameWrapper}>
							<Typography className={classes.teamMemberName}>
								{section.name}
							</Typography>
							<Typography className={classes.teamMemberRole}>
								{section.role}
							</Typography>
						</Box>
					</Box>
					<Typography className={classes.teamMemberDescription}>
						{section.description}
					</Typography>
				</Box>
			))}
		</section>
	)
}
