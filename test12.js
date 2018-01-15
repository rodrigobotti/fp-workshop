module.exports = (target, method) => {
  const spy = { count: 0 }
  
  const original = target[method].bind(target)
  
  target[method] = () => {
    spy.count += 1
    return original(arguments)
  }
  
  return spy
}