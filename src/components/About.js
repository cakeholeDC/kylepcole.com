import React from 'react'

function About() {
	return(
		<div id="about-container">
			<img id="profile-pic" src="https://via.placeholder.com/300x500"/>
			<article>
			<h1>Hi, I'm Kyle; Here's some fun facts.</h1>
			<p><strong>TLDR;</strong> I am a full-stack web developer from Washington, DC with a background in product management and design.</p>

			<p>I'm from a small town in New Hampshire where we didn't lock our doors at night growing up. I attended RIT in Rochester NY and studied New Media Publishing; a hybrid of traditional and web publishing and design. After graduation I moved to DC for a role at a print-marketing firm. In that role I was exposed to software product development and was hooked. After leading a development team for a few years I decided I wanted to learn to write code myself and I enrolled in the Flatiron School's Software Engineering Bootcamp; a four-month, full-time, on-campus educational program. Now, I write code.</p>

			<p>I am also a lifelong musician. I started piano lessons at the age of 6 and continued until I left for college. I started learning the saxophone in elementary and later joined my high-school marching band where I marched in the <a href="https://www.youtube.com/watch?v=2u8dbugNdgA" target="_blank">2002 Macy's Thanksgiving Day Parade</a> <span className="sidebar">(You can actually see me at 1:11-12. I'm the fourth up from the base of the Y in NYC, and directly at the base of the S in USA—the tall guy)</span>. I picked up the guitar at the age of 16 determined to teach myself how to be a rock star. While that dream hasn't materialized yet, playing guitar is a hobby I still enjoy as a pass-time today.</p>
			</article>
		</div>
	)
}

export default About