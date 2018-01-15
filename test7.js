const reduce = (arr, fn, initial) => arr.length <= 0 ? initial : reduce(arr.slice(1), fn, fn(initial, arr[0]))

module.exports = reduce