const navLinks = [
 {
	id: "cocktails",
	title: "Cocktails",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "work",
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
 {
	name: "Chapel Hill Shiraz",
	country: "AU",
	detail: "Battle",
	price: "$10",
 },
 {
	name: "Caten Malbee",
	country: "AU",
	detail: "Battle",
	price: "$49",
 },
 {
	name: "Rhino Pale Ale",
	country: "CA",
	detail: "750 ml",
	price: "$20",
 },
 {
	name: "Irish Guinness",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];

const mockTailLists = [
 {
	name: "Tropical Bloom",
	country: "US",
	detail: "Battle",
	price: "$10",
 },
 {
	name: "Passionfruit Mint",
	country: "US",
	detail: "Battle",
	price: "$49",
 },
 {
	name: "Citrus Glow",
	country: "CA",
	detail: "750 ml",
	price: "$20",
 },
 {
	name: "Lavender Fizz",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Perfectly balanced blends",
 "Garnished to perfection",
 "Ice-cold every time",
 "Expertly shaken & stirred",
];

const goodLists = [
 "Handpicked ingredients",
 "Signature techniques",
 "Bartending artistry in action",
 "Freshly muddled flavors",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
 contact: {
	phone: "(555) 987-6543",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Vodka Martini",
	image: "/images/drink1.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "A timeless classic built on clarity and balance. Smooth vodka, gently stirred and served ice-cold, finished with a subtle citrus or olive note. Minimal, elegant, and unapologetically refined.",
 },
 {
	id: 2,
	name: "Moscow Mule",
	image: "/images/drink2.png",
	title: "A Zesty Classic That Never Fails",
	description:
	 "A bold, refreshing blend of vodka, zesty lime, and spicy ginger beer. Served chilled for a crisp, energetic finish that’s light, vibrant, and endlessly refreshing.",
 },
 {
	id: 3,
	name: "Bloody Mary",
	image: "/images/drink3.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Savory, spiced, and full-bodied. Vodka meets tomato juice, citrus, and bold seasonings to create a rich cocktail with depth, character, and a satisfying kick.",
 },
 {
	id: 4,
	name: "Cosmopolitan",
	image: "/images/drink4.png",
	title: "Crafted With Care, Poured With Love",
	description:
	 "Bright, stylish, and perfectly balanced. Vodka combined with cranberry, citrus, and a hint of sweetness for a smooth sip that’s refreshing, modern, and iconic.",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};