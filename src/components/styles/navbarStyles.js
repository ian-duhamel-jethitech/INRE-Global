export const navbarStyles = (theme) => ({
	navContainer: {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.75)",
		height: "108px",
		width: "100%",

		[theme.breakpoints.down("md")]: {
			height: "58px",
		},
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
	mobileNavbar: {
		position: "relative",
		display: "none",
		[theme.breakpoints.down("md")]: {
			width: "100%",
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			margin: "0 20px",
			gap: "54px",
		},
		"&. MuiSvgIcon-root": {
			position: "absolute",
			zIndex: "100",
		},
	},
	mobileLogo: {
		zIndex: "0",
		width: "50%",
		left: "25%",
		position: "absolute",
		display: "grid",
		placeItems: "center",
	},
	drawer: {
		"& .MuiDrawer-paper": {
			position: "fixed",
			top: "0",
			width: "50%",
			height: "100vh",
		},
	},
	drawerLogo: {
		"&.MuiListItem-root": {
			display: "flex",
			width: "100%",
			backgroundColor: "#002550",
		},
	},
	drawerOptions: {
		minWidth: "125px",
		alignSelf: "flex-end",
		"&.MuiListItem-root": {
			cursor: "pointer",
			padding: "22px 25px",
			textDecoration: "none",
			color: "#01244A",
			display: "flex",
			fontWeight: "400",
		},
	},
	drawerOptionsActive: {
		"&.MuiListItem-root": {
			opacity: "1",
			fontWeight: "600",
			color: "#002550",
			backgroundColor: "rgba(204, 211, 220, 0.1)",
		},
	},

	drawerOptionsText: {
		"&.MuiTypography-root": {
			fontSize: "18px",
			fontWeight: "400",
			lineHeight: "24px",
			textAlign: "center",
		},
	},

	logo: {
		height: "108px",
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
	navigation: {
		display: "flex",
		justifyContent: "space-between",
		height: "100%",
		"&.MuiList-root": {
			padding: "0",
		},
		[theme.breakpoints.down("md")]: {
			display: "none",
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
		},
	},
	navOptionActive: {
		borderBottom: "4px solid #002550",
	},
	navOptionsText: {
		"&.MuiTypography-root": {
			fontSize: "18px",
			fontWeight: "600",
			lineHeight: "24px",
			textAlign: "center",
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
			[theme.breakpoints.down("md")]: {
				marginLeft: "0",
				lineHeight: "19px",
				fontSize: "14px",
				width: "120px",
				height: "35px",
			},
		},
	},
})
