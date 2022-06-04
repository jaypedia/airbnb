import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@/layout';
import MainContents from '@/pages/MainContents';
import NotFound from '@/pages/NotFound';
import SearchResult from '@/pages/SearchResult';

const App = () => {
  return (
    <Router basename={BASE_NAME}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainContents />} />
          <Route path="search-result" element={<SearchResult />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
