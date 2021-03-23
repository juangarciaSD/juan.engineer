import React from "react";
import styled from "styled-components";

interface LoaderProps {
    loading: boolean;
}

const Loader: React.FC<LoaderProps> = (props) => {
    return(
        <LoaderMain loading={props.loading} />
    );
};

const LoaderMain = styled.div<{ loading: boolean }>`
    width: 30px;
    height: 30px;
    border: 3px solid #e1e7f5;
    border-top: 3px solid var(--border);
    border-radius: 50%;
    animation: rotate 750ms linear infinite normal;

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default Loader;