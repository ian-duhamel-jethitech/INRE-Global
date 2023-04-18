export const footerStyles = (theme) => ({
	footer: {
		display: "flex",
		justifyContent: "center",
		height: "380px",
		backgroundColor: theme.palette.primary.main,
		width: "100vw",
	},
	sectionWrapper: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		width: "100%",
		maxWidth: "1464px",
	},
	footerTop: {
		display: "flex",
		justifyContent: "space-between",
		paddingTop: "38px",
		flexGrow: 1,
	},
	logoContainer: {
		width: "104px",
		objectFit: "contain",
	},
	footerTitle: {
		"&.MuiTypography-root": {
			color: "#FFF",
			marginBottom: "25px",
			fontSize: "28px",
			width: "auto",
			fontWeight: "600",
		},
	},
	footerOptions: {
		textDecoration: "none",
		"& .MuiTypography-root": {
			cursor: "pointer",
			fontSize: "20px",
			color: "#FFF",
			marginBottom: "20px",
		},
	},
	footerContact: {
		display: "flex",
		flexDirection: "column",
		gap: "20px",
	},
	footerContactInfo: {
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
	},
	footerContactInfoText: {
		marginLeft: "20px",
	},
	footerContactInfoTitle: {
		"&.MuiTypography-root": {
			color: "#FFF",
			fontSize: "24px",
			fontWeight: "700",
		},
	},
	footerContactInfoDescription: {
		"&.MuiTypography-root": {
			color: "#FFF",
			fontSize: "20px",
			fontWeight: "400",
		},
	},
	infoBar: {
		height: "70px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	infoBarCopyRight: {
		"&.MuiTypography-root": {
			color: "white",
			fontSize: "18px",
			fontWeight: 600,
		},
	},
	socialMediaWrapper: {
		display: "flex",
		gap: "50px",
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
