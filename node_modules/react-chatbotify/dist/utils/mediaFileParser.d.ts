/**
 * Retrieves details of a file (only for image, video and audio) which consists of its type and URL.
 *
 * @param file file object to get details from
 */
export declare const getMediaFileDetails: (file: File) => Promise<{
    fileType: string | null;
    fileUrl: string | null;
}>;
//# sourceMappingURL=mediaFileParser.d.ts.map