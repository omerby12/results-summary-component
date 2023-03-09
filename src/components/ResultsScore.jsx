import React from 'react';
import classnames from 'classnames';
import classes from './ResultsScore.module.css';

const ResultsScore = ({ categoriesData }) => {
  const score = Math.round(
    categoriesData.map((category) => category.score).reduce((a, b) => a + b) /
      categoriesData.length
  );
  return (
    <section className={classnames(classes.resultsScore)}>
      <h1
        className={classnames(classes.resultsScoreHeading, 'heading-primary')}
      >
        Your Result
      </h1>
      <div className={classnames(classes.resultsScoreNumber)}>
        <p className={classnames(classes.score)}>{score}</p>
        <p className={classnames(classes.scoreTotal)}>of 100</p>
      </div>

      <div className={classnames(classes.resultsScoreInfo)}>
        <p className={classnames(classes.infoHeading)}>Great</p>
        <p className={classnames(classes.infoText)}>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
};

export default ResultsScore;
