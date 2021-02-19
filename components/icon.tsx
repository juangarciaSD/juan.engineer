import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
    src: string;
    size: number;
    highlight?: string;
    icon: IconDefinition;
    link?: string;
    color?: string;
    onClick?: () => void;
}

const Icon: React.FC<IconProps> = (props) => {
    return(
        <>
        {!!props.link && (
            <Link href={props.link} target="_blank">
                <SongImage
                    src={props.src}
                    width={props.size}
                    height={props.size}
                    highlight={props.highlight}
                    color={props.color}
                    link={!!props.link}
                />
            </Link>
        )}
        {!props.link && (
            <SongImage
            onClick={props.onClick}
            width={props.size}
            height={props.size}
            src={props.src}
            highlight={props.highlight}
            color={props.color}
            link={!!props.link}
            />
        )}
        </>
    );
};

const Link = styled.a`
    // color here
    text-decoration: none;
`;

const SongImage = styled.img<{
    highlight: string;
    color?: string;
    link?: boolean;
}>`
    width: 58px;
    height: 58px;
    border-radius: 5px;
    cursor: ${(props) => (props.link ? "pointer" : "default")};
    color: ${(props) => (props.color ? props.color : "var(--text)")};
`;

const FaIcon = styled(FontAwesomeIcon)<{
    highlight: string;
    color?: string;
    link?: boolean;
  }>`
    cursor: ${(props) => (props.link ? "pointer" : "default")};
    color: ${(props) => (props.color ? props.color : "var(--text)")};
    transition: opacity 0.2s ease-out;
    transition: color 0.2s ease-out;
    &:hover {
      color: ${(props) => (props.highlight ? props.highlight : "")};
      opacity: 100%;
    }
  `;

export default Icon;