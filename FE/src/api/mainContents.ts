import axios from '@/api/core';

export default {
  getNearDestData() {
    return axios({
      url: '/nearby-destination',
      method: 'get',
    });
  },

  getRecommendablePlaceData() {
    return axios({
      url: '/recommendable-place',
      method: 'get',
    });
  },
};
