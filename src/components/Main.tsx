import styled from "styled-components";
import {Container} from "./Container.tsx";
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

interface MainProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}

const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`

export const Main = ({children}: MainProps): JSX.Element => {
    return <Wrapper>
        <Container>{children}</Container>
    </Wrapper>
}