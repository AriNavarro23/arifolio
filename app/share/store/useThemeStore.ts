import { create } from 'zustand'
import { theme_types } from '../theme-types'

const { theme_DARK, theme_LIGHT } = theme_types

//defino interfaz con typescript
interface IThemeStore {
    theme: string
    toggleTheme: (theme: string) => void
}
//se verifica si window esta definido, y se verifica si el modo osucro esta activado
const isDark = (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)

//
export const useThemeStore = create<IThemeStore>(set => ({
	// inicializamos el estado theme, si esta definido en windows localstorage, nos fijamos si hay theme guardado
	// sino se define el tema oscuro si se prefiere
	theme: (typeof window !== 'undefined' && localStorage.getItem('theme')) || (isDark ? theme_DARK : theme_LIGHT),
	//definimos una funcion para cambiar el tema 
	toggleTheme: () =>
		set(state => ({
			//cambio tema segun el estado actual
			theme: state.theme === theme_LIGHT ? theme_DARK : theme_LIGHT,
		})),
}))