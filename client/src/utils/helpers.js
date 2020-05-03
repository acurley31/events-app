// Check if an object is empty
export const isEmpty = (obj) => (
    Object.keys(obj).length === 0 ? true : false
)

// Check if any objects are empty
export const anyEmpty = (array) => {
    for(var i in array) {
        if(isEmpty(array[i])) {
            return true
        }
    }
    return false
}

// Map an array to an object (immutable)
export const mapArrayToObject = (array) => {
    return array.reduce((obj, item) => {
        obj[item.id] = item
        return obj
    }, {})
}


// Map an object to an array (immutable)
export const mapObjectToArray = (obj) => {
    return Object.keys(obj).map(key => obj[key])
}


// Remove a key from an object (immutable)
export const removeKeyFromObject = (inputObj, removeKey) => {
    return Object.keys(inputObj).reduce((obj, key) => {
        if (key !== removeKey.toString()) {
            obj[key] = inputObj[key]
        }
        return obj
    }, {})
}
