import React,{useState, createContext} from 'react';
import BusinessCard from './BusinessCard';
import '../ComponentStyles/Business.css';

const BusinessList = ({ business ,onClick}) => {

  return (
    <div style={styles.list}>
      {business.map((b, index) => (
        <div key={index}> 
        <BusinessCard 
          key={index}
          name={b.name}
          description={b.description}
          image={b.image}
          link={b.link}
        />
        </div>
      ))}
    </div>
  );
};

const styles = {
  list: {
    marginBottom:'5px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textDecoration:'none'
  },
};

export default BusinessList;
