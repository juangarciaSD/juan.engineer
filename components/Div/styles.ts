import styled from "styled-components";
import { DEFAULT_STYLES, DefaultProps } from "../../public/Defaults";

export interface DivProps extends DefaultProps {
    onClick?: React.MouseEventHandler;
};

export const DivComponent = styled.div<DefaultProps>`
    ${DEFAULT_STYLES}
`;