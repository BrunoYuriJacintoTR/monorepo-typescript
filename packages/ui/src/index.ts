// ./packages/utils/index.ts

export async function DoRequestForTest(): Promise<any> {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
    response.json()
  );
}
