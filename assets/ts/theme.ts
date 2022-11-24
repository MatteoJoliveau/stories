type ColorScheme = 'dark' | 'light'
const SCHEME_STORAGE_KEY = "color-scheme";

function reverseScheme(scheme: ColorScheme): ColorScheme {
    switch (scheme) {
        case 'dark':
            return 'light';
        case 'light':
            return 'dark';
    }
}
function toggleScheme() {
    const scheme = reverseScheme(getPreferredColorScheme());
    setColorScheme(scheme);
    localStorage.setItem(SCHEME_STORAGE_KEY, scheme);
}

function setColorScheme(scheme: ColorScheme) {
    const root = document.querySelector("html");
    if (!root) throw new Error('page has no html root element, wtf?');

    root.dataset.theme = scheme;
}

export function getPreferredColorScheme(): ColorScheme {
    const saved = localStorage.getItem(SCHEME_STORAGE_KEY);

    if (saved) return saved as ColorScheme;

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }

    return 'light';
}

export default function init() {
    if (window.matchMedia) {
        const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        colorSchemeQuery.addEventListener('change', () => {
            setColorScheme(getPreferredColorScheme())
        });
    }

    document.querySelectorAll('.theme-toggle').forEach((toggle) => {
        toggle.addEventListener('click', toggleScheme)
    });

    const scheme = getPreferredColorScheme();
    setColorScheme(scheme);
}
