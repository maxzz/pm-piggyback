import { proxy, subscribe } from 'valtio';
import { type ThemeMode, themeApplyMode } from '../utils/theme-apply';

const STORE_KEY = "basic-template-26";
const STORE_VER = "v1.0";
const STORAGE_ID = `${STORE_KEY}__${STORE_VER}`;

export interface AppSettings {
    theme: ThemeMode;
    showFooter: boolean;
    panelSizes?: number[];      // ResizablePanelGroup panel sizes (percentages)
}

const DEFAULT_SETTINGS: AppSettings = {
    theme: 'light',
    showFooter: true,
    panelSizes: [],
};

// Load settings from localStorage

function loadSettings(): AppSettings {
    try {
        const stored = localStorage.getItem(STORAGE_ID);
        if (stored) {
            const parsed = JSON.parse(stored) as Partial<AppSettings>;
            // merge stored settings with defaults to ensure new fields are present
            return {
                ...DEFAULT_SETTINGS,
                ...parsed,
                panelSizes: parsed.panelSizes ?? DEFAULT_SETTINGS.panelSizes,
            };
        }
    } catch (e) {
        console.error("Failed to load settings", e);
    }
    return { ...DEFAULT_SETTINGS };
}

export const appSettings = proxy<AppSettings>(loadSettings());

themeApplyMode(appSettings.theme);

subscribe(appSettings, () => {
    try {
        themeApplyMode(appSettings.theme);
        localStorage.setItem(STORAGE_ID, JSON.stringify(appSettings));
    } catch (e) {
        console.error("Failed to save settings", e);
    }
});
