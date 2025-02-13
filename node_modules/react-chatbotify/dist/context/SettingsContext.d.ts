import { Dispatch, SetStateAction } from "react";
import { Settings } from "../types/Settings";
/**
 * Creates the useSettingsContext() hook to manage settings for the chatbot.
 */
type SettingsContextType = {
    settings: Settings;
    setSettings: Dispatch<SetStateAction<Settings>>;
};
declare const useSettingsContext: () => SettingsContextType;
/**
 * Creates provider to wrap the chatbot container.
 */
declare const SettingsProvider: ({ children, settings, setSettings }: {
    children: React.ReactNode;
    settings: Settings;
    setSettings: Dispatch<SetStateAction<Settings>>;
}) => import("react/jsx-runtime").JSX.Element;
export { useSettingsContext, SettingsProvider };
//# sourceMappingURL=SettingsContext.d.ts.map