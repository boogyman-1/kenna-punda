import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

interface Project {
  id: number;
  name: string;
  description: string;
  impact: string;
  keywords: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="projects-section">

      <div class="projects-header">
        <div class="section-label">/ Portfolio Projects</div>
        <h2>Audacious Endeavors</h2>
        <p>Projects that seemed like a good idea at the time</p>
      </div>

      <div class="projects-grid">

        @for (project of projects; track project.id) {

          <div class="project-card">

            <div class="project-header">
              <h3>{{ project.name }}</h3>
              <div class="project-number">#{{ project.id }}</div>
            </div>

            <p class="project-description">
              {{ project.description }}
            </p>

            <div class="project-impact">
              <div class="impact-label">Impact</div>
              <p class="impact-text">{{ project.impact }}</p>
            </div>

            <div class="keywords">
              @for (keyword of project.keywords; track keyword) {
                <span class="keyword">#{{ keyword }}</span>
              }
            </div>

            <button class="learn-more">
              Learn More →
            </button>

          </div>

        }

      </div>

    </section>
  `,
  styles: []
})
export class ProjectsComponent {

  readonly portfolioService = new PortfolioService();

  readonly projects: Project[] = [];

}