var recipes = {egg: '2'}

function updateObjectWithKeyAndValue(object, key, value){

  return Object.assign(recipes, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

<<<<<<< HEAD
function deleteFromObjectByKey(object, key, value){
  var clone = {}
  Object.assign(clone, object, {[key]: value})
  delete clone.key
  return clone
}

function destructivelyDeleteFromObjectByKey(object, key, value){
  delete object[key]
  
  return object
  
}
=======
function deleteFromObjectByKey(object, key){
  let clone = {}
  clone[key] = object[key]
  
  delete clone.key
  return clone
  
}
>>>>>>> fd7377bcf8b6c9381f68810ea29a53018c89906f
