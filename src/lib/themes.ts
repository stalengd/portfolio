import { browser } from '$app/environment';
import { derived, writable, get } from 'svelte/store';

const storageKey = 'theme';

export type Theme = 'dark' | 'light';

export const theme = writable(getInitialTheme());
theme.subscribe(val => {
    if (!browser) return;
    localStorage.setItem(storageKey, val)
});

export function switchTheme() {
    if (get(isDarkTheme)) {
        theme.set('light');
    }
    else {
        theme.set('dark');
    }

    renderTheme()
}

export function renderTheme() {
    const classList = document.documentElement.classList;
    if (get(isDarkTheme)) {
        classList.add('dark');
    } else {
        classList.remove('dark');
    }
}

export let isDarkTheme = derived(theme, x => x == 'dark')


function getInitialTheme() : Theme {
    if (!browser) return 'light';

    if (localStorage[storageKey] === 'dark' || (!(storageKey in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        return 'dark';
    } else {
        return 'light';
    }
}