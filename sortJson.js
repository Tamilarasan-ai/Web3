const fs = require('fs');
const jsonStringify = require('json-stable-stringify');

const fileName = 'ethereum.json'; // Update with your actual file name

// Read the original JSON file
const originalData = fs.readFileSync(fileName, 'utf-8');

// Parse the JSON data
const jsonData = JSON.parse(originalData);

// Sort the JSON object
const sortedJson = sortJsonObject(jsonData);

// Stringify the sorted JSON with stable stringification
const sortedString = jsonStringify(sortedJson, { space: 2 });

// Write the sorted JSON back to the file
fs.writeFileSync('polygon.json', sortedString);

console.log('Sorting completed. Check polygon.json for the sorted data.');

// Function to recursively sort the properties of a JSON object
function sortJsonObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(sortJsonObject);
  }

  const sortedObj = {};
  Object.keys(obj).sort().forEach(key => {
    sortedObj[key] = sortJsonObject(obj[key]);
  });

  return sortedObj;
}
