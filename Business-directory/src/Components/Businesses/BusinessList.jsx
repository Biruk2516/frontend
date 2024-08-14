import React from 'react';
import BusinessCard from './BusinessCard';

const BusinessList = ({ business }) => {
  return (
    <div style={styles.list}>
      {business.map((b, index) => (
        <BusinessCard 
          key={index}
          name={b.name}
          description={b.description}
          image={b.image}
          link={b.link}
        />
      ))}
    </div>
  );
};

const styles = {
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textDecoration:'none'
  },
};

export default BusinessList;
