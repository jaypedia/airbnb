import * as S from './NotFound.style';

const NotFound = () => {
  return (
    <S.NotFoundWrapper>
      <S.NotFoundText>Sorry, Page Not Found</S.NotFoundText>
      <S.HomeButton to="/">HOME</S.HomeButton>
    </S.NotFoundWrapper>
  );
};

export default NotFound;
