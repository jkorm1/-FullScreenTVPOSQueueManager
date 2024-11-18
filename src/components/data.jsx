// data.jsx

// Function to generate random ID
const generateRandomId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({length: 4}, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
};

export const initialQueue = [
    { ID: 'iTHb', name: 'John Doe', time: '2mins ago' },
    { ID: 'sY7B', name: 'Jane Smith', time: '3mins ago' },
    { ID: 'sJY0', name: 'Bob Johnson', time: '5mins ago' },
    { ID: 'y7j6', name: 'Alice Brown', time: '7mins ago' },
    { ID: 'XhyS', name: 'Charlie Davis', time: '10mins ago' },
    { ID: 'Kj8n', name: 'Diana Prince', time: '12mins ago' },
    { ID: 'Pm4k', name: 'Bruce Wayne', time: '15mins ago' },
    { ID: 'Xt9q', name: 'Clark Kent', time: '18mins ago' },
    { ID: 'Wd3h', name: 'Barry Allen', time: '20mins ago' },
    { ID: 'Zv5m', name: 'Hal Jordan', time: '25mins ago' },
    { ID: 'nR2p', name: 'Arthur Curry', time: '30mins ago' },
    { ID: 'tL9x', name: 'Victor Stone', time: '35mins ago' },
    { ID: 'qH4w', name: 'Dinah Lance', time: '40mins ago' },
    { ID: 'mB6k', name: 'Oliver Queen', time: '45mins ago' },
    { ID: 'fY8j', name: 'Kara Danvers', time: '50mins ago' },
    { ID: 'cN5v', name: 'Barry White', time: '55mins ago' },
    { ID: 'gT3h', name: 'Bruce Banner', time: '60mins ago' },
    { ID: 'pL7m', name: 'Diana Ross', time: '65mins ago' },
    { ID: 'wK4b', name: 'Clark Gable', time: '70mins ago' },
    { ID: 'dX9s', name: 'Barry Manilow', time: '75mins ago' },
    { ID: 'hP2v', name: 'Tony Stark', time: '80mins ago' },
    { ID: 'jN8m', name: 'Peter Parker', time: '85mins ago' },
    { ID: 'kR5x', name: 'Steve Rogers', time: '90mins ago' },
    { ID: 'mT6b', name: 'Natasha Romanoff', time: '95mins ago' },
    { ID: 'qL3h', name: 'Clint Barton', time: '100mins ago' },
    { ID: 'rY9k', name: 'Thor Odinson', time: '105mins ago' },
    { ID: 'uB4w', name: 'Wanda Maximoff', time: '110mins ago' },
    { ID: 'vH7m', name: 'Vision', time: '115mins ago' },
    { ID: 'xK2p', name: 'Sam Wilson', time: '120mins ago' },
    { ID: 'zM5s', name: 'Bucky Barnes', time: '125mins ago' },
    { ID: 'aQ8v', name: 'Stephen Strange', time: '130mins ago' },
    { ID: 'bT3x', name: 'Carol Danvers', time: '135mins ago' },
    { ID: 'cR6h', name: 'TChalla', time: '140mins ago' },
    { ID: 'dN9k', name: 'Peter Quill', time: '145mins ago' },
    { ID: 'eL4w', name: 'Gamora', time: '150mins ago' },
    { ID: 'fH7m', name: 'Drax', time: '155mins ago' },
    { ID: 'gK2p', name: 'Rocket Raccoon', time: '160mins ago' },
    { ID: 'hM5s', name: 'Groot', time: '165mins ago' },
    { ID: 'iQ8v', name: 'Mantis', time: '170mins ago' },
    { ID: 'jT3x', name: 'Nebula', time: '175mins ago' },
    { ID: 'kR6h', name: 'Loki', time: '180mins ago' },
    { ID: 'lN9k', name: 'Valkyrie', time: '185mins ago' },
    { ID: 'mL4w', name: 'Okoye', time: '190mins ago' },
    { ID: 'nH7m', name: 'Shuri', time: '195mins ago' },
    { ID: 'oK2p', name: 'Wong', time: '200mins ago' },
    { ID: 'pM5s', name: 'Maria Hill', time: '205mins ago' },
    { ID: 'qQ8v', name: 'Nick Fury', time: '210mins ago' },
    { ID: 'rT3x', name: 'Phil Coulson', time: '215mins ago' },
    { ID: 'sR6h', name: 'Peggy Carter', time: '220mins ago' },
    { ID: 'tN9k', name: 'Howard Stark', time: '225mins ago' },
    { ID: 'uL4w', name: 'Janet Van Dyne', time: '230mins ago' },
    { ID: 'vH7m', name: 'Hank Pym', time: '235mins ago' },
    { ID: 'wK2p', name: 'Scott Lang', time: '240mins ago' },
    { ID: 'xM5s', name: 'Hope Van Dyne', time: '245mins ago' },
    { ID: 'yQ8v', name: 'Matt Murdock', time: '250mins ago' },
    { ID: 'zT3x', name: 'Jessica Jones', time: '255mins ago' },
    { ID: 'aR6h', name: 'Luke Cage', time: '260mins ago' },
    { ID: 'bN9k', name: 'Danny Rand', time: '265mins ago' },
    { ID: 'cL4w', name: 'Frank Castle', time: '270mins ago' },
    { ID: 'dH7m', name: 'Eddie Brock', time: '275mins ago' },
    { ID: 'eK2p', name: 'Miles Morales', time: '280mins ago' },
    { ID: 'fM5s', name: 'Gwen Stacy', time: '285mins ago' }
];

export const initialReadyOrders = [
    { ID: 'uM2n', name: 'Eva Green', time: 'Just now' },
    { ID: 'hQ7p', name: 'Tom Hardy', time: '1min ago' },
    { ID: 'jR4k', name: 'Emma Stone', time: '2mins ago' },
    { ID: 'vB8m', name: 'Ryan Gosling', time: '3mins ago' },
    { ID: 'cT5x', name: 'Ana de Armas', time: '4mins ago' }
];
  