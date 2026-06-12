import solar1 from '../assets/images/solar-panel1.png'
import solar2 from '../assets/images/solar-panel2.png'
import noc from '../assets/images/team.png'

export const services = [
  {
    id: 'fibre',
    name: 'Fibre Internet Installation',
    tagline: 'High-speed connectivity for homes, schools, and businesses.',
    body: 'We design and deploy reliable internet infrastructure — fibre and wireless — that reaches urban centers and underserved rural communities alike, bridging the digital divide one barangay at a time.',
    image: noc,
    points: [
      'Fibre & wireless network deployment',
      'Network Operations Center (NOC) monitoring',
      'Coverage for residential, commercial & LGU sites',
      'Last-mile connectivity for rural communities',
    ],
  },
  {
    id: 'solar',
    name: 'Solar Panel Projects',
    tagline: 'Clean, sustainable energy that lowers bills and emissions.',
    body: 'From rooftop installations to community-scale deployments, our solar energy systems deliver dependable, renewable power — reducing energy costs while building a greener, more resilient tomorrow.',
    image: solar1,
    gallery: [solar1, solar2],
    points: [
      'Rooftop & ground-mount solar installation',
      'Residential & commercial systems',
      'Energy-cost reduction & sustainability',
      'Support for off-grid & underserved areas',
    ],
  },
]
