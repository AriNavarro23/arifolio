import { theme_types } from '../../constants/page';

export const applyThemePreference = (theme: string): void => {
	localStorage.setItem('theme', theme)

    //desestructura los themes
	const { theme_DARK, theme_LIGHT } = theme_types
    // se obtiene ref del documento html
	const root = window.document.documentElement
    // creo una constante que verifica si el theme es dark
	const isDark = theme === theme_DARK
    // remuevo el theme que no es 
	root.classList.remove(isDark ? theme_LIGHT : theme_DARK)
    // agrego el theme que es
	root.classList.add(theme)
    // seteo el color scheme
	root.style.setProperty('color-scheme', theme)
}
