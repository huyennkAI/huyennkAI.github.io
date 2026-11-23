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

<!-- Innovation and growth in Vietnam, 2026 -->
<tr class="publication-row" data-tags="Econometrics;Development Economics">
  <td class="paper-media-cell">
    <a href="https://doi.org/10.67927/JAIDataAnalytics/2026(1)113">
      <div class="paper-media">
        <img src="images/pub3.png" alt="Akaike Information Criteria across ARDL model specifications">
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>A Comparative Analysis of the Asymmetric Impact of Innovation and Economic Growth in Vietnam: A Linear and Nonlinear ARDL Approach</papertitle>
    <br>
    Phung Duy Quang, <strong>Nguyen Khanh Huyen</strong>, Hoang Nam Quyen, Nguyen Huu Thinh, Pham Thi Phuong Thao, Nguyen Hai Dang, Lưu Thị Vân Anh, Tran Quang Thanh, Nguyen Viet Ha
    <br>
    <em>Journal of Artificial Intelligence and Data Analytics</em>, 2026
    <br>
    <a href="https://wissenpublicationgroup.com/journals/index.php/jaidataanalytics/article/view/107/55">paper</a>
    /
    <a href="https://doi.org/10.67927/JAIDataAnalytics/2026(1)113">doi: 10.67927/JAIDataAnalytics/2026(1)113</a>
    <p></p>
    <p style="margin-bottom: 0;">
      Innovation drives Vietnam's growth asymmetrically: gains in the Global Innovation Index lift GDP, while declines leave it largely unaffected.<br>
      Vol. 1, No. 3 · Wissen Publication Group
    </p>
  </td>
</tr>

<!-- Bitcoin volatility, 2025 -->
<tr class="publication-row" data-tags="Deep Learning;Time Series;Finance">
  <td class="paper-media-cell">
    <a href="https://doi.org/10.1155/jama/9089827">
      <div class="paper-media">
        <img src="images/pub1.png" alt="Predicted vs. true scaled close price for RNN and Transformer models">
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
      A head-to-head benchmark of DNN, LSTM, and Transformer models against classical ARMA‑GARCH for forecasting Bitcoin volatility.<br>
      Vol. 2025, No. 1, ID 9089827 · Wiley · ESCI + Scopus Q3
    </p>
  </td>
</tr>

<!-- FDI inflows to Vietnam, 2025 -->
<tr class="publication-row" data-tags="Econometrics;Development Economics">
  <td class="paper-media-cell">
    <a href="https://doi.org/10.63385/sadr.v1i1.244">
      <div class="paper-media">
        <img src="images/pub2.png" alt="Inverse roots of the AR characteristic polynomial inside the unit circle">
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
      Pinpoints how trade openness and macroeconomic conditions shape foreign direct investment flowing into Vietnam.<br>
      Vol. 1, No. 1, pp. 56–68 · NIEP · ACI-indexed
    </p>
  </td>
</tr>

</tbody>
</table>
</div>

`;
