import {
	Box,
	Typography,
	Autocomplete,
	TextField,
	Button,
	Grid,
} from "@mui/material"
import ContactUsBanner from "../assets/banners/contacUsBanner.png"
import { makeStyles } from "@mui/styles"
import { useTheme } from "@mui/material"
import { commonStyles } from "./styles/commonStyles"
import { Countries } from "../constants/Countries"
import { MuiTelInput } from "mui-tel-input"
import { useState } from "react"
import HeroSection from "../components/HeroSection"

const useStyles = makeStyles(commonStyles)

export default function ContactUsPage() {
	const theme = useTheme()
	const classes = useStyles(theme)
	const [phone, setPhone] = useState("")
	const stages = [
		"I have booked, but my reservation is not done",
		"I am still searching",
		"I have registered, and taken possession",
	]
	const handleChange = (newPhone) => {
		setPhone(newPhone)
	}
	return (
		<section className={classes.homepage}>
			<HeroSection banner={ContactUsBanner}>
				<Typography className={classes.heroText}>
					<Typography
						className={classes.higlightedText}
						style={{ width: "120%" }}
					>
						Are you eager to connect?
					</Typography>{" "}
					We would be delighted to hear from you! Here is how..
				</Typography>
			</HeroSection>
			<Box className={classes.formPageSection}>
				<Typography className={classes.formTitle}>
					Please provide below details
				</Typography>
				<Box className={classes.inputContainer}>
					<TextField label='Full name' className={classes.formInput} />
					<TextField
						placeholder='example@gmail.com'
						label='Email address'
						helperText='Please enter a valid e-mail'
						className={classes.formInput}
					/>
					<MuiTelInput
						defaultCountry='IN'
						placeholder={"9876543210"}
						value={phone}
						onChange={handleChange}
						className={classes.formInput}
					/>
					<Autocomplete
						disablePortal
						options={stages}
						className={classes.formInput}
						renderInput={(params) => <TextField {...params} label='Stage' />}
					/>
					<Autocomplete
						options={Countries}
						getOptionLabel={(option) => option.label}
						className={classes.formInput}
						renderOption={(props, option) => (
							<Box
								component='li'
								sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
								{...props}
							>
								<img
									loading='lazy'
									width='20'
									src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
									srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
									alt=''
								/>
								{option.label}
							</Box>
						)}
						renderInput={(params) => (
							<TextField
								{...params}
								label='Country'
								className={classes.formInput}
								inputProps={{
									...params.inputProps,
									autoComplete: "new-password",
								}}
							/>
						)}
					/>

					<Button variant='contained' className={classes.formButton}>
						Submit
					</Button>
				</Box>
			</Box>
		</section>
	)
}
