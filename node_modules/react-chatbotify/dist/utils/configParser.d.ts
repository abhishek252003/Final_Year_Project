import { Settings } from "../types/Settings";
import { Styles } from "../types/Styles";
import { Theme } from "../types/Theme";
/**
 * Retrieves default values for chatbot settings.
 */
export declare const getDefaultSettings: () => Settings;
/**
 * Retrieves default values for chatbot styles.
 */
export declare const getDefaultStyles: () => Styles;
/**
 * Parses default settings and styles with user provided config to generate final settings and styles.
 *
 * @param botId id of the chatbot
 * @param providedSettings settings provided by the user to the bot
 * @param providedStyles styles provided by the user to the bot
 * @param themes themes provided by the user to the bot
 */
export declare const parseConfig: (botId: string, providedSettings: Settings | undefined, providedStyles: Styles | undefined, themes: undefined | Theme | Array<Theme>) => Promise<{
    settings: Settings;
    inlineStyles: Styles;
    cssStylesText: string;
}>;
/**
 * Combines default and provided config.
 *
 * @param preferredConfig config provided by the user to the bot
 * @param baseConfig the base config that the provided config will overwrite
 */
export declare const getCombinedConfig: (preferredConfig: Settings | Styles, baseConfig: Settings | Styles) => Settings | Styles;
/**
 * Deep clones a javascript object.
 *
 * @param obj object to clone
 */
export declare const deepClone: (obj: {
    [key: string]: any;
}) => {
    [key: string]: any;
};
//# sourceMappingURL=configParser.d.ts.map