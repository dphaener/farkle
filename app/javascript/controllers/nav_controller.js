import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["mobileNav", "hamburger", "x"]

  connect() {
    this.menuOpen = false;
  }

  toggle() {
    if (this.menuOpen) {
      this.xTarget.classList.remove('block');
      this.xTarget.classList.add('hidden');
      this.hamburgerTarget.classList.remove('hidden');
      this.hamburgerTarget.classList.add('block');
      this.mobileNavTarget.classList.remove('block');
      this.mobileNavTarget.classList.add('hidden');
    } else {
      this.xTarget.classList.remove('hidden');
      this.xTarget.classList.add('block');
      this.hamburgerTarget.classList.remove('block');
      this.hamburgerTarget.classList.add('hidden');
      this.mobileNavTarget.classList.remove('hidden');
      this.mobileNavTarget.classList.add('block');
    }

    this.menuOpen = !this.menuOpen;
  }
}
