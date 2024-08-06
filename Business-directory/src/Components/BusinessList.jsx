import React from 'react';
import BusinessCard from './BusinessCard';

const BusinessList = ({ businesses }) => {
  return (
    <div style={styles.list}>
      {businesses.map((business, index) => (
        <BusinessCard 
          key={index}
          name={business.name}
          description={business.description}
          image={business.image}
          link={business.link}
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
