import React from 'react';
import classnames from 'classnames';
import classes from './ResultsSummary.module.css';

const ResultsSummary = (props) => {
  return (
    <main
      className={classnames(classes.resultsSummary, 'grid', 'grid--2-cols')}
    >
      {props.children}
    </main>
  );
};

export default ResultsSummary;
