import central from '/central.jpg'
import car from '/car.jpg'
import food from '/food.jpg'
import computer from '/computer.jpg';
import game1 from '/game1.jpg';
import car1 from '/car1.jpg';
import hospital1 from '/hospital1.jpg';
import market1 from '/market1.jpg';
import market3 from '/market3.jpg';
import realestate1 from '/realestate1.jpg'

const AllBusinesses = [
  {
    name: 'Central Perk',
    description: 'Best coffee in town.',
    image: central,
    link: 'https://coffeecorner.com',
    category:'restaurant'
  },
  {
    name: 'Burger & Pizza',
    description: 'The Best Pizza and Burger house in town.',
    image: food,
    link: 'https://techhub.com',
    category:'restaurant'
  },
  {
    name: 'Vehicle',
    description: 'We are the best vehicle sales company in the town',
    image:car,
    link: 'https://greengrocer.com',
    category:'cars'
  },
  {
    name:'Computers',
    description:'best computer sales in the city',
    image:computer,
    link: 'https://www.computer.com',
    category:'technology'
  },
  {
    name: 'Car Business 1',
    description: 'Car repair and service in Addis',
    image: car1,
    link: 'https://www.carrepair.com',
    category:'cars'
  },{
    name: 'Game Business 1',
    description: 'The Best Game house in Addis.',
    image: game1,
    link: 'https://www.game.com',
    category:'games'
  },
  {
    name: 'Hospital 1',
    description: ' Medical treatment,sergeries and others...',
    image:hospital1,
    link: 'https://www.hospitals.com',
    category:'hospitals'
  },
  {
    name:'Market 1',
    description:'A great market place in the city',
    image:market1,
    link: 'https://www.computer.com',
    category:'markets'
  },
  {
    name:'Market 3',
    description:'A great market place in the city',
    image:market3,
    link: 'https://www.computer.com',
    category:'markets'
  },
  {
    name: 'Real Estate 1',
    description: 'Great real estates with appropriate prices...',
    image: realestate1,
    link: 'https://techhub.com',
    category:'real-estate'
  },
    
    // Add more businesses here
  ];

  export default AllBusinesses;