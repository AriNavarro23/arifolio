import { useTranslateStore } from '@/app/share/store/useTranslateStore/page'

export const switchLang = (lang: string) => {
	//se crea variable lang_ donde va a ser guardada el idioma que se encuentra en el store
	//se pide el idioma que se encuentra en el store
	const lang_ = useTranslateStore.getState().lang
	//se crea variable setLang donde va a ser guardada la funcion setLang que se encuentra en el store
	const setLang = useTranslateStore.getState().setLang
	//compara y dice si es diferente el idioma que se encuentra en el store con el idioma que se le pasa como parametro
	if (lang !== lang_) {
		//si es diferente entonces se cambia el idioma que se encuentra en el store por el idioma que se le pasa como parametro
		setLang(lang)
		//se guarda el idioma que se le pasa como parametro en el localStorage
		localStorage.setItem('lang', lang)
	}
}
