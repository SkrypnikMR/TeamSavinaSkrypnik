module.exports = {
    collectCoverage: true,
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
    ],
    globals: {
        window: true,
    },
    collectCoverageFrom: ['**/*.jsx', '**/*.js', '**/*.tsx', '**/*.ts'],
    moduleDirectories: ['node_modules', '.', 'src'],
    testMatch: [
        '**/*.(test|spec).(js)',
        '**/*.(test|spec).(jsx)',
        '**/*.(test|spec).(ts)',
        '**/*.(test|spec).(tsx)',
    ],
    coverageReporters: [
        'json',
        'lcov',
    ],
    setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js'],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/public/',
        '/dist/',
        'jest.config.js',
        'package.json',
        'webpack.config.js',
        '/coverage/',
        'index.tsx',
    ],
    moduleNameMapper: {
        '^.+\\.(css|scss)$': 'identity-obj-proxy',
        '^/src/(.*)$': '<rootDir>src/$1',
    },
    testEnvironment: 'jsdom',
};
