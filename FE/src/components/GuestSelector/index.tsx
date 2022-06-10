import { useState, useEffect } from 'react';

import { Box, Typography, Stack } from '@mui/material';

import * as S from '@/components/GuestSelector/GuestSelector.style';

const GuestSelector = () => {
  const addGuestCnt = () => {
    setGuestCnt(v => {
      return v + 1;
    });
  };
  const subGuestCnt = () => {
    if (guestCnt > 0) {
      setGuestCnt(v => {
        return v - 1;
      });
    }
  };
  const [guestCnt, setGuestCnt] = useState(0);
  return (
    <Box sx={{ width: 300, height: 230, margin: 5 }}>
      <Stack
        direction="row"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: ' 20px 0px',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            paddingRight: '30px',
          }}
        >
          <Typography variant="subtitle1" component="span" fontWeight={800}>
            성인
          </Typography>
          <Typography variant="subtitle2" component="span" color="gray">
            만 13세 이상
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
        >
          <S.GuestSelectorBtn onClick={addGuestCnt}>+</S.GuestSelectorBtn>
          <S.GuestSelectorNumber>{guestCnt}</S.GuestSelectorNumber>
          <S.GuestSelectorBtn onClick={subGuestCnt}>-</S.GuestSelectorBtn>
        </Stack>
      </Stack>
      <hr />
      <Stack
        direction="row"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: ' 20px 0px',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            paddingRight: '30px',
          }}
        >
          <Typography variant="subtitle1" component="span" fontWeight={800}>
            어린이
          </Typography>
          <Typography variant="subtitle2" component="span" color="gray">
            만 2세~12세
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
        >
          <S.GuestSelectorBtn onClick={addGuestCnt}>+</S.GuestSelectorBtn>
          <S.GuestSelectorNumber>{guestCnt}</S.GuestSelectorNumber>
          <S.GuestSelectorBtn onClick={subGuestCnt}>-</S.GuestSelectorBtn>
        </Stack>
      </Stack>
      <hr />
      <Stack
        direction="row"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '15px',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            margin: ' 20px 0px',
          }}
        >
          <Typography variant="subtitle1" component="span" fontWeight={800}>
            유아
          </Typography>
          <Typography variant="subtitle2" component="span" color="gray">
            만 2세 미만
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
        >
          <S.GuestSelectorBtn onClick={addGuestCnt}>+</S.GuestSelectorBtn>
          <S.GuestSelectorNumber>{guestCnt}</S.GuestSelectorNumber>
          <S.GuestSelectorBtn onClick={subGuestCnt}>-</S.GuestSelectorBtn>
        </Stack>
      </Stack>
    </Box>
  );
};

export default GuestSelector;
