import * as S from '@/components/common/AlbumItem/AlbumItem.style';

const AlbumItem = ({ imgUrl, description }) => {
  return (
    <S.AlbumItemBox>
      <S.AlbumItemImg imgUrl={imgUrl} />
      <S.AlbumItemDescription>{description}</S.AlbumItemDescription>
    </S.AlbumItemBox>
  );
};

export default AlbumItem;
