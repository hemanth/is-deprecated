module.exports = function(obj, attr) {
  if (arguments.length > 2) {
     var desc = Object.getOwnPropertyDescriptor(obj, attr);
     return desc.value.name === 'deprecated';
  } else {
    return obj.name === 'deprecated';
  }
}