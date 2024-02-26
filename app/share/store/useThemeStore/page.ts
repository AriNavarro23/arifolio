import { create } from 'zustand'
import { theme_types } from '../../constants/page'

const { theme_DARK, theme_LIGHT } = theme_types

interface IThemeStore {
    theme: string
    toggleTheme: (theme: string) => void
}

const isDark = (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) || false;

export const useThemeStore = create<IThemeStore>(set => ({
	theme: (typeof window !== 'undefined' && localStorage.getItem('theme')) || (isDark ? theme_DARK : theme_LIGHT),
	toggleTheme: () =>
		set(state => ({
			theme: state.theme === theme_LIGHT ? theme_DARK : theme_LIGHT,
		})),
}))