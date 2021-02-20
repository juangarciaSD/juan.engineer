import React from "react";
import styled from "styled-components";

import Div from "./Div";

import {
    faSnapchatGhost,
    faTwitter,
    faGithubAlt,
    faSpotify,
    faDiscord,
  } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Icon from "./icon";

const SocialLinks = (props: {
    size?: number;
    small?: boolean;
  }) => {
    return(
        <Icons small={props.small}>
      <IconWrapped small={props.small}>
        <Icon
          size={props.small ? 15 : 25}
          icon={faTwitter}
          highlight="#1DA1F2"
          link="https://go.juan.engineer/twitter"
        />
      </IconWrapped>
      <IconWrapped small={props.small}>
        <Icon
          size={props.small ? 15 : 25}
          icon={faGithubAlt}
          highlight="#333333"
          link="https://go.juan.engineer/github"
        />
      </IconWrapped>
      <IconWrapped small={props.small}>
        <Icon
          size={props.small ? 15 : 25}
          icon={faSpotify}
          highlight="#1DB954"
          link="https://dstn.to/mixtape"
        />
      </IconWrapped>
      <IconWrapped small={props.small} last>
        <Icon
          size={props.small ? 15 : 25}
          icon={faEnvelope}
          highlight="#1B1B1B"
          link="mailto:me@juan.engineer"
        />
      </IconWrapped>
    </Icons>
    );
};

const Icons = styled.div<{ small: boolean, float?: boolean }>`
  margin-top: ${(props) => (!props.small ? "15px" : "0px")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  float: ${props => props.float ? "right": "none"};
  align-self: flex-end;
  font-size: 22px;
`;

const IconWrapped = styled.div<{ small?: boolean; last?: boolean }>`
  padding-left: ${(props) => (!props.small ? "7px" : "4px")};
  padding-right: ${(props) =>
    !props.last ? (!props.small ? "7px" : "4px") : "0px"};
  opacity: ${(props) => (!props.small ? "100%" : "50%")};
`;

export default SocialLinks;