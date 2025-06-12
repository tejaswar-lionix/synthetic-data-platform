import React, {useState} from 'react';
export const ModelsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>MODELS - Models - GAN trainer, VAE, transformer, </h2><p>GAN</p></div>
};
export default ModelsView;
