import styled from "styled-components";

export const DivMainTimeLine = styled.div`
  width: 100vw;
  height: 100vh;
  background: #333333;
  font-family: "Passion One";
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NavBarTimeLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 7vh;

  background: #151515;

  color: #ffffff;
  font-weight: 700;
  font-size: 32px;

  span {
    margin-left: 2vh;
  }
`;

export const DivPostsTimeline = styled.div`
  width: 60vw;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding: 4.875em 0 0 0;

  h3 {
    color: #ffffff;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
  }
`;

export const WritePostTimeLine = styled.div`
  display: flex;

  width: 38.1875em;
  height: 13.0625em;

  border-radius: 1em;
  padding: 1.375em;

  background: #ffff;

  img {
    width: 3.125em;
    height: 3.125em;
    border-radius: 1.625em;
  }
`;

export const InputsFormPost = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 1.375em;
  font-family: "Lato";

  input {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;

    color: #949494;

    width: 31.4375em;

    margin: 0.3125em 0 0.3125em 0;
    padding: 0.3125em 0.75em 0.3125em 0.75em;

    background: #efefef;

    border-radius: 0.3125em;
    border: none;
    outline: none;
  }
  #text-post {
    height: 4.125em;
  }
  #link {
    height: 1.875em;
  }
  p {
    font-size: 20px;
    color: #707070;
    padding: 0.5em 0;
  }
  button {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;

    color: #ffffff;

    width: 7em;
    height: 1.9375em;
    border: none;
    outline: none;
    background: #1877f2;
    border-radius: 0.3125em;
  }
`;
export const LinksPosted = styled.div`
  display: flex;

  width: 38.1875em;
  height: 13.0625em;

  border-radius: 1em;
  padding: 1.375em;

  background: #171717;

  img {
    width: 3.125em;
    height: 3.125em;
    border-radius: 1.625em;
  }
`;

export const ContentLinkPosted = styled.div`
  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    /* identical to box height */

    color: #ffffff;
  }
`;
