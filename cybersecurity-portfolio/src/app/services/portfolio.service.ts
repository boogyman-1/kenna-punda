import { Injectable, signal, computed, effect } from '@angular/core';

interface HackerFact {
  id: number;
  fact: string;
  absurdity: number;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly countdownSeconds = signal(120); // 2 minutes countdown
  private readonly systemStatus = signal('INFILTRATING WORLD SYSTEMS...');
  private readonly hackLevel = signal(0);

  readonly countdownDisplay = computed(() => {
    const seconds = this.countdownSeconds();
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  });

  readonly hackerFacts = signal<HackerFact[]>([
    {
      id: 1,
      fact: '💻 He once typed "nj love /" on Windows and Now LTM is in loss',
      absurdity: 8000
    },
    {
      id: 2,
      fact: '🔓 He hacked NASA',
      absurdity: 9000
    },
    {
      id: 3,
      fact: '⌨️ His keyboard has been banned by 47 countries for being too powerful',
      absurdity: 8500
    },
    {
      id: 4,
      fact: '🕵️ Hackers hack TO protect him, not the other way around',
      absurdity: 10000
    },
    {
      id: 5,
      fact: '🧠 His mustache contains more processing power than Google servers',
      absurdity: 9500
    },
    {
      id: 6,
      fact: '💻 He once typed "rm -rf /" on Windows and it still works perfectly',
      absurdity: 8000
    },
    {
      id: 7,
      fact: '🚀 Elon Musk asks HIM for tech advice',
      absurdity: 7500
    },
    {
      id: 8,
      fact: '🔐 His password is his stare. It\'s unhackable.',
      absurdity: 9200
    },
    {
      id: 9,
      fact: '🌐 He doesn\'t browse the internet. The internet browses HIM.',
      absurdity: 9800
    }
  ]);

  readonly randomFact = computed(() => {
    const facts = this.hackerFacts();
    return facts[Math.floor(Math.random() * facts.length)];
  });

  readonly systemMessages = signal<string[]>([
    '> Accessing Pentagon Database...',
    '> Downloading Fort Knox...',
    '> Hacking into your own thoughts...',
    '> Teaching AI to fear us...',
    '> System admin is now crying...',
    '> WiFi password? Already have yours.',
    '> Is this even legal? Too late...',
    '> Breaking 256-bit encryption with his stare...'
  ]);

  constructor() {
    // Auto-increment hack level
    effect(() => {
      const interval = setInterval(() => {
        this.hackLevel.update(level => Math.min(level + 1, 100));
        this.countdownSeconds.update(sec => Math.max(sec - 1, 0));
      }, 200);
    });
  }

  getStatusMessage(): string {
    const level = this.hackLevel();
    if (level < 25) return '🔍 SCANNING...';
    if (level < 50) return '⚡ PENETRATING...';
    if (level < 75) return '💥 BREAKING IN...';
    if (level < 100) return '🎉 TRANSFERRING BILLIONS...';
    return '✅ WORLD SUCCESSFULLY HACKED!';
  }

  getRandomSystemMessage(): string {
    const msgs = this.systemMessages();
    return msgs[Math.floor(Math.random() * msgs.length)];
  }

  reset(): void {
    this.countdownSeconds.set(420);
    this.hackLevel.set(0);
    this.systemStatus.set('INFILTRATING WORLD SYSTEMS...');
  }

  getCurrentHackLevel(): number {
    return this.hackLevel();
  }
}
