import { Controller } from "stimulus"

export default class extends Controller {
  sort() {
    setTimeout(() => {
      const elements = Array.from(this.element.children);

      elements.sort((a, b) => {
        const val1 = a.getAttribute('data-value');
        const val2 = b.getAttribute('data-value');

        return parseInt(val2) - parseInt(val1);
      });

      elements.forEach(element => this.element.appendChild(element));
    }, 200);
  }
}
