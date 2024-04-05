module.exports = {
    '**/*.{js,ts,tsx}': () => 'eslint "**/*.{js,ts,tsx}" --fix --cache',
    '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit --composite false',
}