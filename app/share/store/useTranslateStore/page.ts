import { create } from 'zustand'

interface ITranslateStore {
	lang: string
	setLang: (lang: string) => void
	showTranslateToggle: boolean
	setShowTranslateToggle: (showToggle: boolean) => void
}
//creando el store del boton de trasnlate
export const useTranslateStore = create<ITranslateStore>(set => ({
	//se inicializa con una variable en el localstorage si esta disponible, si no se inicializa en ingles
	lang: (typeof window !== 'undefined' && window.localStorage.getItem('lang')) || 'en',
	//se actualiza el estado del idioma
	setLang: (lang: string) => set(() => ({ lang })),
	//inicializo el estado del boton de translate en falso
	showTranslateToggle: false,
	//se actualiza el estado del boton de translate
	setShowTranslateToggle: (showToggle: boolean) =>
		set(() => ({ showTranslateToggle: showToggle })),
}))

