export const print = (value: any) => {
  const node = document.getElementById('console-output');
  if (node) {
    node.innerText = JSON.stringify(value, null, 2);
  }
};
