import axios from '@/apis/core/mainContents';

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
