import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const searchIcon = require('../../../assets/img/search-icon.png');

interface IProps {
  type: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line no-unused-vars
export default styled.input.attrs((props: IProps) => ({
  type: 'text',
}))`
  width: 30%;
  padding: 0 0.5rem;
  border: 1px solid lightgrey;
  border-radius: 25px;
  height: 2rem;
  background-image: url(${searchIcon.default});
  background-position: 10px 10px;
  background-size: 0.8rem;
  background-repeat: no-repeat;
  padding-left: 40px;

  :focus {
    outline: none;
  }
`;
