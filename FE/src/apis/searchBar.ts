import axios from '@/apis/core/searchBar';

export default {
  getRangePriceData() {
    return axios({
      url: '/prices',
      method: 'get',
    });
  },
};
