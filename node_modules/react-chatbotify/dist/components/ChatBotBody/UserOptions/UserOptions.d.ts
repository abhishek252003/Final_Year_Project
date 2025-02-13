import { Flow } from "../../../types/Flow";
import "./UserOptions.css";
/**
 * Supports showing of options for user to select.
 *
 * @param options array representing options to show
 * @param path path associated with the current block
 */
declare const UserOptions: ({ options, path, }: {
    options: {
        items: Array<string>;
        sendOutput?: boolean;
        reusable?: boolean;
    };
    path: keyof Flow;
}) => import("react/jsx-runtime").JSX.Element;
export default UserOptions;
//# sourceMappingURL=UserOptions.d.ts.map