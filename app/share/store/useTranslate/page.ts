import { create } from 'zustand'

interface ITranslateStore {
	lang: string
	setLang: (lang: string) => void
	showTranslateToggle: boolean
	setShowTranslateToggle: (showToggle: boolean) => void
}
//creando el store del boton de trasnlate
export const useTranslateStore = create<ITranslateStore>(set => ({
	lang: (typeof window !== 'undefined' && window.localStorage.getItem('lang')) || 'en',
	setLang: (lang: string) => set(() => ({ lang })),
	showTranslateToggle: false,
	setShowTranslateToggle: (showToggle: boolean) =>
		set(() => ({ showTranslateToggle: showToggle })),
}))
