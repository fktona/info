import React from 'react';
import drugs from '../drugs.json';

const renderObject = (obj, i) => {
 
  return (
    <div key={i}>
      {Object.entries(obj).map(([key, value], i) => {
        const keyParts = key.split("_").map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
        return (
          <div className='text-6xl' key={i}>
            <strong >{keyParts}</strong>
            {typeof value === 'object' ? renderObject(value, i) : <span>{value}</span>}
          </div>
        );
      })}
    </div>
  );
};

export default function DrugList() {
  return (
    <div className='drug-list'> 
      {drugs.map((drug, index) => (
        <div className='drug-item'
         key={index}>
          {renderObject(drug, index)}
        </div>
      ))}
    </div>
  );
}