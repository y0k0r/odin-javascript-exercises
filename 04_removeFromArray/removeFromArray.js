const removeFromArray = function(items, ...itemsToRemove) {
  
  for (const itemToRemove of itemsToRemove){
    let index;
    for (const item of items) {
      if (itemToRemove === item) {
        while (index !== -1){
          index = items.indexOf(itemToRemove);
          if (index !== -1){
            items.splice(index, 1);
        }
        }
      }
    }
  }
  return items;
}

// Do not edit below this line
module.exports = removeFromArray;
