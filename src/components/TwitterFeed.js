import React, { useEffect } from "react";
import styled from 'styled-components'

const FeedContainer = styled.section`
  flex: 1;

  h1 {
    margin-bottom: 0px;
  }
`


const TwitterFeed = (props) => {

  const twitterURL = props.profile ? props.profile : 'https://twitter.com/kylepcole'
  
  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "light"); //light/dark
    // anchor.setAttribute("data-tweet-limit", "3");
    anchor.setAttribute("data-height", "400");
    anchor.setAttribute("data-width", "300");
    anchor.setAttribute("data-dnt", "true");
    anchor.setAttribute("data-chrome", "noheader nofooter "); //noheader / nofooter / noborders
    anchor.setAttribute("href", twitterURL);
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <FeedContainer className="twitter-feed">
      <h1>Tweets:</h1>
      <div className="twitter-embed"></div>
      <a href={`${twitterURL}?ref_src=twsrc%5Etfw`} class="twitter-follow-button" data-show-count="true">Follow @kylepcole</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </FeedContainer>
  );
};

export default TwitterFeed;

//<a class="twitter-timeline" data-width="300" data-height="600" data-dnt="true" data-theme="light" href="https://twitter.com/kylepcole?ref_src=twsrc%5Etfw">Tweets by kylepcole</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>