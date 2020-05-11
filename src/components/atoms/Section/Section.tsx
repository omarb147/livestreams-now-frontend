import styled from 'styled-components';

interface IProps {
  height?: string;
  bgColor?: string;
}

export default styled.div.attrs((props: IProps) => ({
  height: props.height,
  bgColor: props.bgColor || 'white',
}))`
  display: flex;
  padding: 2rem;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background-color: ${(props) => props.bgColor};
  height: ${(props): string => props.height || 'auto'};

  > * {
    margin: 0 2%;
  }
`;
