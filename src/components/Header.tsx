import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import {Container} from "./Container.tsx";
import {setTheme} from "../store/theme/theme-actions.ts";
import {clearControls} from "../store/controls/controls-actions.ts";

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
  user-select: none;
`

type themeType = 'light' | 'dark'

export const Header = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const theme: themeType = useSelector(state => state.theme);

    const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light' ))

    const cleanUp = () => dispatch(clearControls());

    useEffect(()=> {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <HeaderElement>
            <Container>
                <Wrapper>
                    <Title onClick={cleanUp}>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme == 'light' ? (<IoMoonOutline size="14px"/>) : <IoMoon size='14px'/> }
                    <span style={{marginLeft : '0.75rem'}}>{theme} Theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderElement>
    )
}