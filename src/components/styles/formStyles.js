export const formStyles = (theme) => ({
	formContainer: {
		width: "100%",
		maxWidth: "1464px",
		padding: "58px 64px",
		display: "flex",
		justifyContent: "space-between",
		boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 10px",
	},

	formTitle: {
		"&.MuiTypography-root": {
			fontSize: "28px",
			fontWeight: "600",
			color: "#002550",
			marginBottom: "30px",
		},
	},
	formInput: {
		width: "350px",
		height: "48px",
	},
	formButton: {
		"&.MuiButton-root": {
			marginTop: "35px",
			width: "350px",
			height: "48px",
			fontWeight: "600",
			fontSize: "18px",
			textTransform: "none",
		},
	},
	imgContainer: {
		display: "flex",
		width: "40%",
	},
	img: {
		borderRadius: "5px",
		objectFit: "contain",
		width: "100%",
	},
	contactUsSection: {
		width: "100%",
		maxWidth: "1464px",
	},
	formLeftSide: {
		width: "60%",
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
		},
	},
	offeringsHr: {
		margin: "10px 0 35px  0",
		width: "133px",
		height: "5px",
		backgroundColor: "#002550",
		textAlign: "center",
	},
})
