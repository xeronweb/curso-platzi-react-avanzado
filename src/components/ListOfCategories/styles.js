import styled, { css } from 'styled-components';
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  margin: 0;
  margin-bottom: 50px;
  padding: 0;
  ${props => props.fixed && css`
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    left:0;
    margin: 20px auto;
    padding: 5px;
    position:  fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
  `}
  &::-webkit-scrollbar {
    display: none;
    margin: 0;
  }
`

export const Item = styled.li`
  padding: 0 8px;
  margin: 0;
  ${fadeIn()}
`;