import { Box, Typography, Stack } from '@mui/material';

import * as S from './Footer.style';

const Footer = () => {
  return (
    <S.FooterBox>
      <Box
        sx={{ width: 1200, height: 380, borderBottom: '1px solid lightgray', display: 'flex' }}
        pt={5}
      >
        <Stack width={300}>
          <Typography variant="subtitle2" mr={6} color="#333" fontWeight={900} my={1}>
            소개
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            이용 방법
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            뉴스룸
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            투자자 정보
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            호텔투나잇
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            비즈니스 프로그램
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            호스트 분들이 있기에 가능합니다
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            채용정보
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            창립자 편지
          </Typography>
        </Stack>
        <Stack width={300}>
          <Typography variant="subtitle2" mr={6} color="#333" fontWeight={900} my={1}>
            커뮤니티
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            다양성 및 소속감
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            접근성
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            어소시메이트
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            구호 인력을 위한 숙소
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            게스트 추천
          </Typography>
        </Stack>
        <Stack width={300}>
          <Typography variant="subtitle2" mr={6} color="#333" fontWeight={900} my={1}>
            호스팅하기
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            숙소 호스팅
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            온라인 체험 호스팅하기
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            체험 호스팅하기
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            책임감 있는 호스팅
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            호스트 추천
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            자료 센터
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            커뮤니티 센터
          </Typography>
        </Stack>
        <Stack width={300}>
          <Typography variant="subtitle2" mr={6} color="#333" fontWeight={900} my={1}>
            지원
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            코로나19 대응 방안
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            도움말 센터
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            예약 취소 옵션
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            이웃 민원 지원
          </Typography>
          <Typography variant="subtitle2" mr={6} color="#333" my={0.5} fontWeight={350}>
            신뢰와 안전
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ width: 1200, display: 'flex' }} py={3}>
        <Typography variant="subtitle2" mr={6} color="#333" fontWeight={350}>
          2021 Airbnb, Inc.
        </Typography>
        <Typography variant="subtitle2" mr={6} color="#333" fontWeight={350}>
          개인정보처리방침
        </Typography>
        <Typography variant="subtitle2" mr={6} color="#333" fontWeight={350}>
          이용약관
        </Typography>
        <Typography variant="subtitle2" mr={6} color="#333" fontWeight={350}>
          한국의 변경된 환불 정책
        </Typography>
        <Typography variant="subtitle2" mr={6} color="#333" fontWeight={350}>
          회사 세부정보
        </Typography>
      </Box>
    </S.FooterBox>
  );
};

export default Footer;
