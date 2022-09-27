function extract(content) {

    let text = document.getElementById('content').textContent;

    let result = [];
    let pattern = /\(([^)]+)\)/gm;
    let match = pattern.exec(text);

    while (match) {
        result.push(match[1]);
        match = pattern.exec(text);
    }
    debugger
    return result.join(';');
}