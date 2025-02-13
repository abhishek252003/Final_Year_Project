import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { Settings } from "../types/Settings";
import { Styles } from "../types/Styles";
import { Flow } from "../types/Flow";
import { Theme } from "../types/Theme";
import { Plugin } from "../types/Plugin";
/**
 * Helps to load the chatbot configurations.
 *
 * @param id id to uniquely identify the chatbot
 * @param flow conversation flow for the bot
 * @param settings settings to setup the bot
 * @param styles styles to setup the bot
 * @param themes themes to apply to the bot
 * @param setConfigLoaded setter to indicate when config is fully loaded
 * @param styleRootRef ref to the style container
 */
declare const ChatBotLoader: ({ id, flow, settings, styles, themes, plugins, setConfigLoaded, styleRootRef, }: {
    id: string;
    flow: Flow;
    settings: Settings;
    styles: Styles;
    themes: Theme | Array<Theme>;
    plugins: Array<Plugin>;
    setConfigLoaded: Dispatch<SetStateAction<boolean>>;
    styleRootRef: MutableRefObject<HTMLStyleElement | null>;
}) => null;
export default ChatBotLoader;
//# sourceMappingURL=ChatBotLoader.d.ts.map