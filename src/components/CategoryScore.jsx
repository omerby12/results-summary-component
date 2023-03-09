import React from 'react';
import classnames from 'classnames';
import classes from './CategoryScore.module.css';

const CategoryScore = ({ categoryData }) => {
  const categoryName = categoryData.category;
  const categoryScore = categoryData.score;
  const categoryIcon = categoryData.icon;
  const categoryStyleClass = `${'category'}${categoryName}`;

  return (
    <div
      className={classnames(classes.categoryScore, classes[categoryStyleClass])}
    >
      <div className={classes.categoryTitle}>
        <img src={categoryIcon} alt={`${categoryName} Icon`} />
        <p className={classes.categoryName}>{categoryName}</p>
      </div>

      <div className={classes.categoryGradeBox}>
        <p>{categoryScore}</p>
        <p className={classes.categoryTotalGradeText}>/ 100</p>
      </div>
    </div>
  );
};

export default CategoryScore;
