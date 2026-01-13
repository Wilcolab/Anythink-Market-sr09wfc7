function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Convert to lowercase and replace spaces, underscores, and camelCase transitions
    let kebabCaseString = input
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Handle camelCase
        .replace(/[_\s]+/g, '-') // Replace underscores and spaces with hyphen
        .toLowerCase();

    // Remove duplicate hyphens and trim from start and end
    kebabCaseString = kebabCaseString
        .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
        .replace(/^-|-$/g, ''); // Trim hyphens from start and end

    return kebabCaseString;
}