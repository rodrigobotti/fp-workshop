function repeat(operation, num) {
  if (num <= 0) return
  operation()
  return () => {
    repeat(operation, num - 1)
  }
}

function trampoline(fn) {
  return (...params) => {
    let next = fn(...params)
    while (next) {
      next = next()
    }
  }
}

module.exports = (operation, num) => {
  return trampoline(repeat)(operation, num)
}