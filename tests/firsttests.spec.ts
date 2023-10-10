import { test, expect } from '@playwright/test';
import fibonacci from '../helpers/fibonacci';

test('Fibonacci function', async () => {
    const result = fibonacci(10);
    expect(result).toBe(55);
});

