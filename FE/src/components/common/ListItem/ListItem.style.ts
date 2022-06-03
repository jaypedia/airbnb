import styled from 'styled-components';

const ListItemBox = styled.div`
  width: 240px;
  height: 80px;
  /* border: 1px solid black; */
  display: flex;
`;

const ListItemImg = styled.img.attrs(props => ({
  src: `${props.imgUrl}`,
}))`
  width: 80px;
  height: 80px;
`;

const ListItemTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
`;

const ListItemTitle = styled.span`
  color: black;
  font-size: 1rem;
  display: inline-block;
`;

const ListItemDescription = styled.span`
  color: gray;
  font-size: 1rem;
  display: inline-block;
`;

export { ListItemBox, ListItemImg, ListItemTextBox, ListItemTitle, ListItemDescription };
