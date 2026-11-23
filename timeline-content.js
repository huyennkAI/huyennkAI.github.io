document.getElementById("timeline-component").innerHTML = `
<section class="timeline-section" aria-label="News and timeline">
  <details class="timeline-details" open>
    <summary>
      <span class="timeline-summary-title">News &amp; timeline</span>
      <span class="timeline-summary-latest"></span>
      <span class="timeline-summary-action">View all</span>
    </summary>

    <div class="timeline-content">
      <div class="timeline-legend" aria-label="Timeline categories">
        <button class="timeline-filter active" type="button" data-category="all">All events</button>
        <button class="timeline-filter" type="button" data-category="career"><i class="legend-symbol career" aria-hidden="true">●</i> Career &amp; education</button>
        <button class="timeline-filter" type="button" data-category="award"><i class="legend-symbol award" aria-hidden="true">★</i> Awards &amp; competitions</button>
        <button class="timeline-filter" type="button" data-category="event"><i class="legend-symbol event" aria-hidden="true">◆</i> Publications</button>
        <button class="timeline-view-toggle" type="button" aria-pressed="false">
          <span class="timeline-view-icon" aria-hidden="true">🌍</span>
          <span class="timeline-view-label">Globe view</span>
        </button>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item event" data-logo="data/logos/Wissen_Publication_Group.png">
          <time datetime="2026-10">Oct. 2026</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <strong>Paper published in Journal of Artificial Intelligence and Data Analytics</strong>
            <p>“A Comparative Analysis of the Asymmetric Impact of Innovation and Economic Growth in Vietnam...” · <a href="https://doi.org/10.67927/JAIDataAnalytics/2026(1)113" target="_blank" rel="noopener">Paper</a></p>
          </div>
        </li>
        <li class="timeline-item career" data-location="Hanoi, Vietnam" data-logo="data/logos/FPT.svg">
          <time datetime="2026-07">Jul. 2026</time>
          <span class="timeline-marker" aria-hidden="true">●</span>
          <div>
            <strong>Joined QACI, FPT as Talent Researcher</strong>
            <p>Quantum AI &amp; Cyber Security Institute · efficient multimodal AI and sensor fusion for wearables, robotics, and human–machine interaction · advised by <a href="https://www.csc.liv.ac.uk/~anguyen/" target="_blank" rel="noopener">Associate Professor Anh Nguyen</a> · Hanoi · <a href="https://fpt.com/en" target="_blank" rel="noopener">FPT</a></p>
          </div>
        </li>
        <li class="timeline-item award" data-location="Ho Chi Minh City, Vietnam" data-logo="data/logos/ICPC.png">
          <time datetime="2025-12">2025</time>
          <span class="timeline-marker" aria-hidden="true">★</span>
          <div>
            <strong>Second Prize, ICPC Asia Ho Chi Minh City Regional</strong>
            <p>Non-IT Division, 2025–2026 season</p>
          </div>
        </li>
        <li class="timeline-item award" data-logo="data/logos/VAIP.png">
          <time datetime="2025-12">2025</time>
          <span class="timeline-marker" aria-hidden="true">★</span>
          <div>
            <strong>Consolation Prize, Vietnam National Collegiate AI Olympiad</strong>
            <p>After Third Prize in the Northern Region round</p>
          </div>
        </li>
        <li class="timeline-item award" data-logo="data/logos/VAIP.png">
          <time datetime="2025-12">2025</time>
          <span class="timeline-marker" aria-hidden="true">★</span>
          <div>
            <strong>Consolation Prize, Vietnam National Collegiate Informatics Olympiad</strong>
            <p>Non-IT track, after two months of learning C++</p>
          </div>
        </li>
        <li class="timeline-item career" data-logo="data/logos/Venera_AI.png">
          <time datetime="2025-11">Nov. 2025</time>
          <span class="timeline-marker" aria-hidden="true">●</span>
          <div>
            <strong>Joined Venera AI as Machine Learning Engineer</strong>
            <p>Parameter-efficient adaptation of LLMs for Vietnamese Traditional Medicine · <a href="https://venerian.space/en" target="_blank" rel="noopener">Venera AI</a></p>
          </div>
        </li>
        <li class="timeline-item career" data-logo="data/logos/FTU.png">
          <time datetime="2025-08-2">Aug. 2025</time>
          <span class="timeline-marker" aria-hidden="true">●</span>
          <div>
            <strong>Research Assistant at FTU Labs</strong>
            <p>with <a href="https://minhtcai.github.io" target="_blank" rel="noopener">MSc. Minh Tran</a> · <a href="https://ftulabs.github.io/" target="_blank" rel="noopener">FTU Labs</a></p>
          </div>
        </li>
        <li class="timeline-item career" data-logo="data/logos/sPhoton.png">
          <time datetime="2025-08">Aug. 2025</time>
          <span class="timeline-marker" aria-hidden="true">●</span>
          <div>
            <strong>AI Engineer at Sphoton Technology</strong>
            <p>Sequential decision-making for portfolio allocation, until Dec. 2025 · <a href="https://sphoton.com/" target="_blank" rel="noopener">Sphoton</a></p>
          </div>
        </li>
        <li class="timeline-item career" data-location="Hanoi, Vietnam" data-logo="data/logos/FTU.png">
          <time datetime="2025-01">Jan. 2025</time>
          <span class="timeline-marker" aria-hidden="true">●</span>
          <div>
            <strong>Research Assistant, Faculty of Technology and Data Science</strong>
            <p>Foreign Trade University · under <a href="https://scholar.google.com/citations?user=knSbt0oAAAAJ&hl=en" target="_blank" rel="noopener">Dr. Phung Duy Quang</a></p>
          </div>
        </li>
        <li class="timeline-item event" data-logo="data/logos/Wiley.png">
          <time datetime="2025">2025</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <strong>Paper published in Journal of Applied Mathematics</strong>
            <p>“Analysis and Forecasting of Bitcoin Price Volatility...” · Wiley · <a href="https://doi.org/10.1155/jama/9089827" target="_blank" rel="noopener">Paper</a></p>
          </div>
        </li>
        <li class="timeline-item event" data-logo="data/logos/NIEP.png">
          <time datetime="2025">2025</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <strong>Paper published in Southeast Asia Development Research</strong>
            <p>“The Role of Trade Openness and Macroeconomic Factors...” · <a href="https://doi.org/10.63385/sadr.v1i1.244" target="_blank" rel="noopener">Paper</a></p>
          </div>
        </li>
        <li class="timeline-item award" data-logo="data/logos/Vietnam_Mathematical_Society.png">
          <time datetime="2025">2024–25</time>
          <span class="timeline-marker" aria-hidden="true">★</span>
          <div>
            <strong>Third Prize (Algebra), National Mathematics Olympiad for University Students</strong>
            <p>Division A</p>
          </div>
        </li>
        <li class="timeline-item award" data-location="Hanoi, Vietnam" data-logo="data/logos/FTU.png">
          <time datetime="2025">2024–26</time>
          <span class="timeline-marker" aria-hidden="true">★</span>
          <div>
            <strong>First Prize (Algebra) &amp; Second Prize (Calculus), University Mathematics Olympiad</strong>
            <p>Foreign Trade University · 2024–25 and 2025–26</p>
          </div>
        </li>
        <li class="timeline-item award" data-logo="data/logos/NEU.png">
          <time datetime="2024">2024–25</time>
          <span class="timeline-marker" aria-hidden="true">★</span>
          <div>
            <strong>Runner-up, Economics Research Champion</strong>
            <p>Organized by NEU Club</p>
          </div>
        </li>
        <li class="timeline-item award" data-location="Hanoi, Vietnam" data-logo="data/logos/FTU.png">
          <time datetime="2023-2">2023–24</time>
          <span class="timeline-marker" aria-hidden="true">★</span>
          <div>
            <strong>Consolation Prize, Student Scientific Research Competition</strong>
            <p>Foreign Trade University · International Business Economics Institute</p>
          </div>
        </li>
        <li class="timeline-item award" data-logo="data/logos/Academy_of_Finance.png">
          <time datetime="2023-1">2023–24</time>
          <span class="timeline-marker" aria-hidden="true">★</span>
          <div>
            <strong>Top 8, Economics Olympiad</strong>
            <p>Organized by Academy of Finance Club</p>
          </div>
        </li>
        <li class="timeline-item award" data-logo="data/logos/Vietnam_Mathematical_Society.png">
          <time datetime="2023">2022–23</time>
          <span class="timeline-marker" aria-hidden="true">★</span>
          <div>
            <strong>Second Prize (Calculus), National Mathematics Olympiad for University Students</strong>
            <p>Division A</p>
          </div>
        </li>
        <li class="timeline-item award" data-location="Hanoi, Vietnam" data-logo="data/logos/FTU.png">
          <time datetime="2022-2">2022–23</time>
          <span class="timeline-marker" aria-hidden="true">★</span>
          <div>
            <strong>First Prize (Calculus) &amp; Third Prize (Algebra), University Mathematics Olympiad</strong>
            <p>Foreign Trade University · also a Certificate of Excellence for national olympiad results</p>
          </div>
        </li>
        <li class="timeline-item career" data-location="Hanoi, Vietnam" data-logo="data/logos/FTU.png">
          <time datetime="2022-1">2022</time>
          <span class="timeline-marker" aria-hidden="true">●</span>
          <div>
            <strong>Started B.A. at Foreign Trade University</strong>
            <p>International Business Economics · Hanoi · <a href="https://english.ftu.edu.vn" target="_blank" rel="noopener">FTU</a></p>
          </div>
        </li>
      </ol>

      <div class="timeline-globe-view" hidden>
        <p class="timeline-globe-intro">A geographic view of my research journey.</p>
        <iframe class="timeline-globe-frame" data-src="research-globe.html?embed=1" title="Interactive research journey globe"></iframe>
      </div>

      <dialog class="timeline-logo-dialog" id="timeline-logo-dialog" aria-labelledby="timeline-logo-title" aria-describedby="timeline-logo-date">
        <div class="timeline-logo-dialog-heading">
          <div>
            <h2 id="timeline-logo-title"></h2>
            <p id="timeline-logo-date"></p>
          </div>
          <button class="timeline-logo-dialog-close" type="button" aria-label="Close logo" autofocus>×</button>
        </div>
        <div class="timeline-logo-dialog-viewer">
          <img class="timeline-logo-dialog-image" alt="">
        </div>
      </dialog>
    </div>
  </details>
</section>
`;
