export const formStyles = (theme) => ({
	formContainer: {
		width: "100%",
		maxWidth: "1464px",
		padding: "58px 64px",
		display: "flex",
		justifyContent: "space-between",
		boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 10px",
		[theme.breakpoints.down("lg")]: {
			flexDirection: "column-reverse",
			alignItems: "center",
			boxShadow: "none",
			padding: "0",
		},
	},
	formTitle: {
		"&.MuiTypography-root": {
			fontSize: "28px",
			fontWeight: "600",
			color: "#002550",
			marginBottom: "30px",
			[theme.breakpoints.down("lg")]: {
				fontSize: "24px",
			},
		},
	},
	formInput: {
		width: "100%",
		height: "48px",
		[theme.breakpoints.down("md")]: {
			width: "90%",
		},
	},
	formButton: {
		gridColumn: "1/3",
		"&.MuiButton-root": {
			width: "350px",
			height: "48px",
			fontWeight: "600",
			fontSize: "18px",
			textTransform: "none",
			[theme.breakpoints.down("md")]: {
				width: "90%",
			},
		},
	},
	imgContainer: {
		display: "flex",
		width: "40%",
		[theme.breakpoints.down("lg")]: {
			display: "none",
		},
		[theme.breakpoints.down("md")]: {
			display: "flex",
			width: "100%",
			marginBottom: "12px",
		},
	},
	inputContainer: {
		width: "100%",
		display: "inline-grid",
		gridTemplateColumns: "repeat(2, 350px)",
		columnGap: "24px",
		rowGap: "32px",
		[theme.breakpoints.down("md")]: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			columnGap: "0",
		},
	},
	img: {
		borderRadius: "5px",
		objectFit: "cover",
		height: "100%",
		width: "100%",
	},
	contactUsSection: {
		width: "100%",
		maxWidth: "1464px",
	},
	formLeftSide: {
		display: "flex",
		flexDirection: "column",
		alignItems: "start",
		width: "60%",
		[theme.breakpoints.down("lg")]: {
			width: "100%",
			alignItems: "center",
		},
	},
	titleContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	sectionTitle: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "0 0 10px 0",
		"&.MuiTypography-root": {
			fontSize: "32px",
			fontWeight: "700",
			color: "#002550",
			lineHeight: "33px",
			[theme.breakpoints.down("lg")]: {
				fontSize: "24px",
			},
			[theme.breakpoints.down("md")]: {
				fontSize: "20px",
			},
		},
	},
	offeringsHr: {
		margin: "10px 0 35px  0",
		width: "133px",
		height: "5px",
		backgroundColor: "#002550",
		textAlign: "center",

		[theme.breakpoints.down("lg")]: {
			margin: "0 0 25px  0",
			width: "100px",
		},
	},
})
