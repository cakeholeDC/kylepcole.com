import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

const CardContainer = styled.div`
	  height: 100vh;
	  background: url('/images/green_dust_scratch.png');
	  padding-top: 3rem;
`

const Card = styled.div`
font-family: 'Open Sans', sans-serif;
	.click-me {
	  width: 100%;
	  font-family: 'Fjalla One', sans-serif;
	  color: black;
	  margin: 0px;
	}
	.card {
	  // width: 318px;
   	  // height: 475px;
	  width: 20rem;
      height: 29.8rem;
	  position: relative;
	  -webkit-perspective: 700;
	  margin: 100px auto;
	  cursor: pointer;
	  text-align: center;
	}
	.card:hover {
		// // to shift card @todo add a transition
		// position:relative;
    	// left:3rem;
		.face {
		  -webkit-transition: all 0.3s ease-out;
		}
	}

	.face {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  -webkit-backface-visibility: visible; 
	  -webkit-transition: all 0.5s ease-out;
	  -webkit-transform-origin: 0 0;
	}
	.front-face {
	  // -webkit-transform: rotateY(-20deg); // INITIAL ANGLE
	  z-index: 2;
	  background-size: contain;
	  background-image: url('/images/mona-lisa-2020.jpg');
	  font-size: 2em;
	  box-sizing: border-box;
	  text-align: center;
	}
	.back-face {
	  background: white;
	  padding: 1.25rem;
	  box-sizing: border-box;
	  -webkit-transform: rotateY(0deg);
	  z-index: 1;
	  font-size: 1.2em;
	  display: flex;
	  flex-direction:column;
	}

	.card:hover .front-face {
	  // -webkit-transform: rotateY(-35deg);
	  -webkit-transform: rotateY(-165deg);   
	}
	// // TO APPLY ON CLICK OPEN
	.card:active .front-face{
	  -webkit-transform: rotateY(-165deg);  
	}

	p {
	  // margin-top: 50%;
	  // color: #0c94bb;
	  text-align: left;
	  flex:1;

	}

	p.front-text {
		text-align: center;
		color: yellow;
		font-family: 'Fascinate Inline', cursive;
	    margin-top: 18rem;
	}

	p.salutation {
		font-weight: bold;
		margin-top: 0px;
	}
`

class CovidCard extends React.Component {

	getName() {
		if (this.props.location.search !== ''){
			const name = queryString.parse(this.props.location.search).name
			return name
		}
		else return `Stay Safe`
	}

	render(){
		// debugger
		return(
			<CardContainer>
				<Card className='cards'>
				    <h1 className="click-me">We wrote you a note! Click to read it.</h1>
				    <div className='card'>
				        <div className='face front-face'>
				          <p className="front-text">GESUNDHEIT.</p>
				        </div>
				        <div className="face back-face">
				        <p className="salutation">Dear, { this.getName() }</p>
				          <p className="body">Last time we saw you, Leonardo DaVinci was probably still alive.</p>
				          <p>Hope to reconnect before the next Renaissance.</p>
				          <p>Stay safe out there.</p>
				          <p>Love,
				          <br/>Kyle & Sulli
				          </p>
				        </div>
				    </div>
				</Card>
			</CardContainer>
		)
	}
}

export default withRouter(CovidCard)