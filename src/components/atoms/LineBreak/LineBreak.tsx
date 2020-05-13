import styled from 'styled-components';

interface IProps {
  color: string;
  width: string;
}

export default styled.div.attrs((props: IProps) => ({
  color: props.color || 'black',
  width: props.width || '50%',
}))`
  width: ${(props): string => props.width};
  height: 0.1rem;
  background-color: ${(props): string => props.color};
`;
