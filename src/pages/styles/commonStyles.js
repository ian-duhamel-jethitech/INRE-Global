export const commonStyles = (theme) => ({
	homepage: {
		padding: "70px 0",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "70px",
	},
	ourTeamPage: {
		padding: "70px 0",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	ourTeamBlogs: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#F2F4F6",
		paddingTop: "35px",
		paddingBottom: "35px",
		gap: "70px",
	},

	heroText: {
		"&.MuiTypography-root": {
			fontFamily: "Solway",
			fontSize: "40px",
			color: "#FFF",
			fontWeight: "400",
			lineHeight: "48px",
		},
		width: "30%",
	},
	higlightedText: {
		"&.MuiTypography-root": {
			fontFamily: "Solway",
			fontSize: "40px",
			fontWeight: "700",
			lineHeight: "48px",
		},
	},
	teamMember: {
		width: "100%",
		maxWidth: "1464px",
		padding: "45px 0",
		borderBottom: "1.5px solid #ccd3dc",
	},
	teamMemberNameWrapper: {
		marginLeft: "30px",
	},
	teamMemberHead: {
		display: "flex",
		marginBottom: "30px",
	},
	teamMemberName: {
		"&.MuiTypography-root": {
			fontSize: "28px",
			fontWeight: "600",
		},
	},
	teamMemberRole: {
		"&.MuiTypography-root": {
			fontSize: "24px",
			fontWeight: "400",
			color: "#1a1a1a",
			opacity: "0.6",
		},
	},
	teamMemberDescription: {
		"&.MuiTypography-root": {
			fontSize: "20px",
			fontWeight: "400",
			color: "#1a1a1a",
			opacity: "0.6",
		},
	},
	teamMemberImg: {
		width: "120px",
	},
	blogPage: {
		width: "100%",
		paddingTop: "70px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	blogs: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#F2F4F6",
		paddingTop: "35px",
		marginTop: "70px",
		paddingBottom: "35px",
	},
})
