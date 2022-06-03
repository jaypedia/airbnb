import * as S from '@/components/common/ListItem/ListItem.style';

const ListItem = ({ title, timeCost, imgUrl }) => {
  return (
    <S.ListItemBox>
      <S.ListItemImg imgUrl={imgUrl} />
      <S.ListItemTextBox>
        <S.ListItemTitle>{title}</S.ListItemTitle>
        <S.ListItemDescription>{`차로 ${timeCost}분 거리`}</S.ListItemDescription>
      </S.ListItemTextBox>
    </S.ListItemBox>
  );
};

export default ListItem;
