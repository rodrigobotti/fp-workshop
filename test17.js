module.exports = function curry (fn, n) {
  const arity = n || fn.length
  return (...params) => params.length >= arity
    ? fn(...params)
    : curry((...rest) => fn(...params, ...rest), arity - params.length)
}