import { Settings } from "../types/Settings";
import { Styles } from "../types/Styles";
import { Theme } from "../types/Theme";
import { ThemeCacheData } from "../types/internal/ThemeCacheData";
/**
 * Fetches the cached theme if it exist and checks for expiry.
 *
 * @param id id of the theme
 * @param version version of the theme
 * @param cacheDuration duration that the theme should be cached for
 */
export declare const getCachedTheme: (id: string, version: string, cacheDuration: number) => ThemeCacheData | null;
/**
 * Saves a theme to cache.
 *
 * @param id id of the theme
 * @param version version of the theme
 * @param settings settings to cache
 * @param inlineStyles inline styles to cache
 * @param cssStylesText css styles to cache
 */
export declare const setCachedTheme: (id: string, version: string, settings: Settings, inlineStyles: Styles, cssStylesText: string) => void;
/**
 * Processes information for a given theme and retrieves its settings via CDN.
 *
 * @param botId id of the chatbot
 * @param theme theme to process and retrieve config for
 */
export declare const processAndFetchThemeConfig: (botId: string, theme: Theme) => Promise<{
    settings: Settings;
    inlineStyles: Styles;
    cssStylesText: string;
}>;
//# sourceMappingURL=ThemeService.d.ts.map