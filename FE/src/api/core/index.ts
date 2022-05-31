import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000,
});

// 요청 인터셉터 추가
instance.interceptors.request.use(
  config => {
    // 요청을 보내기 전에 수행할 일
    return config;
  },
  error => {
    // 오류 요청을 보내기전 수행할 일
    console.log(error);
    return Promise.reject(error);
  },
);

// 응답 인터셉터 추가
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // 오류 응답 처리
    console.log(error);
    return Promise.reject(error);
  },
);

export default instance;
