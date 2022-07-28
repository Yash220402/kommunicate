// 2. Function to get url parameters
function getUrlParameterValue(url, parameter) {
    const urlparams = new URLSearchParams(url);
    return urlparams.get(parameter);
}

// 3. Prints reverse number
function reverseNumber(num) {
    return parseFloat(num.toString().split('').reverse().join(''));
}