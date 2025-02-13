import { RefObject, Dispatch, SetStateAction } from "react";
import { Settings } from "../types/Settings";
/**
 * Starts recording user voice input with microphone.
 *
 * @param settings options provided to the bot
 * @param toggleVoice handles toggling of voice
 * @param triggerSendVoiceInput triggers sending of voice input into chat window
 * @param setInputLength sets the input length to reflect character count & limit
 * @param audioChunksRef: reference to audio chunks
 * @param inputRef reference to textarea for input
 */
export declare const startVoiceRecording: (settings: Settings, toggleVoice: () => Promise<void>, triggerSendVoiceInput: () => void, setTextAreaValue: (value: string) => void, setInputLength: Dispatch<SetStateAction<number>>, audioChunksRef: RefObject<BlobPart[]>, inputRef: RefObject<HTMLTextAreaElement | HTMLInputElement | null>) => void;
/**
 * Stops all voice recordings.
 */
export declare const stopVoiceRecording: () => void;
/**
 * Syncs voice toggle to textarea state (voice should not be enabled if textarea is disabled).
 *
 * @param keepVoiceOn boolean indicating if voice was on and thus is to be kept toggled on
 * @param settings options provided to the bot
 */
export declare const syncVoiceWithChatInput: (keepVoiceOn: boolean, settings: Settings) => void;
//# sourceMappingURL=VoiceService.d.ts.map