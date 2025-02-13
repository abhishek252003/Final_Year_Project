import { Dispatch, SetStateAction } from "react";
import { Styles } from "../types/Styles";
/**
 * Creates the useStylesContext() hook to manage styles for the chatbot.
 */
type StylesContextType = {
    styles: Styles;
    setStyles: Dispatch<SetStateAction<Styles>>;
};
declare const useStylesContext: () => StylesContextType;
/**
 * Creates provider to wrap the chatbot container.
 */
declare const StylesProvider: ({ children, styles, setStyles }: {
    children: React.ReactNode;
    styles: Styles;
    setStyles: Dispatch<SetStateAction<Styles>>;
}) => import("react/jsx-runtime").JSX.Element;
export { useStylesContext, StylesProvider };
//# sourceMappingURL=StylesContext.d.ts.map