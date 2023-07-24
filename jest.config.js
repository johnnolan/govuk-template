const config = {
    testEnvironment: 'jsdom',
    reporters: ['default', 'jest-junit'],
    resetMocks: true,
    transform: {
        '\\.js?$': 'babel-jest',
    },
    testMatch: ['**/?(*.)+(test).js'],
    collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**', '!**/vendor/**'],
};

export default config;
