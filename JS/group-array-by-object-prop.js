// Group Array of Objects by Property
// Write a function that groups an array of objects by a specified property.
// groupBy([{type: 'fruit', name: 'apple'}, {type: 'fruit', name: 'banana'}, {type: 'vegetable', name: 'carrot'}], 'type');
// // { fruit: [{type: 'fruit', name: 'apple'}, {type: 'fruit', name: 'banana'}], vegetable: [{type: 'vegetable', name: 'carrot'}] }

function groupBy(arr, property) {
  return arr.reduce((filtered, item) => {
    if (!filtered[item[property]]) {
      filtered[item[property]] = new Array();
    }
    filtered[item[property]].push(item);
    return filtered;
  }, {});
}

console.log(
  groupBy(
    [
      { type: "fruit", name: "apple" },
      { type: "fruit", name: "banana" },
      { type: "vegetable", name: "carrot" },
    ],
    "type"
  )
);
