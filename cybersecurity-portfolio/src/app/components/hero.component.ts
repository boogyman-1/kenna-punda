import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>
            <span class="greeting">Hey there, I'm</span>
            <span class="name">The Paranoid Pixel Wrangler</span>
          </h1>
          <p class="subtitle">
            Cybersecurity Engineer • Humorous Hacker • Coffee Connoisseur
          </p>
          <p class="description">
            I turn digital paranoia into productive security. By day, I audit systems. 
            By night, I question every notification. This is my sanctuary of security and sarcasm.
          </p>
          
          <div class="cta-buttons">
            <a href="#portfolio" class="btn btn-primary">View Portfolio</a>
            <a href="#contact" class="btn btn-secondary">Get In Touch</a>
          </div>

          <div class="stats-inline">
            <div class="stat-item">
              <span class="stat-value">10+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">500+</span>
              <span class="stat-label">Vulnerabilities Found</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">∞</span>
              <span class="stat-label">Coffee Cups</span>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="floating-card card-1">
            <div class="code-snippet">
              <div class="line"><span class="keyword">const</span> security = <span class="string">'my passion'</span></div>
            </div>
          </div>
          <div class="floating-card card-2">
            <div class="terminal">
              <div class="terminal-header">Terminal</div>
              <div class="terminal-body">
                <div>$ whoami</div>
                <div class="green">cybersecurity-engineer</div>
              </div>
            </div>
          </div>
          <div class="floating-card card-3">
            <div class="lock-icon">🔐</div>
            <div>Secure by Default</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0f0f1e 0%, #1a0f2e 50%, #0f0f1e 100%);
      position: relative;
      overflow: hidden;
      padding: 2rem;
    }

    .hero::before {
      content: '';
      position: absolute;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(58, 134, 255, 0.1) 0%, transparent 70%);
      border-radius: 50%;
      top: 20%;
      left: 5%;
      animation: float 20s ease-in-out infinite;
    }

    .hero::after {
      content: '';
      position: absolute;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(131, 56, 236, 0.1) 0%, transparent 70%);
      border-radius: 50%;
      bottom: 10%;
      right: 5%;
      animation: float 25s ease-in-out infinite reverse;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(30px); }
    }

    .hero-content {
      max-width: 1200px;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .hero-text h1 {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 1rem 0;
      color: #fff;
    }

    .greeting {
      display: block;
      font-size: 1.2rem;
      color: #3a86ff;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    .name {
      background: linear-gradient(135deg, #ff006e, #8338ec, #3a86ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      display: block;
    }

    .subtitle {
      font-size: 1.3rem;
      color: #a8a8a8;
      margin: 1rem 0;
      font-weight: 500;
    }

    .description {
      font-size: 1rem;
      color: #d0d0d0;
      line-height: 1.8;
      margin-bottom: 2rem;
      max-width: 500px;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .btn {
      padding: 1rem 2rem;
      border-radius: 6px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 1rem;
      cursor: pointer;
      border: none;
      display: inline-block;
    }

    .btn-primary {
      background: linear-gradient(135deg, #3a86ff, #8338ec);
      color: white;
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(58, 134, 255, 0.3);
    }

    .btn-secondary {
      border: 2px solid #3a86ff;
      color: #3a86ff;
      background: transparent;
    }

    .btn-secondary:hover {
      background: #3a86ff;
      color: #0f0f1e;
      transform: translateY(-3px);
    }

    .stats-inline {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }

    .stat-value {
      color: #3a86ff;
      font-size: 1.8rem;
      font-weight: 700;
      font-family: "Courier New", monospace;
    }

    .stat-label {
      color: #a8a8a8;
      font-size: 0.85rem;
      font-weight: 500;
    }

    .hero-visual {
      position: relative;
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .floating-card {
      position: absolute;
      background: rgba(26, 26, 46, 0.8);
      border: 1px solid #3a86ff;
      border-radius: 12px;
      padding: 1.5rem;
      backdrop-filter: blur(10px);
      animation: floating 6s ease-in-out infinite;
    }

    .floating-card.card-1 {
      top: 0;
      left: 0;
      animation: floating 6s ease-in-out infinite;
    }

    .floating-card.card-2 {
      top: 50%;
      right: 0;
      animation: floating 7s ease-in-out infinite reverse;
    }

    .floating-card.card-3 {
      bottom: 0;
      left: 50%;
      animation: floating 8s ease-in-out infinite;
    }

    @keyframes floating {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(2deg); }
    }

    .code-snippet {
      font-family: "Courier New", monospace;
      font-size: 0.85rem;
      background: #0f0f1e;
      padding: 1rem;
      border-radius: 4px;
      color: #d0d0d0;
      min-width: 250px;
    }

    .line {
      color: #d0d0d0;
    }

    .keyword {
      color: #8338ec;
      font-weight: 600;
    }

    .string {
      color: #3a86ff;
    }

    .terminal {
      min-width: 220px;
      background: #0f0f1e;
      border-radius: 4px;
      overflow: hidden;
    }

    .terminal-header {
      background: #2a2a4e;
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      color: #a8a8a8;
      border-bottom: 1px solid #3a86ff;
    }

    .terminal-body {
      padding: 1rem;
      font-family: "Courier New", monospace;
      font-size: 0.85rem;
      color: #3a86ff;
    }

    .terminal-body div {
      line-height: 1.6;
    }

    .green {
      color: #00ff00;
    }

    .lock-icon {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    .hero-visual > .floating-card:last-child {
      text-align: center;
      color: #3a86ff;
      font-weight: 600;
    }

    @media (max-width: 1024px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .hero-visual {
        height: 300px;
      }
    }

    @media (max-width: 768px) {
      .hero {
        min-height: auto;
        padding: 4rem 1rem 2rem;
      }

      .hero-text h1 {
        font-size: 2.2rem;
      }

      .subtitle {
        font-size: 1.1rem;
      }

      .cta-buttons {
        flex-direction: column;
      }

      .btn {
        text-align: center;
      }

      .stats-inline {
        gap: 1rem;
      }

      .hero-visual {
        display: none;
      }
    }
  `]
})
export class HeroComponent {}
