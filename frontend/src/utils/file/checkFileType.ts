export const checkFileType = (file: File | string) => {
    if (typeof file === "string") return true;
    const allowedTypes = ["image/jpeg", "image/png"];
    return allowedTypes.includes(file.type);
};