var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'];
  
  function addElementToBeginningOfArray(array,element) {
    array = [element,...array]
    return array
  }
  
  function destructivelyAddElementToBeginningOfArray(array,element) {
  newarray = array.unshift(element)
  array = newarray
    return array
  }
  
    function addElementToEndOfArray(array,element) {
    array = [...array,element]
    return array
  }
  
  function destructivelyAddElementToEndOfArray(array,element) {
    array = array.push(element)
    return array
  }