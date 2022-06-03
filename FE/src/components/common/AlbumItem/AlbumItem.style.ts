import styled from 'styled-components';

const AlbumItemBox = styled.div`
  width: 280px;
  height: 300px;
  /* border: 1px solid black; */
`;

const AlbumItemImg = styled.img.attrs(props => ({
  src: `${props.imgUrl}`,
}))`
  width: 280px;
  height: 280px;
`;

const AlbumItemDescription = styled.span`
  margin-top: 10px;
  color: black;
  font-size: 1rem;
  display: inline-block;
  width: 100%;
`;

export { AlbumItemBox, AlbumItemImg, AlbumItemDescription };
