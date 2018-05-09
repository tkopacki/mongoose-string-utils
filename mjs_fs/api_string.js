function string_ltrim(string) {
    let idx = 0;
    while(string[idx] === ' ') {
        idx++;
    }
    return string.slice(idx, string.length);
}

function string_rtrim(string) {
    let idx = string.length - 1;
    while(string[idx] === ' ') {
        idx--;
    }
    return string.slice(0, idx + 1);
}

function string_trim(string) {
    return string_rtrim(string_ltrim(string));
}

function string_split(string, delimeter, trim) {
    delimeter = (delimeter === undefined ? ' ' : delimeter);
    trim = (trim === undefined ? true : trim);
    string += delimeter;   
    let counter = 0;
    let buffer = "";
    let result = [];
    for(let idx = 0 ; idx < string.length ; idx++) {
        if(string[idx] === delimeter) {
            if(trim === true) {
                buffer = string_trim(buffer);
            }
            if(buffer !== '') {
                result[counter++] = buffer;
            }
            buffer = "";
        } else {
            buffer += string[idx];
        }
    }
    return result;
}
