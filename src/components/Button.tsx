import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--color-bg);
  box-shadow: 5px 5px var(--shadow);
  line-height: 2.5;
  border-radius: var(--radii);
  padding: 0 1rem;
  
  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  color: var(--color-text);
  cursor: pointer;
`