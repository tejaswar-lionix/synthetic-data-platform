import React, {useState} from 'react';
export const EvaluationView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>EVALUATION - Evaluation - bias, fairness, drift, stat</h2><p>bias</p></div>
};
export default EvaluationView;
