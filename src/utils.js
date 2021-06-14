import { writable } from 'svelte/store';
import { scrollTo } from 'svelte-scrollto';

export function range(min, max, attach) {
  // get a range of numbers from (and including) min to (and including) max
  // if the :attach: parameter is specified:
  // - it's added to the end of every element
  // - if it's a string then the output becomes an array of strings
  let output = Array.from({ length: max + 1 }, (_, i) => i + min);
  if (attach) {
    output.forEach((elem, i) => {
      output[i] = elem + attach;
    });
  }
  return output;
}

export function scrollto(id) {
  scrollTo({ element: id, duration: 400 });
}

export const scrollY = writable(0);