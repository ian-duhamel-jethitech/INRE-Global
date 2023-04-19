export const navbarStyles = (theme) => ({
	navContainer: {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.75)",
		height: "108px",
		width: "100%",
	},
	navbar: {
		display: "flex",
		position: "relative",
		width: "100%",
		maxWidth: "1464px",
	},
	navbarLeft: {
		display: "flex",
		alignItems: "center",
		height: "100%",
	},
	navbarRight: {
		position: "relative",
		flex: "1",
		display: "flex",
		justifyContent: "flex-end",
		height: "100%",
	},

	logo: {
		height: "108px",
	},
	navigation: {
		display: "flex",
		justifyContent: "space-between",
		height: "100%",
		"&.MuiList-root": {
			padding: "0",
		},
	},
	navOptions: {
		minWidth: "125px",
		alignSelf: "flex-end",
		"&.MuiListItem-root": {
			cursor: "pointer",
			padding: "22px 0",
			textDecoration: "none",
			color: "#002550",
			textAlign: "center",
			display: "flex",
			justifyContent: "center",
			"&:hover": {
				borderBottom: "4px solid #002550",
			},
		},
	},
	navOptionsText: {
		"&.MuiTypography-root": {
			fontSize: "18px",
			fontWeight: "600",
			lineHeight: "24px",
			textAlign: "center",
			lineHeight: "24px",
		},
	},
	navButton: {
		"&.MuiButton-root": {
			marginLeft: "62px",
			textTransform: "none",
			fontSize: "18px",
			backgroundColor: "#002550",
			width: "168px",
			height: "48px",
			alignSelf: "center",
		},
	},
})
