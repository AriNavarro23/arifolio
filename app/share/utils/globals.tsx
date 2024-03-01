import {
	ICardProject,
	IExpCard,
	IDevTools,
} from '@/app/share/interface'
import { v4 as uuid } from 'uuid'; 
import crud from '@/assets/crud.png';
import password from '@/assets/password.png';
import todolist from '@/assets/todolist.png';
import weather from '@/assets/weather.png';


export const Projects: ICardProject[] = [
	
	{
		id: uuid(),
		project_name: 'Crud App',
		description: 'projects-section.projects.crud',
		screenShot: crud,
		demoLink: 'https://todolist-ochre-eight.vercel.app/',
		className: 'lg:row-span-3 xl:col-span-4',
		index: 1,
		technologies: ['React Js', 'CSS', 'Vercel'],
	},
	{
		id: uuid(),
		project_name: 'Password Manager',
		description: 'projects-section.projects.password',
		screenShot: password,
		demoLink: 'https://password-generator-react-eta.vercel.app/',
		className: 'lg:row-span-2 xl:col-span-4',
		index: 2,
		technologies: ['Laravel', 'PHP'],
	},
	{
		id: uuid(),
		project_name: 'Stock Market',
		description: 'projects-section.projects.stock',
		screenShot: todolist,
		demoLink: 'https://stock-market-demo.vercel.app/home',
		className: 'lg:row-span-3 xl:col-span-4',
		isPrivate: true,
		index: 3,
		technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
	},
	{
		id: uuid(),
		project_name: 'Bluee IoT',
		description: 'projects-section.projects.bluee',
		screenShot: weather,
		demoLink: 'https://bluee.com.mx/',
		className: 'lg:row-span-2 xl:col-span-4',
		index: 4,
		technologies: ['Angular', 'TypeScript', 'SASS'],
	},
]
export const Experiences: IExpCard[] = [
	{
		id: uuid(),
		company_logo: 'assets/dd3_bg.webp',
		company_name: 'DD360',
		position_name: 'Front-end Developer',
		dates: 'experience-section.companies.DD360.dates',
		url_site: 'https://dd360.com/',
		background_url: 'assets/dd3_bg.webp',
	},
	{
		id: uuid(),
		company_logo: 'assets/dd3_bg.webp',
		company_name: 'Nolab',
		position_name: 'FullStack Developer Mid',
		dates: 'experience-section.companies.nolab.dates',
		url_site: 'https://nolab.mx/',
		background_url: 'assets/dd3_bg.webp',
	},
	{
		id: uuid(),
		company_logo: 'assets/dd3_bg.webp',
		company_name: 'Grupo Esperanza',
		position_name: 'Full Stack Developer Jr',
		dates: 'experience-section.companies.esperanza.dates',
		url_site: 'https://esperanza.mx/',
		background_url: 'assets/dd3_bg.webp',
	},
	{
		id: uuid(),
		company_logo: 'assets/dd3_bg.webp',
		company_name: 'BWL',
		position_name: 'Front-end Developer',
		dates: 'experience-section.companies.bwl.dates',
		url_site: 'https://www.bwl.com.mx/',
		background_url: 'assets/dd3_bg.webp',
	},
]

export const DevelopTools: IDevTools[] = [
	{
		id: uuid(),
		name: 'HTML5',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
	},
	{
		id: uuid(),
		name: 'CSS3',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
	},
	{
		id: uuid(),
		name: 'JavaScript',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
	},
	{
		id: uuid(),
		name: 'TypeScript',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
	},
	{
		id: uuid(),
		name: 'SASS',
		icon: 'https://www.svgrepo.com/show/374061/sass.svg',
	},
	{
		id: uuid(),
		name: 'React',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},
	{
		id: uuid(),
		name: 'Angular',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
	},
	{
		id: uuid(),
		name: 'Next.js',
		icon: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
		className: 'dark:invert opacity-70',
	},
	{
		id: uuid(),
		name: 'Vite',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
	},
	{
		id: uuid(),
		name: 'Tailwind CSS',
		icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg',
	},
	{
		id: uuid(),
		name: '.NET',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg',
	},
	{
		id: uuid(),
		name: 'Laravel',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg',
	},
	{
		id: uuid(),
		name: 'Node.js',
		icon: 'https://www.svgrepo.com/show/355140/node.svg',
	},
	{
		id: uuid(),
		name: 'MongoDB',
		icon: 'https://www.svgrepo.com/show/331488/mongodb.svg',
	},
	{
		id: uuid(),
		name: 'MySQL',
		icon: 'https://www.svgrepo.com/show/306453/mysql.svg',
		className: 'dark:invert opacity-70',
	},
]
