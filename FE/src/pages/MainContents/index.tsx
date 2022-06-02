import { useState, useEffect } from 'react';

import { Skeleton, Stack, Typography, Grid, Box } from '@mui/material';
import styled from 'styled-components';

import mainContentsData from '@/apis/mainContents';
import AlbumItem from '@/components/common/AlbumItem';
import ListItem from '@/components/common/ListItem';
import updateData from '@/utils/updateData';

const MainContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const MainContent = () => {
  const [nearDestData, setNearDestData] = useState(null);
  const [recommendablePlaceData, setRecommendablePlaceData] = useState(null);

  const [nearDestDataLoading, setNearDestDataLoading] = useState(false);
  const [recommendablePlaceDataLoading, setRecommendablePlaceDataLoading] = useState(false);

  useEffect(() => {
    updateData(setNearDestDataLoading, mainContentsData.getNearDestData, setNearDestData);
    updateData(
      setRecommendablePlaceDataLoading,
      mainContentsData.getRecommendablePlaceData,
      setRecommendablePlaceData,
    );
  }, []);

  const listItems = nearDestData?.map(listItem => (
    <Grid item xs={3}>
      {nearDestDataLoading ? (
        <Stack direction="row" spacing={1}>
          <Skeleton variant="rectangular" width={80} height={80} animation="wave" />
          <Stack spacing={2} justifyContent="center">
            <Skeleton variant="rectangular" width={60} height={20} animation="wave" />
            <Skeleton variant="rectangular" width={120} height={20} animation="wave" />
          </Stack>
        </Stack>
      ) : (
        <ListItem title={listItem.title} timeCost={listItem.timeCost} imgUrl={listItem.imgUrl} />
      )}
    </Grid>
  ));

  const albumItems = recommendablePlaceData?.map(albumItem => (
    <Grid item xs={3}>
      {recommendablePlaceDataLoading ? (
        <Stack spacing={2}>
          <Skeleton variant="rectangular" width={280} height={280} animation="wave" />
          <Skeleton variant="rectangular" width={200} height={20} animation="wave" />
        </Stack>
      ) : (
        <AlbumItem imgUrl={albumItem.imgUrl} description={albumItem.description} />
      )}
    </Grid>
  ));

  return (
    <MainContentsBox>
      <Box sx={{ width: 1200, height: 300 }}>
        <Typography variant="h5"> 가까운 여행지 둘러보기 </Typography>
        <Grid container my={1} rowSpacing={3} columnSpacing={1}>
          {listItems}
        </Grid>
      </Box>
      <Box sx={{ width: 1200, height: 300 }}>
        <Typography variant="h5"> 어디서나, 여행은 살아보는 거야! </Typography>
        <Grid container my={1} rowSpacing={2} columnSpacing={1}>
          {albumItems}
        </Grid>
      </Box>
    </MainContentsBox>
  );
};

export default MainContent;
