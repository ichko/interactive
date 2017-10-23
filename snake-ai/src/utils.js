export function range(size = 0) {
  return Array.from(Array(size).keys());
}

export function argMin(elements, handler = x => x) {
  const mappedElements = elements.map(handler);
  let minId = -1;

  mappedElements.forEach((element, id) =>
    minId = mappedElements[minId] < element ?
    minId : id
  );

  return minId;
}
