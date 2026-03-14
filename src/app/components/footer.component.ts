import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Get In Touch</h3>
          <p>Have a security vulnerability? A joke? A job offer? Slide into my DMs.</p>
          <div class="social-links">
            <a href="#" class="social-link">GitHub</a>
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">Email</a>
          </div>
        </div>

        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog (Coming Soon)</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Fun Facts</h3>
          <ul>
            <li>✓ Zero breaches on my watch</li>
            <li>✓ Speaks fluent binary (badly)</li>
            <li>✓ Can explain RSA in 3 sentences</li>
            <li>✓ Coffee enthusiast 🤎</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2024 The Paranoid Pixel Wrangler. Built with Angular 21 and questionable decisions.</p>
        <p class="footer-meta">No hackers were harmed in the making of this portfolio. (They were just very confused.)</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, #0f0f1e 0%, #1a0f2e 100%);
      color: #fff;
      padding: 4rem 2rem 2rem;
      border-top: 1px solid #2a2a4e;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto 3rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .footer-section h3 {
      color: #3a86ff;
      font-size: 1.2rem;
      margin: 0 0 1rem 0;
      font-weight: 600;
    }

    .footer-section p {
      color: #a8a8a8;
      margin: 0 0 1rem 0;
      line-height: 1.6;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-section li {
      margin-bottom: 0.75rem;
    }

    .footer-section a {
      color: #d0d0d0;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-section a:hover {
      color: #3a86ff;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .social-link {
      display: inline-block;
      padding: 0.6rem 1rem;
      background: #2a2a4e;
      border-radius: 4px;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .social-link:hover {
      background: #3a86ff;
      color: #0f0f1e;
      transform: translateY(-2px);
    }

    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid #2a2a4e;
      color: #6a6a8a;
      font-size: 0.9rem;
    }

    .footer-bottom p {
      margin: 0.5rem 0;
    }

    .footer-meta {
      font-style: italic;
      color: #5a5a7a;
    }

    @media (max-width: 768px) {
      .footer {
        padding: 2rem 1rem 1rem;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
  `]
})
export class FooterComponent {}
