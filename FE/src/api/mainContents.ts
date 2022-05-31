import instance from '@/api/core';

export default {
  getNearDestData() {
    return instance({
      url: '/nearby-destination',
      method: 'get',
    });
  },

  getRecommendablePlaceData() {
    return instance({
      url: '/recommendable-place',
      method: 'get',
    });
  },
};
