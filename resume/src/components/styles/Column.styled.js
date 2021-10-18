import styled from "styled-components"

export const Column = styled.div`
  display: grid;
  grid-auto-flow: dense;
  row-gap: 1em;
  border-top: 0.1em solid ${(props) => props.theme.foregroundColor};
`
