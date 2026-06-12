import solarImg from '../assets/images/solar-panel1.png'
import lingayenImg from '../assets/images/lingayen-project.jpg'
import brgyHall from '../assets/images/brgy-hall.png'
import brgyVideo from '../assets/videos/barangay-hall-video.mp4'

export const projects = [
  {
    id: 'asturias',
    title: 'Asturias Hotel Project, Palawan',
    location: 'South National Highway, Puerto Princesa City, Palawan',
    category: 'Solar',
    image: solarImg,
    summary: 'Solar panel installation providing sustainable energy for a hospitality project.',
  },
  {
    id: 'lingayen',
    title: 'Lingayen, Pangasinan Project',
    location: 'Brgy. Capandanan, Lingayen, Pangasinan',
    category: 'Connectivity',
    image: lingayenImg,
    summary: 'Expanding reliable internet access across Pangasinan barangays.',
  },
  {
    id: 'bulan',
    title: 'Barangay Bulan, Bicol Sorsogon',
    location: 'Bulan, Sorsogon, Bicol Region',
    category: 'Commercial',
    image: brgyHall,
    video: brgyVideo,
    summary: 'Commercial connectivity & infrastructure for a hospitality project.',
  },
]
