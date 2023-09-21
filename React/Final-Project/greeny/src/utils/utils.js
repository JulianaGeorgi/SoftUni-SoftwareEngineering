export function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}. ${day}, ${year}`;
}

export function sliceText(text) {
    const ellipsis = "...";
    let maxCharCount = 200;
    if (text.length > maxCharCount) {
        maxCharCount = text.substring(0, maxCharCount).lastIndexOf(' ');
    }
    return text.length > maxCharCount ? text.substring(0, maxCharCount) + ellipsis : text;
}

export function toTitleCase(str) {
    const titleCase = str
        .toLowerCase()
        .split(' ')
        .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');

    return titleCase;
}