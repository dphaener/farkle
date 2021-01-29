import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["hamburger", "x", "leftMenu", "rightMenu"]

  connect() {
    this.menuOpen = false;
  }

  toggle() {
    if (this.menuOpen) {
      this.xTarget.classList.remove('block');
      this.xTarget.classList.add('hidden');
      this.hamburgerTarget.classList.remove('hidden');
      this.hamburgerTarget.classList.add('block');
      this.leftMenuTarget.classList.remove('block');
      this.leftMenuTarget.classList.add('hidden');
      this.rightMenuTarget.classList.remove('block');
      this.rightMenuTarget.classList.add('hidden');
    } else {
      this.xTarget.classList.remove('hidden');
      this.xTarget.classList.add('block');
      this.hamburgerTarget.classList.remove('block');
      this.hamburgerTarget.classList.add('hidden');
      this.leftMenuTarget.classList.remove('hidden');
      this.leftMenuTarget.classList.add('block');
      this.rightMenuTarget.classList.remove('hidden');
      this.rightMenuTarget.classList.add('block');
    }

    this.menuOpen = !this.menuOpen;
  }
}
