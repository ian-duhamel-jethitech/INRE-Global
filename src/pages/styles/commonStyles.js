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
	blogsPage: {
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
	blogPage: {
		width: "100%",
		paddingTop: "35px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	goBack: {
		width: "100%",
		maxWidth: "1464px",
		display: "flex",
		justifyContent: "flex-start",
	},
	goBackText: {
		display: "flex",
		alignItems: "center",
		"&.MuiTypography-root": {
			textDecoration: "none",
			color: "#1a1a1a",
			fontSize: "20px",
			fontWeight: "400",
			marginBottom: "35px",
		},
		"& .MuiSvgIcon-root": {
			color: "#1a1a1a",
			fontSize: "20px",
			marginRight: "10px",
			cursor: "pointer",
		},
	},
	blogSection: {
		width: "90%",
		maxWidth: "1464px",
		marginTop: "35px",
		marginBottom: "70px",
	},
	blogDate: {
		display: "flex",
		alignItems: "center",
		"&.MuiTypography-root": {
			fontSize: "24px",
		},
		"& .MuiSvgIcon-root": {
			width: "20px",
			height: "20px",
			marginRight: "14px",
		},
	},
	blogsDateContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: "30px",
		"& .MuiBox-root": {
			display: "flex",
			alignItems: "center",
			gap: "14px",
		},
	},
	blogHeader: {
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: "35px",
	},
	blogsDate: {
		"&.MuiTypography-root": {
			fontSize: "16px",
			fontWeight: "600",
		},
	},
	blogAuthor: {
		"&.MuiTypography-root": {
			fontSize: "24px",
			fontWeight: "600",
			color: "#1A1A1A",
			opacity: "0.6",
		},
	},
	blogDescription: {
		"&.MuiTypography-root": {
			fontSize: "24px",
			fontWeight: "600",
			color: "#1A1A1A",
			opacity: "0.6",
			marginBottom: "35px",
		},
	},
	blogHr: {
		backgroundColor: "#ccd3dc",
	},
	blogButtons: {
		margin: "35px 0 ",
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		"& .MuiButton-root": {
			width: "200px",
			padding: "12px",
			fontSize: "18px",
			fontWeight: "600",
		},
	},
})
