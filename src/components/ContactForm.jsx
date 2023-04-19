import {
	Box,
	Typography,
	Autocomplete,
	TextField,
	Button,
	Grid,
} from "@mui/material"
import ContactUsImg from "../assets/banners/contactUs.png"
import { makeStyles } from "@mui/styles"
import { useTheme } from "@mui/material"
import { formStyles } from "./styles/formStyles"
import { Countries } from "../constants/Countries"
import { MuiTelInput } from "mui-tel-input"
import { useState } from "react"

const useStyles = makeStyles(formStyles)

const ContactForm = () => {
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
		<section className={classes.contactUs}>
			<Box className={classes.titleContainer}>
				<Typography className={classes.sectionTitle}>Contact Us</Typography>
				<hr className={classes.offeringsHr} />
			</Box>
			<Box id='contactUs' className={classes.formContainer}>
				<Box className={classes.formLeftSide}>
					<Typography className={classes.formTitle}>
						Please provide below details
					</Typography>
					<Box>
						<Grid
							container
							rowSpacing={"48px"}
							columnSpacing={"24px"}
							className={classes.Grid}
						>
							<Grid item>
								<TextField label='Full name' className={classes.formInput} />
							</Grid>
							<Grid item>
								<TextField
									placeholder='example@gmail.com'
									label='Email address'
									helperText='Please enter a valid e-mail'
									className={classes.formInput}
								/>
							</Grid>
							<Grid item>
								<MuiTelInput
									defaultCountry='IN'
									placeholder={"9876543210"}
									value={phone}
									onChange={handleChange}
									className={classes.formInput}
								/>
							</Grid>

							<Grid item>
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
							</Grid>
							<Grid item>
								<Autocomplete
									disablePortal
									options={stages}
									className={classes.formInput}
									renderInput={(params) => (
										<TextField {...params} label='Stage' />
									)}
								/>
							</Grid>
						</Grid>
						<Button variant='contained' className={classes.formButton}>
							Submit
						</Button>
					</Box>
				</Box>
				<Box className={classes.imgContainer}>
					<img className={classes.img} src={ContactUsImg} alt='contactus' />
				</Box>
			</Box>
		</section>
	)
}
export default ContactForm
