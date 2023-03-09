import React from 'react';
import classnames from 'classnames';
import classes from './ResultsInfo.module.css';
import CategoryScore from './CategoryScore';

const ResultsInfo = ({ categoriesData }) => {
  const categories = categoriesData.map((categoryData) => (
    <CategoryScore
      categoryData={categoryData}
      key={categoryData.category.toString()}
    />
  ));

  return (
    <section className={classnames(classes.resultsInfo)}>
      <h1 className={classnames(classes.resultsInfoHeading, 'heading-primary')}>
        Summary
      </h1>
      <div className={classnames(classes.resultsInfoBox)}>{categories}</div>
      <a href='#' className='btn'>
        Countine
      </a>
    </section>
  );
};

export default ResultsInfo;
