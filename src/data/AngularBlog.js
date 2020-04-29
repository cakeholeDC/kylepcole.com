var content = `
<p>When it comes to front-end frameworks, I talk about React a lot. <em>Who doesn't love React?!</em> It's my preferred framework for a number of reasons; it's intuitive, powerful, and flexible. In fact, React is so much my go-to framework that a friend of mine jokingly called me out on it, asking if I could even name another framework.</p>
<p><strong>I could.</strong> I got the hint though. Acknowledging to myself that I hadn't used any other frameworks very much, if at all...</p>
<p>So, I decided it was time to try Angular. Here's how it went.</p>
<figure><img alt="Angular" src="/blog/angular.jpg"><figcaption>Do you even Angular, bro?</figcaption></figure>
<h3>Angular in a Nutshell</h3>
<p>Before I dive into my analysis, let's just touch on what Angular is and how it differs from React. For starters, Angular is an open-sourced TypeScript-based framework (whereas React is a Javascript library). Angular is maintained by Google, along with the open source community (React is maintained by Facebook). Another very important thing to note is that Angular and AngularJS are different things. AngularJS (or Angular v1) is a Javascript library just like React. Angular2+ is a complete rewrite of AngularJS, re-designed as a full fledged framework.</p>
<h4>Framework vs Library</h4>
<p>So what does it mean that Angular is a <em>Framework</em>, but React is a <em>Library</em>? Well, when using a library, you have more control over the flow of the application. <strong>You</strong> are choosing when and where to call the library's components and functions. When you use a framework, <strong>the framework</strong> is in charge of the flow. It provides some places for you to plug in your code, but only calls on your code as needed.</p>
<p>Here's a great analogy I recently came across: <strong>Libraries are like shopping at Ikea.</strong> The home is already built; but you get to pick out the furniture for each room and arrange it how you want. <strong>Frameworks are more like buying a <a href="https://en.wikipedia.org/wiki/Sears_Modern_Homes">Sears Home Kit</a>;</strong> the materials only fit together as defined in the blueprint and there's not much room for creative input.</p>
<figure><iframe src="https://giphy.com/embed/jtcJWWyg7vbC70xYJV" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><figcaption>Don't worry, Ikea leaves plenty of room for creativity.</figcaption></figure>
<h3>TypeScript</h3>
<p>Besides being a framework, one of the things that makes Angular unique from React and Vue is it's use of <a href="https://www.typescriptlang.org/">TypeScript.</a> TypeScript is a superset of Javascript that adds a property called type that locks in the specific data type for each construct (such as "string", or "array") and originated from the shortcomings of Javascript. In TypeScript, you might see something like this when defining a class:</p>
<pre>state:string = 'District of Columbia'<br/>active:boolean = false<br/>breweries: Object;</pre>
<p>As you can see, each piece of data has been assigned a specific datatype. Unlike regular Javascript, if you tried to set the value of <code>state=0</code> you would get an error. In the long term, this is significantly more consistent and maintainable than type handling in regular JS.</p>
<h3>CLI Component Generation</h3>
<p>This was probably the coolest thing about Angular to me. Because Angular has a CLI, you can generate components via the command line. By typing <code>ng generate [componentName]</code> the Angular CLI will initialize all the files required for that component, and place them in the appropriate directories (more on those files later). I love this feature! It reminds me of the Rails CLI generators for resources and migrations. Anyone who knows me knows that I'm all for automation.</p>
<h3>Data Binding</h3>
<p>This was a big one in my opinion. Data binding (state management) happens by default in an Angular app and does not require an external package like Redux or Flux. While this is extremely useful, I found the way in which the data was passed around to be a little convoluted.</p>
<p>In React, if you wanted to iterate over a list of breweries you would <code>.map()</code> over this.state.array turning each object into a component. In Angular, the array would be stored in state and accessed using props prefixed with <strong>*ng</strong> - again, for <em>aNGular.</em></p>
<pre>&lt;ul *ngIf="breweries"&gt;
		&lt;li *ngFor="let brew of breweries"&gt;
			&lt;p class="name"&gt;&lt;a href="{{ brew.website_url }}" class="site"&gt;{{ brew.name }}&lt;/a&gt;&lt;/p&gt;
			&lt;p class="address"&gt;{{ brew.street }}&lt;/p&gt;
			&lt;p class="address"&gt;{{ brew.address }}&lt;/p&gt;
		&lt;/li&gt;
	&lt;/ul&gt;</pre> 
<p>While the above code does replace both a conditional JSX statement, and a <code>.map()</code>, I don't find this as readable as React syntax.</p>
<pre>{ this.props.breweries ?
		&lt;ul&gt;
			{ this.props.breweries.map(brew => &lt;Brewery {...brew}/&gt;) }
		&lt;/&gt;>
	: null }</pre>
<h3>Routing</h3>
<p>Routing is another big feature that comes built into Angular. Routing in Angular is handled via a Routes array, that is populated with key:value pairs representing the route, and the action.</p>
<pre>const routes: Routes = [
	{ path: '', component: Breweries },
	{ path: 'breweries', component: Breweries },
	{ path: 'about', component: About },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }</pre>
<p>The route configuration is very straightforward, but I found it weird to have the routes stored in a separate module than the app itself. Maybe that's just the React developer in me, though. Personally, I like how ReactRouter's configuration works using the Switch component.</p>
<h3>File Structure</h3>
<p>One thing that particularly bothered me about Angular, was the file structure. When you run the CLI component generator, four files are generated. <em>Two TypeScript, one HTML, and one CSS.</em></p>
<figure><img alt="Angular File Structure" src="angular-file-structure.png"><figcaption>😳 FOUR files per component?!</figcaption></figure>
<p>Each of these files does serve a specific purpose. One of the TypeScript files, <em>name.component.ts</em> is the definition of the Component itself and all of the logic behind that component; <code>export default class YaddaYaddaYadda</code>. The second TypeScript file, <em>name.component.specs.ts</em>, serves as the unit tests for that component. The file <em>name.component.html</em> serves as the <strong>view</strong> for the component—it's the <code>render()</code> method. And lastly, <em>name.component.css</em> is exactly what you'd expect, the styles.</p>
<p>I know why the file structure bothered me; in React, I'm a styled-components guy. I'm already trying to get my components down to a single file containing all logic, helper functions, and styling. I'm already tired of jumping between a JS file and a CSS file, further separating the logic and the view doesn't accomplish that goal for me. But then again, as I think about it more the separation of responsibility is one of the things that I appreciate most about rails; models, controllers, and views.</p>
<h3>Final Thoughts</h3>
<p>Do I like Angular? No. But do I hate Angular? No. I'm just not used to it yet. Everything I've read about Angular is that it has a significantly larger learning curve than React or Vue do; and I can see that. I think I'd have to work exclusively on Angular every day before I got the hang of it. After switching back to React for a few days, I forgot many of the intricacies of Angular.</p>
<p>Will I use Angular again? Sure. But am I leaving my beloved React behind? <strong>Absolutely not.</strong></p>
<p>cakehole out.</p>
`

const AngularBlog = {
	"title": "Try-Angular",
	"pubDate": "2020-04-03 11:12:09",
	"link": "",
	"guid": "",
	"author": "Kyle Cole",
	"thumbnail": "/blog/angular.jpg",
	"description": "<p>I tried Angular, here's a few things I learned. For starters, Angular is an open-sourced TypeScript-based framework (whereas React is a Javascript library). Angular is maintained by Google, along with the open source community (React is maintained by Facebook).</p>",
	"content": `${content}`,
	"enclosure": {},
	"categories": ["angular", "javascript", "framework"]
}

export default AngularBlog