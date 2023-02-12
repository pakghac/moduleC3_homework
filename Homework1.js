function printObjOwnProperty(obj) {
    for (let objKey in obj) {
        if (obj.hasOwnProperty(objKey)) {
            console.log(objKey, obj[objKey]);
        }
    }
}