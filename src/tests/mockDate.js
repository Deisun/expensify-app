const MockDate = require('mockdate');

beforeAll(() => {
    MockDate.set(0);
});

afterAll(() => {
    MockDate.reset();
});