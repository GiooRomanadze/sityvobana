import { LitElement, html, css } from "lit";
import "./components/app-header";
import "./components/app-footer";
import "./components/app-socials";
import { apiGet } from "./core/api";

export const products = await apiGet("products");

export class AppMain extends LitElement {
  static get is() {
    return "app-main";
  }

  static get styles() {
    return css`
      :host {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      *::slotted {
        margin-bottom: 200px;
      }
    `;
  }

  render() {
    return [this.headerPart, this.contentPart, this.footerPart, this.socialsPart];
  }

  get headerPart() {
    return html`<app-header></app-header>`;
  }

  get contentPart() {
    return html` <slot></slot> `;
  }

  get footerPart() {
    return html`<app-footer id="footer"></app-footer>`;
  }

  get socialsPart() {
    return html`<app-socials></app-socials>`;
  }

  static get properties() {
    return {
      location: { type: Object },
    };
  }
}

customElements.define(AppMain.is, AppMain);
