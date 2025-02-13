import { MutableRefObject } from "react";
import { Flow } from "../types/Flow";
import { Settings } from "../types/Settings";
import { Styles } from "../types/Styles";
import { Theme } from "../types/Theme";
export type ChatBotProviderContextType = {
    loadConfig: (id: string, flow: Flow, settings: Settings, styles: Styles, themes: Theme | Theme[] | undefined, styleRootRef: MutableRefObject<HTMLStyleElement | null>) => Promise<void>;
};
export declare const useChatBotContext: () => ChatBotProviderContextType | undefined;
declare const ChatBotProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element | null;
export default ChatBotProvider;
//# sourceMappingURL=ChatBotContext.d.ts.map