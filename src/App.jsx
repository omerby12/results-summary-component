import React from 'react';
import ResultsSummary from './components/ResultsSummary';
import ResultsScore from './components/ResultsScore';
import ResultsInfo from './components/ResultsInfo';
import categoriesData from './data/categoriesData.json';

const App = () => {
  return (
    <ResultsSummary>
      <ResultsScore categoriesData={categoriesData} />
      <ResultsInfo categoriesData={categoriesData} />
    </ResultsSummary>
  );
};

export default App;
