/**
 * Converts a string to camelCase format.
 * 
 * Takes a string with any combination of spaces, hyphens, or underscores
 * as separators and converts it to camelCase where the first word is
 * lowercase and subsequent words have their first letter capitalized.
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The camelCase version of the input string
 * 
 * @example
 * toCamelCase("hello world") // returns "helloWorld"
 * toCamelCase("hello-world-example") // returns "helloWorldExample"
 * toCamelCase("hello_world_example") // returns "helloWorldExample"
 */
function toCamelCase(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w|\s+|-+|_+)/g, (match, index) => {
            if (+match === 0 || match === ' ' || match === '-' || match === '_') return '';
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
}