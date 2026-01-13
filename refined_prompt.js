/**
 * Converts a given string to camel case format.
 *
 * The function takes an input string, splits it by spaces, hyphens, or underscores,
 * converts all words to lowercase, and then joins them in camel case format.
 * The first word is in lowercase, and each subsequent word starts with an uppercase letter.
 *
 * @param {string} input - The string to be converted to camel case.
 * @throws {Error} Throws an error if the input is not a string.
 * @returns {string} The camel case formatted string. Returns an empty string if the input is empty or only contains whitespace.
 *
 * @example
 * // returns 'helloWorld'
 * toCamelCase('hello-world');
 *
 * @example
 * // returns 'getUserData'
 * toCamelCase('GET_USER_DATA');
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    
    if (input.trim() === '') {
        return '';
    }

    return input
        .split(/[\s-_]+/) // Split by spaces, hyphens, or underscores
        .map(word => word.toLowerCase()) // Convert all words to lowercase
        .join('.') // Join words with a dot
        .split('.') // Split by dots
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase(); // First word in lowercase
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize first letter of subsequent words
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase('hello-world')); // helloWorld
// console.log(toCamelCase('GET_USER_DATA')); // getUserData