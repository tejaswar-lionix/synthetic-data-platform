import React, {useState} from 'react';
export const ExportView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>EXPORT - Export - Parquet, CSV, API, connectors, </h2><p>Parquet</p></div>
};
export default ExportView;
