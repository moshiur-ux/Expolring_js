function isJavascriptFile(filename) {
    if (typeof filename != "string") {
        return "provide me a valid file name(string)."
    }

    const arr = filename.split(".")
    const lastElement = arr.pop()

    if (lastElement.toLowerCase() == "js") {
        return true

    }

    else {
        return false

    }
}
console.log(isJavascriptFile("hello.js"));

// function isJavascriptFile(filename)
// {
//     if(typeof filename!= "string")
//     {
//         return "provide me a valid file name(string)."
//     }

//    return filename.toLowerCase().endsWith(".js");



    
// }
// console.log(isJavascriptFile("hello.js"));