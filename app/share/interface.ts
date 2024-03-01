import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface ICardProject{
    id: string
    project_name: string
    description: string
    technologies: string[]
    index: number
    screenShot?: string | StaticImport
    isPrivate?: boolean
	demoLink?: string
	className?: string
}

export interface IExpCard {
	id: string
	company_logo: string
	company_name: string
	position_name: string
	dates: string
	url_site: string
	background_url: string
}

export interface IDevTools {
	id: string
	name: string
	icon: string
	className?: string
}