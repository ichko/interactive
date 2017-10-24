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

export const math = {
  intersect: {
    lineCircle: ({ start, end }, { radius, position }) => {
      const { x: dx, y: dy } = vec = ray.position.subtract(end);
      const dr = vec.length;
      const det = position.x * end.y - end.x * position.y;
      const disc = radius * radius * dr * dr - det * det;
      const discRoot = Math.sqrt(disc);

      const x1 = (det * dy + Math.sign(dy) * dx * discRoot) / (dr * dr);
      const x2 = (det * dy - Math.sign(dy) * dx * discRoot) / (dr * dr);

      const y1 = (-det * dx + Math.abs(dy) * discRoot) / (dr * dr);
      const y2 = (-det * dx - Math.abs(dy) * discRoot) / (dr * dr);

      const p1 = vec(x1, y1);
      const p2 = vec(x2, y2);
      const minLenId = argMin([p1, p2], vector => vector.length);
      const minLenP = [p1, p2][minLenId];

      return {
        valid: disc >= 0,
        distance: minLenP.length,
        intersection: minLenP,
        element
      };
    }
  }
};