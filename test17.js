module.exports = function curry (fn, n) {
  const arity = n || fn.length
  return (...params) => params.length >= arity
    ? fn(...params)
    : curry((...rest) => fn.apply(fn, [...params, ...rest]), arity - 1)
}