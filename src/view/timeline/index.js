import {
  DivMainTimeLine,
  DivPostsTimeline,
  WritePostTimeLine,
  NavBarTimeLine,
  InputsFormPost,
  LinksPosted,
  ContentLinkPosted,
} from "./components/ComponentsTimeline";
import image from "./components/index.jpeg";
import { useState } from "react";
export default function Timeline() {
  const [postsLinks, setPostLinks] = useState();
  return (
    <DivMainTimeLine>
      <NavBarTimeLine>
        <span>LINKR</span>
      </NavBarTimeLine>
      <DivPostsTimeline>
        <h3>Timeline</h3>
        <WritePostTimeLine>
          <img src={image} alt="" />
          <InputsFormPost>
            <p>What are you going to share today?</p>
            <input type="text" id="link" />
            <input type="text" id="text-post" />
            <button>Publish</button>
          </InputsFormPost>
        </WritePostTimeLine>
        <LinksPosted>
          <img src={image} alt="" />
          <ContentLinkPosted>
            <p>username</p>
            <p>post</p>
            <p>urlmetadata</p>
          </ContentLinkPosted>
        </LinksPosted>
      </DivPostsTimeline>
    </DivMainTimeLine>
  );
}
