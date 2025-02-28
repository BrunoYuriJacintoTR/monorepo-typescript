"use strict";
// ./packages/utils/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoRequestForTest = DoRequestForTest;
async function DoRequestForTest() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json());
}
