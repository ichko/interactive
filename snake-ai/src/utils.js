import { polar } from 'vector';

export function range(size = 0) {
  return Array.from(Array(size).keys());
}

export function random(max, min) {
  return Math.random() * (max - min) + min;
}

export function randomPosition(size) {
  return polar(random(0, Math.PI * 2), random(0, size));
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
