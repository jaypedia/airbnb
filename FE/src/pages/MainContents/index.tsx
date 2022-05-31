import { useState, useEffect } from 'react';
import mainContentsData from '@/api/mainContents';

const MainContent = () => {
  const [nearDestData, setNearDestData] = useState(null);
  const [recommendablePlaceData, setRecommendablePlaceData] = useState(null);
  const [loading, setLoading] = useState(true);

  //TODO: data fetch 함수 util로 통합
  const getNearDestData = async () => {
    try {
      const response = await mainContentsData.getNearDestData();
      setNearDestData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getRecommendablePlaceData = async () => {
    try {
      const response = await mainContentsData.getRecommendablePlaceData();
      setRecommendablePlaceData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNearDestData();
    getRecommendablePlaceData();
  }, []);

  return (
    <>
      <div>
        {nearDestData && <textarea rows={10} value={JSON.stringify(nearDestData, null, 2)} />}
      </div>
      <div>
        {recommendablePlaceData && (
          <textarea rows={10} value={JSON.stringify(recommendablePlaceData, null, 2)} />
        )}
      </div>
    </>
  );
};

export default MainContent;
