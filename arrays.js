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
  array.unshift(`${element}`)
    return array
  }
  
    function addElementToEndOfArray(array,element) {
    array = [...array,element]
    return array
  }
  
  function destructivelyAddElementToEndOfArray(array,element) {
    array.push(`${element}`)
    return array
  }
  
  function accessElementInArray(array, index) {
   return  array[index]
  }
  
    function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
    return array
  }
  
    function destructivelyRemoveElementFromEndOfArray(array,element) {
  array.slice(length.array)
    return array
  }
  
     function RemoveElementFromBeginningOfArray(array) {
  array.shift()
    return array
  }
  
    function RemoveElementFromEndOfArray(array,element) {
  array.slice(length.array)
    return array
  }