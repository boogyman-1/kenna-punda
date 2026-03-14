import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="header">
      <nav class="navbar">
        <div class="nav-container">
          <div class="logo">
            <span class="logo-icon">🔐</span>
            <span class="logo-text">CyberSecPortfolio</span>
          </div>

          <button 
            class="nav-toggle"
            [class.active]="mobileMenuOpen()"
            (click)="toggleMenu()"
            aria-label="Toggle navigation menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul class="nav-menu" [class.active]="mobileMenuOpen()">
            <li><a href="#home" (click)="closeMenu()">Home</a></li>
            <li><a href="#about" (click)="closeMenu()">About</a></li>
            <li><a href="#portfolio" (click)="closeMenu()">Portfolio</a></li>
            <li><a href="#projects" (click)="closeMenu()">Projects</a></li>
            <li><a href="#contact" class="cta-link" (click)="closeMenu()">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: linear-gradient(135deg, #0f0f1e 0%, #1a0f2e 50%, #0f0f1e 100%);
      border-bottom: 1px solid #2a2a4e;
      position: sticky;
      top: 0;
      z-index: 1000;
      backdrop-filter: blur(10px);
    }

    .navbar {
      padding: 1rem 0;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1.4rem;
      font-weight: 700;
      color: #fff;
      text-decoration: none;
      background: linear-gradient(135deg, #3a86ff, #8338ec, #ff006e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .logo-icon {
      font-size: 1.6rem;
    }

    .nav-toggle {
      display: none;
      flex-direction: column;
      background: transparent;
      border: none;
      cursor: pointer;
      gap: 5px;
    }

    .nav-toggle span {
      width: 25px;
      height: 3px;
      background: #3a86ff;
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    .nav-toggle.active span:nth-child(1) {
      transform: rotate(45deg) translate(12px, 12px);
    }

    .nav-toggle.active span:nth-child(2) {
      opacity: 0;
    }

    .nav-toggle.active span:nth-child(3) {
      transform: rotate(-45deg) translate(8px, -8px);
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
      align-items: center;
    }

    .nav-menu li {
      margin: 0;
    }

    .nav-menu a {
      color: #d0d0d0;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      font-size: 0.95rem;
    }

    .nav-menu a:hover {
      color: #3a86ff;
    }

    .cta-link {
      background: linear-gradient(135deg, #3a86ff, #8338ec);
      color: white !important;
      padding: 0.6rem 1.5rem;
      border-radius: 4px;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .cta-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(58, 134, 255, 0.3);
    }

    @media (max-width: 768px) {
      .nav-container {
        padding: 0 1rem;
      }

      .nav-toggle {
        display: flex;
      }

      .nav-menu {
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: linear-gradient(135deg, #1a0f2e 0%, #0f0f1e 100%);
        gap: 0;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
        border-bottom: 1px solid #2a2a4e;
      }

      .nav-menu.active {
        max-height: 400px;
        padding: 1rem 0;
      }

      .nav-menu li {
        margin: 0;
        border-bottom: 1px solid #2a2a4e;
        width: 100%;
        padding: 0 2rem;
      }

      .nav-menu li:last-child {
        border-bottom: none;
      }

      .nav-menu a {
        display: block;
        padding: 1rem 0;
      }

      .cta-link {
        margin: 1rem 0;
      }

      .logo-text {
        display: none;
      }
    }
  `]
})
export class HeaderComponent {
  readonly mobileMenuOpen = signal(false);

  toggleMenu(): void {
    this.mobileMenuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
