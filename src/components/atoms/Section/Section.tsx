import styled from 'styled-components';

interface IProps {
  height?: string;
  backgroundColor?: string;
  justifyContent?: string;
  flexDirection?: string;
  flexWrap?: string;
  flexItemMargin?: string;
}

export default styled.div.attrs((props: IProps) => ({
  height: props.height,
  backgroundColor: props.backgroundColor || 'white',
  justifyContent: props.justifyContent || 'center',
  flexDirection: props.flexDirection || 'row',
  flexWrap: props.flexWrap || 'nowrap',
  flexItemMargin: props.flexItemMargin || '0 2%',
}))`
  display: flex;
  padding: 2rem;
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  align-content: center;
  background-color: ${(props) => props.backgroundColor};
  height: ${(props): string => props.height || 'auto'};

  > * {
    margin: ${(props) => props.flexItemMargin};
  }
`;
