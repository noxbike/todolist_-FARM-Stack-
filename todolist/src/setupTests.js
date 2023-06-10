// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import {datatodo, todo} from './components/data/datatest.js'

test('should not be empty', () => {
    expect(todo.length).toBe(6)
})

test('should be greater than zero', () => {
    expect(datatodo(60).length).toBeGreaterThan(50)
})