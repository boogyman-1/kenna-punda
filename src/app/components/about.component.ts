import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="about-section">
      <div class="about-container">
        <div class="about-content">
          <div class="section-label">/ Who Am I?</div>
          <h2>The Paranoid Pixel Wrangler</h2>
          
          <div class="bio-text">
            <p>
              By day, I'm a cybersecurity engineer who takes password hashing seriously.
              By night, I'm the same person but with more coffee and fewer delusions of competence.
            </p>

            <h3>My Development Stack:</h3>
            <ul class="tech-stack">
              <li>🛡️ <strong>Firewalls:</strong> I know enough to be dangerous</li>
              <li>🔑 <strong>Encryption:</strong> RSA, AES, and the occasional RSA sticker</li>
              <li>🐛 <strong>Bug Bounties:</strong> Finding vulnerabilities in other people's code (ethical edition)</li>
              <li>☕ <strong>Coffee Consumption:</strong> O(n) complexity, where n = number of critical issues</li>
              <li>🎭 <strong>Imposter Phenomenon:</strong> My truest core competency</li>
            </ul>
          </div>

          <div class="stats">
            <div class="stat">
              <div class="stat-number">∞</div>
              <div class="stat-label">Lines of Code Read</div>
            </div>
            <div class="stat">
              <div class="stat-number">0</div>
              <div class="stat-label">Breaches on My Watch</div>
            </div>
            <div class="stat">
              <div class="stat-number">847</div>
              <div class="stat-label">Passwords Forgotten</div>
            </div>
            <div class="stat">
              <div class="stat-number">∞</div>
              <div class="stat-label">Anxiety Levels</div>
            </div>
          </div>

          <div class="quote">
            <p>
              "Have you tried turning it off and on again? But make sure you're not plugged into 
              a life support system. Or do it anyway; job security."
            </p>
            <p class="quote-author">— Me, at 3 AM debugging production</p>
          </div>
        </div>

        <div class="about-aside">
          <div class="skill-matrix">
            <h3>Competency Matrix</h3>
            <div class="skill">
              <label>Cybersecurity Knowledge</label>
              <div class="skill-bar">
                <div class="skill-fill" style="width: 78%"></div>
              </div>
              <span class="skill-value">78%</span>
            </div>
            <div class="skill">
              <label>Pretending I Know What I'm Doing</label>
              <div class="skill-bar">
                <div class="skill-fill" style="width: 99%"></div>
              </div>
              <span class="skill-value">99%</span>
            </div>
            <div class="skill">
              <label>Debugging at 4 AM</label>
              <div class="skill-bar">
                <div class="skill-fill" style="width: 95%"></div>
              </div>
              <span class="skill-value">95%</span>
            </div>
            <div class="skill">
              <label>Explaining Security to Non-Technical People</label>
              <div class="skill-bar">
                <div class="skill-fill" style="width: 35%"></div>
              </div>
              <span class="skill-value">35%</span>
            </div>
            <div class="skill">
              <label>Work-Life Balance</label>
              <div class="skill-bar">
                <div class="skill-fill" style="width: 5%"></div>
              </div>
              <span class="skill-value">5%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #1a0f2e 0%, #0f0f1e 100%);
      color: #fff;
    }

    .about-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 300px;
      gap: 3rem;
      align-items: start;
    }

    .section-label {
      color: #3a86ff;
      font-family: "Courier New", monospace;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .about-content h2 {
      font-size: 2.5rem;
      margin: 0 0 1.5rem 0;
      background: linear-gradient(135deg, #8338ec, #ff006e, #3a86ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
    }

    .bio-text p {
      color: #d0d0d0;
      font-size: 1rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }

    .bio-text h3 {
      color: #3a86ff;
      font-size: 1.2rem;
      margin: 1.5rem 0 1rem 0;
      font-weight: 600;
    }

    .tech-stack {
      list-style: none;
      padding: 0;
      margin: 0 0 2rem 0;
    }

    .tech-stack li {
      padding: 0.75rem 0;
      color: #d0d0d0;
      border-bottom: 1px solid #2a2a4e;
    }

    .tech-stack li:last-child {
      border-bottom: none;
    }

    .tech-stack strong {
      color: #3a86ff;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      margin: 2rem 0;
      padding: 2rem;
      background: rgba(58, 134, 255, 0.05);
      border: 1px solid #3a86ff;
      border-radius: 8px;
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 700;
      color: #3a86ff;
      margin-bottom: 0.5rem;
      font-family: "Courier New", monospace;
    }

    .stat-label {
      color: #a8a8a8;
      font-size: 0.9rem;
    }

    .quote {
      background: linear-gradient(135deg, rgba(131, 56, 236, 0.1), rgba(255, 0, 110, 0.1));
      border-left: 4px solid #8338ec;
      padding: 1.5rem;
      border-radius: 4px;
      margin-top: 2rem;
    }

    .quote p {
      color: #d0d0d0;
      font-style: italic;
      margin: 0 0 0.5rem 0;
      line-height: 1.6;
    }

    .quote-author {
      color: #3a86ff;
      font-size: 0.9rem;
      font-weight: 600;
    }

    .about-aside {
      background: #1a1a2e;
      padding: 2rem;
      border-radius: 8px;
      border: 1px solid #2a2a4e;
      height: fit-content;
    }

    .skill-matrix h3 {
      margin: 0 0 1.5rem 0;
      background: linear-gradient(135deg, #3a86ff, #8338ec);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 600;
    }

    .skill {
      margin-bottom: 1.5rem;
    }

    .skill label {
      display: block;
      color: #a8a8a8;
      font-size: 0.85rem;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    .skill-bar {
      background: #0f0f1e;
      height: 8px;
      border-radius: 4px;
      overflow: hidden;
      border: 1px solid #2a2a4e;
      margin-bottom: 0.25rem;
    }

    .skill-fill {
      height: 100%;
      background: linear-gradient(90deg, #3a86ff, #8338ec);
      transition: width 0.6s ease;
    }

    .skill-value {
      font-size: 0.75rem;
      color: #3a86ff;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .about-container {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .about-content h2 {
        font-size: 1.8rem;
      }

      .stats {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class AboutComponent {}
