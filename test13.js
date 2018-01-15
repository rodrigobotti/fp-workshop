module.exports = function repeat (operation, num) {
  if (num <= 0) return
  operation()
  return setTimeout(() => repeat(operation, --num), 0)
}