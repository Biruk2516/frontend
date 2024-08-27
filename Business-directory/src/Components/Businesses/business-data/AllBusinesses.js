import central from '/central.jpg'
import car from '/car.jpg'
import food from '/food.jpg'
import computer from '/computer.jpg';
import game1 from '/game1.jpg';
import car1 from '/car1.jpg';
import hospital1 from '/hospital1.jpg';
import realestate1 from '/realestate1.jpg';
import pharmacy3 from '/pharmacy3.jpg';

const description_all = 'Best coffee in town.      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quam beatae corporis repudiandae ipsum nihil debitis expedita mollitia aliquid. Quis reprehenderit tenetur accusantium recusandae at ipsa cumque veritatis facilis debitis';
const Allbusinesses = [
  {
    id:'1',
    name: 'Central Perk',
    description:description_all.substring(0,20),
    description_detail:description_all,
    image1: central,
    image2:food,
    image3:car,
    link: 'https://coffeecorner.com',
    category:'restaurant',
    location:'somewhere',
    contactDetails:'centralperk@gmail.com',
    operatingHours:'02:00 - 11:30',
    phone:'+251 58 441 0340'
  },
  {
    id:'2',
    name: 'Burger & Pizza',
    description: 'The Best Pizza and Burger house in town.',
    image1: food,
    link: 'https://techhub.com',
    category:'restaurant',
    location:'somewhere',
    contactDetails:'centralperk@gmail.com',
    operatingHours:'02:00 - 11:30'
  },
  
  {
    id:'3',
    name: 'Vehicle',
    description: 'The best vehicle sales company in the town',
    image1:car,
    link: 'https://greengrocer.com',
    category:'cars',
    location:'somewhere',
    contactDetails:'centralperk@gmail.com',
    operatingHours:'02:00 - 11:30'
  },
  {
    id:'4',
    name:'Computers',
    description:'best computer sales in the city',
    image1:computer,
    link: 'https://www.computer.com',
    category:'technology',
    location:'somewhere',
    contactDetails:'centralperk@gmail.com',
    operatingHours:'02:00 - 11:30'
  },
  {
    id:'5',
    name: 'Car Business 1',
    description: 'Car repair and service in Addis',
    image1: car1,
    link: 'https://www.carrepair.com',
    category:'cars',
    location:'somewhere',
    contactDetails:'centralperk@gmail.com',
    operatingHours:'02:00 - 11:30'
  },
  {
    id:'6',
    name: 'Game Business 1',
    description: 'The Best Game house in Addis.',
    image1: game1,
    link: 'https://www.game.com',
    category:'games',
    location:'somewhere',
    contactDetails:'centralperk@gmail.com',
    operatingHours:'02:00 - 11:30'
  },
  {
    id:'7',
    name: 'Hospital 1',
    description: ' Medical treatment,sergeries and others...',
    image1:hospital1,
    link: 'https://www.hospitals.com',
    category:'hospitals',
    location:'somewhere',
    contactDetails:'centralperk@gmail.com',
    operatingHours:'02:00 - 11:30'
  },
  {
    id:'8',
    name: 'Real Estate 1',
    description: 'Great real estates with appropriate prices...',
    image1: realestate1,
    link: 'https://techhub.com',
    category:'real-estate',
    location:'somewhere',
    contactDetails:'centralperk@gmail.com',
    operatingHours:'02:00 - 11:30'
  },
  {
    id:'9',
    name: 'Pharmacy 3',
    description: 'Medical drugs and clinic related equipments ...',
    image1: pharmacy3,
    link: 'https://coffeecorner.com',
    category:'pharmacy',
    location:'somewhere',
    contactDetails:'centralperk@gmail.com',
    operatingHours:'02:00 - 11:30'
  }
  
    
    // Add more businesses here
  ];

  export default Allbusinesses;