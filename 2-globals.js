// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// local
const secret = 'SUPER SECRET INFO';

// share
const john = 'john';
const peter = 'peter';

module.exports = { john, peter };
