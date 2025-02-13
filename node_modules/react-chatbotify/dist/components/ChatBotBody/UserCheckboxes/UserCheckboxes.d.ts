import { Flow } from "../../../types/Flow";
import "./UserCheckboxes.css";
/**
 * Supports showing of checkboxes for user to mark.
 *
 * @param checkboxes object representing checkboxes to show and min/max number of selections
 * @param checkedItems set representing items marked
 * @param path path associated with the current block
 */
declare const UserCheckboxes: ({ checkboxes, checkedItems, path, }: {
    checkboxes: {
        items: Array<string>;
        max?: number;
        min?: number;
        sendOutput?: boolean;
        reusable?: boolean;
    };
    checkedItems: Set<string>;
    path: keyof Flow;
}) => import("react/jsx-runtime").JSX.Element;
export default UserCheckboxes;
//# sourceMappingURL=UserCheckboxes.d.ts.map