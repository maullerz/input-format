import { count_occurences } from './helpers.js';
export default function closeBraces(retained_template, template) {
  let placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'x';
  let empty_placeholder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ' ';
  let cut_before = retained_template.length;
  const opening_braces = count_occurences('(', retained_template);
  const closing_braces = count_occurences(')', retained_template);
  let dangling_braces = opening_braces - closing_braces;

  while (dangling_braces > 0 && cut_before < template.length) {
    retained_template += template[cut_before].replace(placeholder, empty_placeholder);

    if (template[cut_before] === ')') {
      dangling_braces--;
    }

    cut_before++;
  }

  return retained_template;
}
//# sourceMappingURL=closeBraces.js.map