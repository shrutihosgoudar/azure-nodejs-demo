'use strict'

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

'use strict';

module.exports = {
  testEnvironment: 'node',

  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'test-results',
        outputName: 'junit.xml'
      }
    ]
  ],

  clearMocks: true,
  collectCoverage: true,

  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: [
    '/node_modules/',
    'jest.config.js'
  ],

  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
    'cobertura'
  ],

  moduleFileExtensions: ['js'],

  testPathIgnorePatterns: [
    '/node_modules/',
    '/docs/'
  ]
};
