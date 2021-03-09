exports.min =
function min(array) {
    if (!array || array.length === 0) return 0
    let out = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < out) out = array[i]
    }
    return out
}

exports.max =
function max(array) {
    if (!array || array.length === 0) return 0
    let out = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > out) out = array[i]
    }
    return out
}

exports.avg =
function avg(array) {
    if (!array || array.length === 0) return 0
    let out = 0
    for (let i = 0; i < array.length; i++) {
        out += array[i]
    }
    return out / array.length
}
