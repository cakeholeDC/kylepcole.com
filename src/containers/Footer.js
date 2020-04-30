import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { device } from '../device';


const FooterBar = styled.div`
	flex-shrink: 0;
    display: inline-block;
    position: relative;
    // width: 100%;
    // height: 100px;
	text-align: left;
    padding: 1rem;
    padding-left: 4.5rem;
    padding-right: 4.5rem;
    border-top: 1px solid lightgray;
    margin-top: 2.5rem;

	@media only screen and ${device.mobileL} { 
		padding: 1.5rem;
	}
`

export default function Footer() {
	const currentYear = moment().format("YYYY")
	return(
		<FooterBar>
			Copyright & Design &copy;{ currentYear } Kyle P. Cole
		</FooterBar>
	)
}