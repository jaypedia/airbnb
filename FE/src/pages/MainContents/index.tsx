import { useState, useEffect } from 'react';
import mainContentsData from '@/api/mainContents';
import updateData from '@/util/updateData';

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
