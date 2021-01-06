interface searchFunc {
    (source: string, subString: string): boolean
}

let mySearch: searchFunc;

mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

console.log(mySearch("Hello", "ell"))