export const commonStyles = (theme) => ({
	heroSection: {
		position: "relative",
		width: "95%",
		height: "480px",
		aspectRatio: "auto",
		maxWidth: "1464px",
		display: "flex",
		alignItems: "center",
		borderRadius: "50px",
		[theme.breakpoints.down("md")]: {
			height: "240px",
		},
		[theme.breakpoints.down("sm")]: {
			height: "160px",
		},
	},
	textWrapper: {
		objectFit: "cover",
		position: "absolute",
		display: "flex",
		alignItems: "center",
		padding: "0 72px",
		height: "100%",
		width: "100%",
		background:
			"linear-gradient(90deg, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0) 100%)",
		borderRadius: "10px",
		[theme.breakpoints.down("md")]: {
			padding: "0 24px",
		},
	},
	whoWeAreSection: {
		"&.MuiPaper-root": {
			width: "95%",
			maxWidth: "1464px",
			height: "409px",
			backgroundColor: "#F1F1F1",
			display: "flex",
			alignItems: "center",
			padding: "30px ",
			gap: "30px",
			[theme.breakpoints.down("lg")]: {
				height: "auto",
			},
			[theme.breakpoints.down("md")]: {
				flexDirection: "column",
				gap: "10px",
			},
		},
	},
	whoWeAreText: {
		height: "100%",
		width: "100%",
		maxWidth: "708px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start",
	},
	whoWeAreTextHeader: {
		"&.MuiTypography-root": {
			marginBottom: "10px",
			fontSize: "28px",
			fontWeight: "600",
			lineHeight: "38px",
			[theme.breakpoints.down("md")]: {
				fontSize: "16px",
			},
		},
	},
	whoWeAreTextDescription: {
		width: "100%",
		"&.MuiTypography-root": {
			color: "#1A1A1A",
			lineHeight: "24px",
			fontSize: "18px",
			opacity: "0.6",
			maxHeight: "196px",
			overflow: "hidden",
			textOverflow: "ellipsis",
			[theme.breakpoints.down("md")]: {
				fontSize: "12px",
			},
		},
	},
	whoWeAreImg: {
		objectFit: "cover",
		width: "50%",
		height: "100%",
		maxWidth: "660px",
		[theme.breakpoints.down("md")]: {
			width: "100%",
		},
	},
	whoWeAreButton: {
		width: "30%",
		height: "64px",
		"&.MuiButton-root": {
			fontWeight: "600",
			marginTop: "10px",
			fontSize: "18px",
			color: "#002550",
			textTransform: "none",
			borderColor: "#002550",
		},

		[theme.breakpoints.down("lg")]: {
			width: "50%",
		},
		[theme.breakpoints.down("md")]: {
			width: "100%",
		},
	},
	offeringsSection: {
		marginTop: "20px",
		width: "100%",
		maxWidth: "1464px",
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
		},
	},
	offeringsHr: {
		width: "200px",
		height: "5px",
		backgroundColor: "#002550",
		textAlign: "center",
	},
	linkHighlighted: {
		textDecoration: "none",
		fontSize: "16px",
		fontWeight: "700",
		color: "#002550",
	},
	sectionDescription: {
		"&.MuiTypography-root": {
			textAlign: "center",
			marginTop: "20px",
			fontSize: "16px",
			marginBottom: "35px",
		},
	},
	tabsWrapper: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		gap: "30px",
		borderRadius: "2.5px",
		[theme.breakpoints.down("lg")]: {
			gap: "10px",
		},

		[theme.breakpoints.down("md")]: {
			width: "90%",
		},
	},
	tab: {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "30%",
		maxWidth: "470px",
		height: "100px",
		backgroundColor: "#F2F4F6",
		cursor: "pointer",
		[theme.breakpoints.down("md")]: {
			maxWidth: "100px",
			flexGrow: "1",
		},
	},
	tabNumber: {
		width: "48px",
		height: "48px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "100%",
		backgroundColor: "#fff",
		fontSize: "24px",
		fontFamily: "Open Sans",
		lineHeight: "32px",
		marginRight: "10px",
		[theme.breakpoints.down("md")]: {
			marginRight: "0",
			maxWidth: "64px",
			backgroundColor: "transparent",
		},
	},
	tabTitle: {
		maxWidth: "199px",
		"&.MuiTypography-root": {
			fontSize: "24px",
			fontWeight: "400",
			lineHeight: "32px",
		},
	},
	activeTab: {
		backgroundColor: "#CCD3DC",
		[theme.breakpoints.down("md")]: {
			width: "100%",
			display: "flex",
			justifyContent: "center",
			maxWidth: "470px",
		},
	},
	hrTab: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		height: "5px",
		backgroundColor: "#002550",
	},
	cardsWrapper: {
		width: "100%",
		maxWidth: "1464px",
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		gap: "24px",
		marginTop: "35px",
		[theme.breakpoints.down("lg")]: {
			gap: "20px",
		},
		[theme.breakpoints.down("md")]: {
			gridTemplateColumns: "1fr",
		},
	},
	card: {
		position: "relative",
		width: "100%",
		maxHeight: "680px",
		maxWidth: "456px",
		padding: "30px 24px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		"&:hover": {
			boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
		},
		[theme.breakpoints.down("md")]: {
			width: "90%",
			margin: "0 auto",
		},
	},
	contentWrapper: {
		"&.MuiCardContent-root": {
			marginTop: "30px",
			width: "100%",
			padding: 0,
			flexGrow: 1,
			[theme.breakpoints.down("md")]: {
				marginTop: "10px",
			},
		},
	},
	cardTitle: {
		"&.MuiTypography-root": {
			fontSize: "28px",
			fontWeight: "600",
			marginBottom: "22px",
			[theme.breakpoints.down("md")]: {
				fontSize: "20px",
			},
		},
	},
	cardDescription: {
		"&.MuiTypography-root": {
			fontSize: "18px",
			fontWeight: "400",
			lineHeight: "24px",
			color: "#1A1A1A",
			opacity: "0.6",
			[theme.breakpoints.down("md")]: {
				fontSize: "12px",
			},
		},
	},
	cardActions: {
		"&.MuiCardActions-root": {
			margin: 0,
			padding: 0,
			alignSelf: "flex-start",
			width: "100%",
		},
	},
	cardButton: {
		height: "64px",
		"&.MuiButton-root": {
			fontWeight: "600",
			width: "fit-content",
			padding: "0px 40px",
			marginTop: "10px",
			fontSize: "18px",
			color: "#002550",
			textTransform: "none",
			borderColor: "#002550",
			[theme.breakpoints.down("md")]: {
				fontSize: "16px",
				width: "100%",
			},
		},
	},
	ourTeamSection: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},

	titleContainer: {
		width: "100%",
		marginBottom: "35px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		textDecoration: "none",
	},
	ourTeamHr: {
		width: "54px",
		height: "5px",
		backgroundColor: "#002550",
	},
	ourTeamCardWrapper: {
		width: "100%",
		maxWidth: "1464px",
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		gap: "46px",
		justifyContent: "center",
		[theme.breakpoints.down("lg")]: {
			gap: "20px",
			width: "90%",
		},
		[theme.breakpoints.down("md")]: {
			gridTemplateColumns: "1fr",
			placeItems: "center",
			width: "100%",
		},
	},
	ourTeamCard: {
		position: "relative",
		width: "100%",
		maxHeight: "680px",
		maxWidth: "456px",
		padding: "5% 7%",
		display: "flex",
		borderRadius: "10px",
		flexDirection: "column",
		alignItems: "center",
		"&:hover": {
			boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
		},
		[theme.breakpoints.down("md")]: {
			width: "90%",
		},
	},
	nameAndRole: {
		display: "flex",
		justifyContent: "space-between",
		height: "40px",
		alignItems: "center",
		marginBottom: "22px",
		[theme.breakpoints.down("lg")]: {
			marginBottom: "10px",
			height: "fit-content",
		},
	},
	imgContainer: {
		width: "100%",
		"& img": {
			width: "100%",
			objectFit: "contain",
		},
	},
	cardRole: {
		"&.MuiTypography-root": {
			fontSize: "24px",
			color: "#1A1A1A",
			opacity: "0.6",
			fontWeight: "600",
			[theme.breakpoints.down("lg")]: {
				fontSize: "16px",
			},
		},
	},
	ourTeamCardTitle: {
		"&.MuiTypography-root": {
			fontSize: "28px",
			fontWeight: "600",
			[theme.breakpoints.down("lg")]: {
				fontSize: "16px",
			},
		},
	},
	ourTeamCardDescription: {
		"&.MuiTypography-root": {
			fontSize: "16px",
			fontWeight: "400",
			lineHeight: "22px",
			color: "#1A1A1A",
			opacity: "0.6",
			flexGrow: 1,
			[theme.breakpoints.down("lg")]: {
				fontSize: "12px",
			},
		},
	},
	blogsHr: {
		width: "54px",
		height: "5px",
		backgroundColor: "#002550",
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
			"& .MuiSvgIcon-root": {
				width: "20px",
				height: "20px",
			},
		},
	},
	blogsDate: {
		"&.MuiTypography-root": {
			fontSize: "16px",
			fontWeight: "600",
		},
	},
	cardAuthor: {
		"&.MuiTypography-root": {
			fontWeight: "600",
			color: "#1A1A1A",
			opacity: "0.6",
		},
	},
	blogTitle: {
		"&.MuiTypography-root": {
			fontSize: "28px",
			fontWeight: "600",
			marginBottom: "10px",
		},
	},
	blogsCard: {
		position: "relative",
		width: "100%",
		borderRadius: "10px",
		maxWidth: "456px",
		minHeight: "720px",
		padding: "5% 7%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		"&:hover": {
			boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
		},
		[theme.breakpoints.down("md")]: {
			width: "90%",
		},
	},
	blogsSection: {
		width: "100%",
		maxWidth: "1464px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	blogsCardWrapper: {
		width: "100%",
		maxWidth: "1464px",
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		gap: "46px",
		justifyContent: "center",
		[theme.breakpoints.down("lg")]: {
			width: "90%",
		},
		[theme.breakpoints.down("md")]: {
			gridTemplateColumns: " 1fr",
			placeItems: "center",
		},
	},
	carouselBack: {
		position: "absolute",
		left: "0px",
		top: "45%",
		width: "60px",
		height: "60px",
		backgroundColor: "rgba(0, 0, 0, 0.3)",
		borderRadius: "9999px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		"& .MuiSvgIcon-root": {
			color: "white",
		},
	},
	carouselForward: {
		position: "absolute",
		right: "0px",
		top: "45%",
		width: "60px",
		height: "60px",
		backgroundColor: "rgba(0, 0, 0, 0.3)",
		borderRadius: "9999px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		"& .MuiSvgIcon-root": {
			color: "white",
		},
	},
})
