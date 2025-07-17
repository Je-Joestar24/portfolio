/**
 * Acknowledge class generates the HTML structure for the acknowledgments section in the footer.
 * It includes a message indicating that ArcVoyage is a fan-made project and is not affiliated with or
 * endorsed by Eiichiro Oda or Toei Animation. One Piece and its
 * characters are the property of their respective owners.
 */
export default class Decoration {
    /**
     * Asynchronously generates the HTML structure for the acknowledgments section in the footer.
     * @returns {Promise<string>} A promise that resolves to the HTML string of the acknowledgments section.
     */
    async getHtml(){
        return `
        <!-- Decorative SVGs -->
      <div class="footer__decorative" aria-hidden="true">
        <svg width="100" height="24" viewBox="0 0 100 24" fill="none"><circle cx="12" cy="12" r="12" fill="#b388ff" fill-opacity="0.12"><animate attributeName="r" values="12;16;12" dur="2.5s" repeatCount="indefinite"/></circle><rect x="40" y="8" width="12" height="8" rx="2" fill="#b388ff" fill-opacity="0.09"><animate attributeName="y" values="8;4;8" dur="2.5s" repeatCount="indefinite"/></rect><polygon points="80,12 88,20 96,12 88,4" fill="#b388ff" fill-opacity="0.13"><animate attributeName="points" values="80,12 88,20 96,12 88,4;80,8 88,24 96,8 88,0;80,12 88,20 96,12 88,4" dur="2.5s" repeatCount="indefinite"/></polygon></svg>
      </div>
        `;
    }
}