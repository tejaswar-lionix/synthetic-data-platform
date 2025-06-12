import React, {useState} from 'react';
export const PrivacyView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>PRIVACY - Privacy - DP epsilon, k-anonymity, l-div</h2><p>DP epsilon</p></div>
};
export default PrivacyView;
