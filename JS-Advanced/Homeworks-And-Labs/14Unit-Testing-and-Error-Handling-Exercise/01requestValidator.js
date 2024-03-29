function requestValidator(obj) {

    let validMethod = ["GET", "POST", "DELETE", "CONNECT"];
    let uriPattern = /^[\w.]+$/g;
    let supportedVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let specialChr = [`<`, `>`, `\\`, `&`, `'`, `"`];

    if (!validMethod.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    if (!obj.hasOwnProperty("uri")) { // uri cannot be empty
        throw new Error("Invalid request header: Invalid URI");
    }

    if (obj.uri !== "*" && !obj.uri.match(uriPattern)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if (!supportedVersion.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (!obj.hasOwnProperty("message")) {
        throw new Error("Invalid request header: Invalid Message");
    }

    for (let ch of obj.message) {
        if (specialChr.includes(ch)) {
            throw new Error("Invalid request header: Invalid Message");
        }
    }
    return obj;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

console.log("---------------");

console.log(requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));

console.log("---------------");

console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));