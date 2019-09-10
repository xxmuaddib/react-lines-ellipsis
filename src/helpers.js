function omit (obj, omittedKeys) {
  if (!obj || typeof obj !== 'object') {
    return obj
  }
  const ret = {}
  Object.keys(obj).forEach(key => {
    if (omittedKeys.indexOf(key) > -1) {
      return
    }
    ret[key] = obj[key]
  })
  return ret
}

function string_as_unicode_escape(input) {
  function pad_four(input) {
      const l = input.length
      if (l === 0) return '0000'
      if (l === 1) return '000' + input
      if (l === 2) return '00' + input
      if (l === 3) return '0' + input
      return input
  }
  
  const output = '\\u' + pad_four(input.charCodeAt(0).toString(16))
  return output
}

module.exports = {
  omit,
  string_as_unicode_escape
}
