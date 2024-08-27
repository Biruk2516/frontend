import React from 'react';
import BusinessCard from './business-card/BusinessCard';
import './ComponentStyles/Business.css'

const BusinessList = ({ business }) => {

  return (
    <div style={styles.list}>
      {business.map((b, index) => (
        <div key={index}> 
        <BusinessCard 
          key={index}
          name={b.name}
          description={b.description}
          image={b.image1}
          link={b.link}
          busines={b}
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
