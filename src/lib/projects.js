import cine1 from '../assets/projects/cine1.png'
import cine2 from '../assets/projects/cine2.png'
import cine3 from '../assets/projects/cine3.png'
import cine4 from '../assets/projects/cine4.png'
import cine5 from '../assets/projects/cine5.png'
import techstore1 from '../assets/projects/techstore1.png'
import techstore2 from '../assets/projects/techstore2.png'
import techstore3 from '../assets/projects/techstore3.png'
import techstore4 from '../assets/projects/techstore4.png'
import techstore5 from '../assets/projects/techstore5.png'
import techstore6 from '../assets/projects/techstore6.png'
import techstore7 from '../assets/projects/techstore7.png'
import netflix1 from '../assets/projects/netflix1.png'
import netflix2 from '../assets/projects/netflix2.png'
import netflix3 from '../assets/projects/netflix3.png'
import netflix4 from '../assets/projects/netflix4.png'
import netflix5 from '../assets/projects/netflix5.png'
import bell1 from '../assets/projects/bell1.png'
import bell2 from '../assets/projects/bell2.png'
import bell3 from '../assets/projects/bell3.png'
import bell4 from '../assets/projects/bell4.png'
import bell5 from '../assets/projects/bell5.png'

export const projects = [
  {
    name: 'Bell´s Food',
    images: [bell1, bell2, bell3, bell4, bell5],
    techs: ['NextJs', 'Next-Auth', 'Typescript', 'Tailwind', 'NestJs', 'Swagger', 'Mongoose', 'MongoDB'],
    description:
      'Sitio web para pedir comida a domicilio tipo Rappi, en el cual te puedes registrar como usuario para hacer pedidos o como restaurante para publicar tus comidas, también cuenta con panel de administrador para gestionar los productos y pedidos en proceso.',
    link: 'https://bellsfood.vercel.app',
    repo: 'https://github.com/LuisDavid6/Bell',
    repo2: 'https://github.com/LuisDavid6/Bell-back',
  },
  {
    name: 'Netflix Clone',
    images: [netflix1, netflix2, netflix3, netflix4, netflix5],
    techs: ['NextJs', 'Next-Auth', 'Typescript', 'Tailwind', 'Prisma', 'MongoDB'],
    description: 'Clon de netflix con autenticación de usuarios, listado y visualización de peliculas.',
    link: 'https://netflix-clone10.vercel.app',
    repo: 'https://github.com/LuisDavid6/Netflix-clone',
  },
  {
    name: 'TechStore',
    images: [techstore1, techstore2, techstore3, techstore4, techstore5, techstore6, techstore7],
    techs: ['React', 'Redux', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Bootstrap'],
    description: 'Ecommerce de productos tecnologicos con autenticación de usuarios y panel de administrador para manejar toda la información.',
    link: 'https://tech-store-t.vercel.app/home',
    repo: 'https://github.com/LuisDavid6/TechStore',
  },
  {
    name: 'Moon Cinema',
    images: [cine1, cine2, cine3, cine4, cine5],
    techs: ['React', 'Redux', 'Node.js', 'Prisma', 'JWT', 'Bootstrap'],
    description:
      'Página web para realizar compra de boletas y dulceria para un cine, con panel de administrador para controlar las funciones de las peliculas.',
    link: 'https://mooncinema.vercel.app/',
    repo: 'https://github.com/gjuancruz/PF',
  },
]
