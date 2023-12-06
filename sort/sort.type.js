const check = (arg) => {
  if (!Array.isArray(arg)) {
    throw new TypeError(`Argument ${arg} is not an array`)
  }
}

module.exports = {
  check
}
