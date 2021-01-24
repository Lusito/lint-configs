module.exports = {
    printWidth: 120,
    tabWidth: 4,
    arrowParens: "always",
    endOfLine: "auto",
    overrides: [
        {
            files: ["*.json", ".*rc"],
            options: {
                tabWidth: 2
            }
        }
    ]
};
