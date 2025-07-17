import AView from "./AbstractView.js"

import Hero from "./home/hero.js";
import Summary from "./home/summary.js";


export default class extends AView {
    constructor() {
        super();
        this.setTitle("Jejoestar24 | Home");
        this.summary = new Summary();
        this.hero = new Hero();
    }

    async getHtml() {
        return `
            ${await this.hero.getHtml()}
            ${await this.summary.getHtml()}
        `;
    }
}