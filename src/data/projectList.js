const projects = [
	{
		year: 2020,
		name: 'Hunger Swype',
		// thumbnail: '/projects/hunger-swype.jpg',
		thumbnail: 'https://source.unsplash.com/collection/251966/300x300', // random food pictures
		teaser: "Tinder for Food.\nCapstone project from Flatiron School.",
		description: "<p>Have you ever been to a restaurant and a waiter walked by with a plate of food that looked so delicious you had to have it? <strong>The response that your body has is almost primal.</strong> Your mouth begins to water, your eyes widen. You take in a big sniff of air hoping you might catch a few lingering molecules of flavour.</p><p>You immediately look to the menu — <em>what is that?</em> — in an instant, your entire dining experience has changed.</p><h3 style='text-align: center; width: 90%; margin: auto;'><em>That</em>, was your appetite.<br/><strong>And you should <em>always</em> trust your appetite.</strong></h3><p>A <a href='https://clf.jhsph.edu/about-us/news/news-2014/study-suggests-home-cooking-main-ingredient-healthier-diet' target='_blank'>study by John's Hopkins University</a> suggests that cooking at home is the main ingredient for a healthier life. We know that when it comes to cooking the problem that most of us face isn't the cooking itself, but rather what to cook.</p><p>That's where Hunger Swype comes in! Start by entering your dietary restrictions, then let us know if you're looking for a particular cuisine type. Hunger Swype will present you with a series of delicious looking photos matching your flavour profile.</p><p>Your only job is to decide whether that dish looks appetizing or not and Hunger Swype’s flavour algorithm will match you with suggested recipes.</p>",
		stack: {
			database: "Postgres",
			back: "Ruby",
			api: "Rails",
			front: "React",
			framework: 'Sass',
			hosting: 'Heroku',
		},
		technologies: [
			"ReactJS",
			"Redux",
			"Ruby on Rails",
			"JSON Web Tokens (JWT)",
			"BCrypt",
			"Postgres",
			"Spoonacular API",
			"CSS Grid",
			"SASS/SCSS",
		],
		collaborators: [],
		demo: 'https://youtu.be/Lu9ow-RFO3c',
		gallery: ["https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300"],
		link: 'http://hunger-swype.herokuapp.com/',
		githubFront: 'https://github.com/cakeholeDC/hunger-swype-frontend',
		gitbubBack: 'https://github.com/cakeholeDC/hunger-swype-backend',
	},
	{
		year: 2020,
		name: 'expiRATION',
		thumbnail: '/projects/expiration.jpg',
		teaser: "A food expiration tracker to manage inventory during the COVID-19 quarantine.",
		description: "<p>In March 2020 the entire world was placed under shelter-in-place orders due to the COVID-19 Pandemic. Society self-quarantined to prevent further spread of this virus. Stuck at home for the foreseeable future, people flocked to grocery stores and bought up all the chicken, frozen vegetables, and toilet paper; all of which were facing widespread shortages. That's where ExpiRATION was born from.</p><p><strong>ExpiRATION is a food tracking applicaiton</strong> to help you use your perishable items before they expire. Log an item into the app by noting its location and expriation date. ExpiRATION keeps the items that are at most risk of spoiling at the top of your list so that you can plan your meals around those ingredients.</p><p>No more forgetting about that steak in the back of the fridge only to find it's freezer burnt after 6 months. No more throwing out soggy oranges because you forgot to eat them for breakfast last week.</p><p>And most importantly more wasting food!</p>",
		stack: {
			database: "Postgres",
			back: "Ruby",
			api: "Rails",
			front: "React",
			framework: 'Semantic',
			hosting: '',
		},
		technologies: [
			"Ruby on Rails",
			"ReactJS",
			"MomentJS",
			"Semantic UI React",
			"Flaticon API"
		],
		collaborators: [],
		demo: '',
		gallery: ["https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300"],
		link: '',
		githubFront: 'https://github.com/cakeholeDC/expiration',
		gitbubBack: 'https://github.com/cakeholeDC/expiration-api',
	},
	{
		year: 2019,
		name: 'Flytinerary',
		thumbnail: '/projects/flytinerary.jpg',
		teaser: "Group itinerary planner.",
		description: "<p>Have you ever planned a vacation with your friends? If so, you know how difficult it is to coordinate a half-dozen flights, a 5 hour arrival window, 3 rental car reservations, a grocery run, and check-in. Maybe you created a shared spreadsheet to log everything, maybe you screame to the heavens that there must be a better way. Flytinerary is here to help.</p><p><strong>Flytinerary is a group itinery planner.</strong> Create a trip and share it with your fellow travelers who will all log their own individual travel plans. Travelers can then see a detailed day-by-day itinerary for everyone on the trip including flight numbers, check-in times, reservation IDs, and more!</p>",
		stack: {
			database: "SQLite",
			back: "Ruby",
			api: "Rails",
			front: "Javascript",
			framework: 'Semantic',
			hosting: '',
		},
		technologies: [
			"Ruby on Rails",
			"JavaScript ES6",
			"MomentJS",
			"Semantic UI",
			"Unsplash API",
		],
		collaborators: [],
		demo: '',
		gallery: ["https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300"],
		link: '',
		githubFront: 'https://github.com/cakeholeDC/flytinerary-beta/tree/master/flytinerary-front-end',
		gitbubBack: 'https://github.com/cakeholeDC/flytinerary-beta/tree/master/flytinerary-back-end',
	},
	{
		year: 2020,
		name: 'U Brew',
		thumbnail: '/projects/ubrew.jpg',
		teaser: 'Find breweries by state.',
		description: '<p><strong>U-BREW is simple Angular app for finding micro-breweries by state.</strong> Select a state from the dropdown to view the top 50 results for that state.</p><p>Brewery data is sourced in real time from the openbrewerydb API. Results are displayed in the order in which the API delivers them, not popularity or rating.</p>',
		stack: {
			database: "",
			back: "",
			api: "openbrewerydb",
			front: "Angular",
			framework: 'Bootstrap',
			hosting: '',
		},
		technologies: [
			"Angular",
			"Open Brewery API",
			"Bootstrap"
		],
		collaborators: [],
		demo: '',
		gallery: ["https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300"],
		link: '',
		githubFront: 'https://github.com/cakeholeDC/U-BREW',
		gitbubBack: '',
	},
	{
		year: 2020,
		name: 'Bandmates',
		thumbnail: '/projects/bandmates.jpg',
		teaser: "A social network for musicians.\nGroup Project.",
		description: '<p>If you\'re a musician you know how much fun it is to have a jam session. All the best bands were formed this way; a few siblings jamming in the basement <em>(Creedence Clearwater Revival, The Beach Boys, Allman Brothers)</em> or some friends hanging out in a garage <em>(Nirvana, Weezer, the Ramones)</em>. If you want to start a band, though, you\'ll need a drummer, and a bassist, and vocals. If you\'ve just moved to a new city, it can be almost impossible to find the right people. Bandmates can help!</p><p><strong>Bandmates is a social network for Musicians.</strong> Bands create profiles with a sample of their work and post any current openings. Musicians also develop profiles to showcase their work and apply for bands. Band leaders may also browse local talent and send invitations to Musicians.</p><p>No more backing tracks on youtube! With Bandmates, you can start your own very rock band in your garage, basement, or back yard.</p><p>Jam On!</p>',
		stack: {
			database: "Postgres",
			back: "Ruby",
			api: "Rails",
			front: "React",
			framework: 'Semantic',
			hosting: 'Heroku',
		},
		technologies: [
			"Ruby on Rails",
			"Rails Auth",
			"ReactJS",
			"Semantic UI React",
			"Unsplash API",
		],
		collaborators: [
			{
				name: "Matt Heavner",
				link: "https://github.com/mrh9ud"
			}
		],
		demo: '',
		gallery: ["https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300"],
		link: '',
		githubFront: 'https://github.com/cakeholeDC/bandmates-frontend',
		gitbubBack: 'https://github.com/cakeholeDC/bandmates-backend',
	},
	{
		year: 2020,
		name: 'Portfolio',
		thumbnail: 'https://source.unsplash.com/collection/2369878/300x300',
		teaser: "Personal Website.\nThe one you're on.",
		description: '<p>Personal portfolio website showcasing past projects. This project is the website you\'re currently viewing. Go ahead, take a look around.</p><p>In the Blog section I\'ve imported my Medium Blog posts through an RSS feed integration. Under Resume, you can take a look at my background and past experiences. There\'s also a contact page, let\'s get in touch and build something together!</p><p>Built with React. Hosted with AWS.</p>',
		stack: {
			database: "",
			back: '',
			api: '',
			front: "React",
			framework: 'Sass',
			hosting: 'AWS',
		},
		technologies: [
			"ReactJS",
			"Flexbox",
			"SASS/SCSS",
			"Styled Components",
			"Moment.js",
			"Medium API",
			"rss-2-json API",
			"ReactHTMLParser",
			"react-responsive-navbar"
		],
		collaborators: [],
		demo: '',
		gallery: ["https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300"],
		link: '',
		githubFront: 'https://github.com/cakeholeDC/kylepcole.com',
		gitbubBack: '',
	},
	{
		year: 2019,
		name: 'Bokmärke',
		thumbnail: '/projects/bokmarke.jpg',
		teaser: 'Add books to your read and wish lists via Google Books.\nGroup Project.',
		description: '<p><strong>Bokmärke is the world\'s greatest book tracking platform.</strong> Use the Books module to search for a book by title or author. Once you\'ve found your book you may add it to your reading list.</p><p>Books on your reading list have a status of either In Progress or Finished—Click the button to toggle the status of your book. Each book may only be added to your reading list once.</p><p>Once you\'ve completed a book, you will have the ability to leave a review, add a rating, and recommend the book to other readers. You may only leave one review per book. Reviews may be edited.</p><p>Use the wishlist feature to track your upcoming reads, and the read list to compete with your friends. Whomever reads the most books this year wins!</p><p>Bokmärke is the Swedish work for Bookmark.</p>',
		stack: {
			database: "SQLite",
			back: "Ruby",
			api: "",
			front: "Rails",
			framework: 'Bulma',
			hosting: '',
		},
		technologies: [
			"Ruby on Rails",
			"Rails Auth",
			"Google Books API",
			"Unsplash API",
			"Bulma CSS",
		],
		collaborators: [
			{
				name: "Sara Tarnvik",
				link: "https://github.com/stvik"
			}
		],
		demo: '',
		gallery: ["https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300"],
		link: '',
		githubFront: '',
		gitbubBack: 'https://github.com/cakeholeDC/bokmarke',
	},
	{
		year: 2019,
		name: 'Capitol Bill',
		// thumbnail: 'https://source.unsplash.com/collection/8660571/300x300',
		thumbnail: '/projects/capitolbill.png',
		teaser: 'A CLI application to access realtime congressional vote data from ProPublica.',
		description: '<p><strong>Capitol Bill is a congressional data lookup tool.</strong> This command line ruby app will allow you to search for contact information and vote data on members of congress, as well as recent bills that have been introduced and/or voted upon during the current session of Congress. The app utilizes data pulled from the ProPublica Congress API.</p><p>The current version of the app is v0.1. It does not pull live API data from ProPublica as a current feature. Data for October 2019 is saved and seeded locally.</p>',
		stack: {
			database: "SQLite",
			back: "Ruby",
			api: "",
			front: "",
			framework: '',
			hosting: '',
		},
		technologies: [
			"Ruby",
			"ProPublica API",
		],
		collaborators: [
			{
				name: "Matt Bechtel",
				link: 'https://mattbechtel1.github.io/'
			}
		],
		demo: '',
		gallery: ["https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300"],
		link: '',
		githubFront: '',
		gitbubBack: 'https://github.com/cakeholeDC/capitol-bill',
	},
	{
		year: 2018,
		name: 'Scootie Gang',
		thumbnail: '/projects/scootiegang.jpg',
		teaser: 'A Micromobility and Public Transit focused Twitter Account.',
		description: '<a class="twitter-timeline" href="https://twitter.com/ScootieGang?ref_src=twsrc%5Etfw">Tweets by ScootieGang</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
		stack: {
			database: "",
			back: "",
			api: "",
			front: "",
			framework: '',
			hosting: '',
		},
		technologies: [],
		collaborators: [],
		demo: '',
		gallery: ["https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300","https://via.placeholder.com/300"],
		link: 'https://twitter.com/ScootieGang'
	},
]

export default projects