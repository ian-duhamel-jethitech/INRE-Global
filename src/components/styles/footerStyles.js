export const footerStyles = (theme) => ({
	footer: {
		display: "flex",
		justifyContent: "center",
		height: "380px",
		backgroundColor: theme.palette.primary.main,
		width: "100%",
		[theme.breakpoints.down("md")]: {
			height: "auto",
		},
	},
	sectionWrapper: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		width: "90%",
		maxWidth: "1464px",
	},
	footerTop: {
		display: "flex",
		justifyContent: "space-between",
		paddingTop: "38px",
		flexGrow: 1,
		[theme.breakpoints.down("md")]: {
			paddingTop: "20px",
			display: "grid",
			gridTemplateColumns: "repeat(2, 50%)",
		},
	},
	logoContainer: {
		objectFit: "contain",
		[theme.breakpoints.down("md")]: {
			gridColumn: "1/3",
			width: "100%",
			display: "grid",
			placeItems: "center",
		},
		"& img": {
			width: "104px",
			objectFit: "contain",
			[theme.breakpoints.down("md")]: {
				width: "30%",
			},
		},
	},
	footerTitle: {
		"&.MuiTypography-root": {
			color: "#FFF",
			marginBottom: "25px",
			fontSize: "28px",
			width: "auto",
			fontWeight: "600",
			[theme.breakpoints.down("md")]: {
				fontSize: "16px",
				marginBottom: "12px",
			},
		},
	},
	footerOptions: {
		textDecoration: "none",
		"& .MuiTypography-root": {
			cursor: "pointer",
			fontSize: "20px",
			color: "#FFF",
			marginBottom: "20px",
			[theme.breakpoints.down("md")]: {
				fontSize: "16px",
				marginBottom: "10px",
			},
		},
	},
	footerContact: {
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		[theme.breakpoints.down("md")]: {
			width: "100%",
			gridColumn: "1/3",
			flexDirection: "row",
			justifyContent: "space-between",
			gap: "0",
		},
	},
	footerContactInfo: {
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		[theme.breakpoints.down("md")]: {
			width: "100%",
		},
		"& img": {
			width: "40px",
			[theme.breakpoints.down("md")]: {
				width: "24px",
			},
		},
	},
	footerContactInfoText: {
		marginLeft: "20px",
		[theme.breakpoints.down("md")]: {
			marginLeft: "8px",
		},
	},
	footerContactInfoTitle: {
		"&.MuiTypography-root": {
			color: "#FFF",
			fontSize: "24px",
			fontWeight: "700",
			[theme.breakpoints.down("md")]: {
				fontSize: "16px",
				width: "100%",
			},
		},
	},
	footerContactInfoDescription: {
		"&.MuiTypography-root": {
			color: "#FFF",
			fontSize: "20px",
			fontWeight: "400",
			[theme.breakpoints.down("md")]: {
				fontSize: "16px",
				width: "100%",
				textAlign: "left",
			},
		},
	},
	infoBar: {
		height: "70px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		[theme.breakpoints.down("md")]: {
			flexDirection: "column-reverse",
			height: "auto",
			gap: "35px",
		},
	},
	infoBarCopyRight: {
		"&.MuiTypography-root": {
			color: "white",
			fontSize: "18px",
			fontWeight: 600,
			[theme.breakpoints.down("md")]: {
				fontSize: "16px",
				fontWeight: 400,
				marginBottom: "15px",
			},
		},
	},
	socialMediaWrapper: {
		display: "flex",
		gap: "50px",
		[theme.breakpoints.down("md")]: {
			width: "90%",
			marginTop: "20px",
			gap: "20px",
			display: "grid",
			gridTemplateColumns: "repeat(2, 50%)",
		},
	},
	socialMedia: {
		height: "25px",
		display: "flex",
		alignItems: "center",
		gap: "15px",
		cursor: "pointer",
		"& .MuiTypography-root": {
			color: "white",
			fontSize: "18px",
			fontWeight: "600",
			verticalAlign: "middle",
		},
	},
})
