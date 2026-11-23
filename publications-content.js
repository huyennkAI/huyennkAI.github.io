document.getElementById("publications-component").innerHTML = `
<div class="publications-section">
  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
    <tbody>
      <tr>
        <td colspan="2" style="padding:2px 20px 20px 20px; vertical-align:middle;">
	<div class="publication-filter-block">
	  <div class="publication-filter-controls">
	    <div class="publication-filter-title">Filters</div>
	    <details class="filter-menu" data-filter-menu="year">
	      <summary><span class="filter-name">Year</span><span class="filter-value">All</span></summary>
	      <div class="filter-popover filter-options" id="year-options"></div>
	    </details>
	    <details class="filter-menu" data-filter-menu="topic">
	      <summary><span class="filter-name">Topic</span><span class="filter-value">All</span></summary>
	      <div class="filter-popover filter-options topic-options" id="topic-options"></div>
	    </details>
	    <details class="filter-menu" data-filter-menu="venue">
	      <summary><span class="filter-name">Venue</span><span class="filter-value">All</span></summary>
	      <div class="filter-popover filter-options venue-options" id="venue-options"></div>
	    </details>
	    <button class="filter-reset" type="button" disabled aria-label="Clear all publication filters">Clear filters</button>
	  </div>
	</div>
       </td>
     </tr>

<!-- Bitcoin volatility, 2025 -->
<tr class="publication-row" data-tags="Deep Learning;Time Series;Finance">
  <td class="paper-media-cell">
    <a href="https://doi.org/10.1155/jama/9089827">
      <div class="paper-media">
        <img src="images/2025_BitcoinVolatility_teaser.svg" alt="Bitcoin volatility forecasting teaser">
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>Analysis and Forecasting of Bitcoin Price Volatility: A Deep Learning Approach Using DNN, LSTM, Transformers, and the ARMA‑GARCH Model</papertitle>
    <br>
    Phung Duy Quang, <strong>Nguyen Khanh Huyen</strong>, Hoang Nam Quyen
    <br>
    <em>Journal of Applied Mathematics</em>, 2025
    <br>
    <a href="https://doi.org/10.1155/jama/9089827">paper</a>
    /
    <a href="https://doi.org/10.1155/jama/9089827">doi: 10.1155/jama/9089827</a>
    <p></p>
    <p style="margin-bottom: 0;">
      We compare deep learning models (DNN, LSTM, Transformers) with the classical ARMA‑GARCH model for analyzing and forecasting Bitcoin price volatility. Wiley · ESCI + Scopus Q3.
    </p>
  </td>
</tr>

<!-- FDI inflows to Vietnam, 2025 -->
<tr class="publication-row" data-tags="Econometrics;Development Economics">
  <td class="paper-media-cell">
    <a href="https://doi.org/10.63385/sadr.v1i1.244">
      <div class="paper-media">
        <img src="images/2025_FDIVietnam_teaser.svg" alt="FDI inflows to Vietnam teaser">
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>The Role of Trade Openness and Macroeconomic Factors in Shaping FDI Inflows to Vietnam</papertitle>
    <br>
    Phung Duy Quang, <strong>Nguyen Khanh Huyen</strong>, Pham Thi My Linh, Nguyen Nhat Minh
    <br>
    <em>Southeast Asia Development Research</em>, 2025
    <br>
    <a href="https://doi.org/10.63385/sadr.v1i1.244">paper</a>
    /
    <a href="https://doi.org/10.63385/sadr.v1i1.244">doi: 10.63385/sadr.v1i1.244</a>
    <p></p>
    <p style="margin-bottom: 0;">
      We study how trade openness and macroeconomic factors shape foreign direct investment inflows to Vietnam. Vol. 1, No. 1, pp. 56–68 · NIEP · ACI-indexed.
    </p>
  </td>
</tr>

</tbody>
</table>
</div>

`;
