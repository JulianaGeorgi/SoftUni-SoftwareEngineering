export function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}. ${day}, ${year}`;
}

export function sliceText(string) {

    if (string.length > 50) {
        const slicedText = string.slice(0, 200);
        return sliceText;
    }

}