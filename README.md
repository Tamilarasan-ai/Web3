# JSON Sorting Utility

## Overview

The JSON Sorting Utility is a simple Node.js script designed to sort the properties of a JSON file while maintaining the original file structure. It reads a JSON file, sorts its properties alphabetically, and writes the sorted data to a new file named `polygon.json`.

## How It Works

1. **Read JSON File**: The script reads the original JSON file (`ethereum.json` by default) to obtain the data.

2. **Sort JSON Properties**: It recursively sorts the properties of the JSON object alphabetically, ensuring that the file structure remains unchanged.

3. **Write Sorted JSON**: The sorted JSON data is then stringified using stable stringification and written to a new file named `polygon.json`.

## Usage

To use the JSON Sorting Utility, follow these simple steps:

1. Clone or download the repository.
2. Install dependencies: `npm install`
3. Run the script: `node sortJson.js`
4. Check the newly created `polygon.json` file for the sorted data.

## File Structure

- **sortJson.js**: The main script file containing the sorting logic.
- **ethereum.json**: The original JSON file (replace with your actual file name).
- **polygon.json**: The newly generated file with sorted JSON data.

## Dependencies

- [json-stable-stringify](https://www.npmjs.com/package/json-stable-stringify): A library used for stable stringification, preserving the original order of JSON properties.

## Contributing

Contributions are welcome! Feel free to report issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or feedback, please contact:

- Email: [tamilarasan.pandiyan.k@gmail.com](mailto:tamilarasan.pandiyan.k@gmail.com)
- Portfolio: [tamilarsan-portfolio.vercel.app/](https://tamilarsan-portfolio.vercel.app/)
- LinkedIn: [Tamilarasan P](https://www.linkedin.com/in/tamilarasan-p-6069a8228/)
# Web3
