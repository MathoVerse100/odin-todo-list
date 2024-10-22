export function toKebab(string) {
    return string.toLowerCase().split(" ").join("-");
};