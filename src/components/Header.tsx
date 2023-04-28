import styled from "styled-components";
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {Container} from "./Container.tsx";

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

const Title = styled(Link).attrs({to: '/'})`
  color: var(--color-text);
  font-size: 12px;
  text-decoration: none;
  font-weight: var(--font-weight-bold);
`

const ModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: 12px;
  cursor: pointer;
  text-transform: capitalize;
`

type themeType = 'light' | 'dark'

export const Header = () => {
    const theme: themeType = 'light';

    useEffect(()=> {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <HeaderElement>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher>
                        {theme == 'light' ? (<IoMoonOutline size="14px"/>) : <IoMoon size='14px'/> }
                    </ModeSwitcher>
                    <span style={{marginLeft : '0.75rem'}}>{theme} Theme</span>
                </Wrapper>
            </Container>
        </HeaderElement>
    )
}