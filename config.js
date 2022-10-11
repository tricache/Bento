// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Adam',
	imageBackground: 'window-drops-rain-blur.jpg',
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Morning,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Have a lovley night,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '12c5870ca6992af6f22d9176bb102897', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Unleashed',
			icon: 'briefcase',
			link: 'https://au.unleashedsoftware.com/v2/Home/ClassicDashboard',
		},
		{
			id: '2',
			name: 'New Unleashed Order',
			icon: 'list-plus',
			link: 'https://au.unleashedsoftware.com/v2/SalesOrder/Update',
		},
		{
			id: '3',
			name: 'Shopify',
			icon: 'shopping-cart',
			link: 'https://australian-jet-ski-parts.myshopify.com/admin',
		},
		{
			id: '4',
			name: 'New Sopify Order',
			icon: 'list-plus',
			link: 'https://australian-jet-ski-parts.myshopify.com/admin/draft_orders/new',
		},
		{
			id: '5',
			name: 'AJSP eBay',
			icon: 'shopping-bag',
			link: 'https://www.ebay.com.au/usr/australianjetskiparts',
		},
	],

// 	secondButtonsContainer: [
// 		{
// 			id: '1',
// 			name: 'Music',
// 			icon: 'headphones',
// 			link: 'https://open.spotify.com',
// 		},
// 		{
// 			id: '2',
// 			name: 'twitter',
// 			icon: 'twitter',
// 			link: 'https://twitter.com/',
// 		},
// 		{
// 			id: '3',
// 			name: 'bot',
// 			icon: 'bot',
// 			link: 'https://discord.com/app',
// 		},
// 		{
// 			id: '4',
// 			name: 'Amazon',
// 			icon: 'shopping-bag',
// 			link: 'https://amazon.com/',
// 		},
// 		{
// 			id: '5',
// 			name: 'Hashnode',
// 			icon: 'pen-tool',
// 			link: 'https://hashnode.com/',
// 		},
// 		{
// 			id: '6',
// 			name: 'Figma',
// 			icon: 'figma',
// 			link: 'https://figma.com/',
// 		},
// 	],
// 
	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'briefcase',
			id: '1',
			links: [
				{
					name: 'Unleashed',
					link: 'https://au.unleashedsoftware.com/v2/Home/ClassicDashboard',
				},
				{
					name: 'New Unleashed Order',
					link: 'https://au.unleashedsoftware.com/v2/SalesOrder/Update',
				},
				{
					name: 'Shopify',
					link: 'https://online.packsend.com.au/Login',
				},
				{
					name: 'New Sopify Order',
					link: 'https://australian-jet-ski-parts.myshopify.com/admin/draft_orders/new',
				},
			],
		},
		{
			icon: 'cart',
			id: '2',
			links: [
				{
					name: 'eBay/Inkfrog Orders',
					link: 'https://open.inkfrog.com/listings/sold/',
				},
				{
					name: 'AJSP eBay',
					link: 'https://www.ebay.com.au/usr/australianjetskiparts',
				},
				{
					name: 'eBay Uploads',
					link: 'https://www.mip.ebay.com/feeds/orderfulfillment?pg=1&psize=25',
				},
				{
					name: 'Fastway',
					link: 'https://myfastway.com.au/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'truck',
			id: '1',
			links: [
				{
					name: 'Aus Post',
					link: 'https://online.auspost.com.au/eParcel/common/auth/login.do',
				},
				{
					name: 'Star Track',
					link: 'https://auspost.com.au/parcel-send/login',
				},
				{
					name: 'Pack N Send',
					link: 'https://online.packsend.com.au/Login',
				},
				{
					name: 'Fastway',
					link: 'https://myfastway.com.au/',
				},
			],
		},
		{
			icon: 'globe',
			id: '2',
			links: [
				{
					name: 'AJSP',
					link: 'https://www.ajsp.com.au/',
				},
				{
					name: 'Facebook & Instagram Admin',
					link: 'https://business.facebook.com/latest/home?asset_id=112342082176178&nav_ref=page_banner_navigation',
				},
				{
					name: 'Live EFTPos',
					link: 'https://myweb.liveeftpos.com.au/Account/Login?ReturnUrl=%2f',
				},
				{
					name: 'Impact',
					link: 'https://ios.net.au/',
				},
			],
		},
	],
};
