import { Component, ChangeDetectionStrategy, computed } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  featured: boolean;
  tags: string[];
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="gallery-section">
      <div class="gallery-header">
        <h2>🔐 Portfolio Moments</h2>
        <p>Ancient artifacts from the cybersecurity trenches</p>
      </div>

      @if (tags().length > 0) {
        <div class="tag-filter">
          <button 
            class="tag-button"
            [class.active]="activeTag() === null"
            (click)="filterByTag(null)">
            All
          </button>

          @for (tag of tags(); track tag) {
            <button 
              class="tag-button"
              [class.active]="activeTag() === tag"
              (click)="filterByTag(tag)">
              {{ tag }}
            </button>
          }
        </div>
      }

      <div class="gallery-grid">
        @for (item of filteredGallery(); track item.id) {
          <div class="gallery-card" [class.featured]="item.featured">
            <div class="image-wrapper">
              <img 
                [ngSrc]="item.imageUrl"
                [alt]="item.title"
                width="400"
                height="400">

              @if (item.featured) {
                <div class="featured-badge">⭐ Featured</div>
              }
            </div>

            <div class="card-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>

              <div class="tags">
                @for (tag of item.tags; track tag) {
                  <span class="tag">#{{ tag }}</span>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: []
})
export class GalleryComponent {

  readonly portfolioService = new PortfolioService();

  readonly tags = computed<string[]>(() => []);

  readonly filteredGallery = computed<GalleryItem[]>(() => []);

  readonly activeTag = computed<string | null>(() => null);

  filterByTag(tag: string | null): void {
    console.log(tag);
  }

}