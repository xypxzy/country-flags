import styled from "styled-components";
import {DetailedHTMLProps, HTMLAttributes} from "react";
import { IInfo} from "../pages/HomePage.tsx";

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CarImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`

const CardTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: var(--font-weight-bold);
`

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;

interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    img?: string,
    name?: string,
    info?: IInfo[]
}

export const Card = ({img, name, info = [], onClick} : CardProps) => {
    return <Wrapper onClick={onClick} >
        <CarImage src={img} alt={name}/>
        <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardList>
                {info.map((item) => (
                    <CardListItem key={item.title}>
                        <b>{item.title}:</b>{item.description}
                    </CardListItem>
                ))}
            </CardList>
        </CardBody>
    </Wrapper>
}