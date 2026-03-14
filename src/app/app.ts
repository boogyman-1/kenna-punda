import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hacker-portal">
      <div class="matrix-bg"></div>
      
      <div class="portal-content">
        <div class="top-bar">
          <span class="system-label">🚨 WORLD'S BEST HACKER DETECTED 🚨</span>
          <span class="countdown">⏱️ {{ service.countdownDisplay() }}</span>
        </div>

        <div class="hacker-profile">
          <img src="C:\\Users\\hp\\Documents\\GitHub\\kenna-punda\\src\\assets\\hacker.jpg" alt="World's Best Hacker" class="hacker-image">
          <p class="hacker-image">Photo load agala da Kenna Punda<p> 
         <div class="hacker-info">
            <h1>🕵️ THE LEGEND</h1>
            <p class="title">World's Most Elite Cybersecurity Threat</p>
            <p class="warning">⚠️DANGER LEVEL: {{ service.getCurrentHackLevel() }}% </p>
            <p class="warning">Photo Load agala da  </p>
            <p class="warning-center">⚠️KENNA PUNDA⚠️<p>
            <p class="warning-left">⚠️KIRUKU PUNDA⚠️<p>
            <p class="warning-justify">⚠️PULUTHI PUNDA⚠️<p>
            <p class="warning-center">⚠️MADA PUNDA⚠️<p>
          </div>
        </div>

        <div *ngIf="blast" class="blast-effect">
          <div class="blast-text"> Kishore 💖 NJ <br> 💥 SYSTEM BREACH! 💥</div>
        </div>

        <div class="hack-progress">
          <div class="progress-bar">
            <div class="progress-fill" [style.width.%]="service.getCurrentHackLevel()"></div>
          </div>
          <p class="status">{{ getStatusMessage() }}</p>
        </div>

        <div class="system-log">
          <div class="log-header">📡 LIVE SYSTEM LOG</div>
          <div class="log-content">
            <div *ngFor="let msg of systemLog" class="log-entry">
              {{ msg }}
            </div>
          </div>
        </div>

        <div class="facts-panel">
          <div class="fact-title">📊 CLASSIFIED FACTS</div>
          <div class="fact-content">
            <p>{{ service.randomFact().fact }}</p>
            <div class="absurdity-meter">
              <div class="absurdity-level" [style.width.%]="service.randomFact().absurdity"></div>
            </div>
            <p class="absurdity-text">Absurdity Level: {{ service.randomFact().absurdity }}/10000</p>
          </div>
        </div>

        <div class="warning-box">
          <p>⚠️ THEY'LL BE HERE ANY MINUTE</p>
          <p>🏃 RUN RUN RUN RUN RUN</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hacker-portal {
      min-height: 100vh;
      background: linear-gradient(135deg, #0f0f1e 0%, #1a0f2e 50%, #0f0f1e 100%);
      color: #00ff00;
      font-family: 'Courier New', monospace;
      overflow: hidden;
      position: relative;
    }

    .matrix-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.03;
      background-image: 
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0, 255, 0, 0.1) 2px,
          rgba(0, 255, 0, 0.1) 4px
        );
      animation: scan 8s linear infinite;
      pointer-events: none;
    }

    @keyframes scan {
      0% { transform: translateY(0); }
      100% { transform: translateY(10px); }
    }

    .portal-content {
      position: relative;
      z-index: 1;
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      animation: fadeIn 0.5s ease-in;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .top-bar {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      border: 2px solid #00ff00;
      background: rgba(0, 255, 0, 0.05);
      margin-bottom: 20px;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 10px rgba(0, 255, 0, 0.3); }
      50% { box-shadow: 0 0 20px rgba(0, 255, 0, 0.6); }
    }

    .system-label, .countdown {
      font-weight: bold;
      font-size: 1.2em;
      text-shadow: 0 0 10px #00ff00;
    }

    .hacker-profile {
      display: flex;
      gap: 30px;
      margin: 30px 0;
      padding: 20px;
      border: 2px solid #3a86ff;
      background: rgba(58, 134, 255, 0.05);
    }

    .hacker-image {
      width: 300px;
      height: 300px;
      border: 3px solid #ff006e;
      box-shadow: 0 0 30px rgba(255, 0, 110, 0.5);
      filter: brightness(1.1) contrast(1.2);
    }

    .hacker-info h1 {
      margin: 0;
      font-size: 2.5em;
      color: #ff006e;
      text-shadow: 0 0 20px #ff006e;
    }

    .title {
      font-size: 1.3em;
      color: #3a86ff;
      margin: 10px 0;
      text-shadow: 0 0 10px #3a86ff;
    }

    .warning {
      color: #ff006e;
      font-weight: bold;
      font-size: 2em;
      animation: blink 0.7s infinite;
    }
    .warning-center {
      color: #ff006e;
      font-weight: bold;
      font-size: 1.1em;
      animation: blink 0.7s infinite;
      text-align: center;
    }  
    .warning-left {
      color: #ff006e;
      font-weight: bold;
      font-size: 1.1em;
      animation: blink 0.7s infinite;
      text-align: right;
    }
    .warning-justify {
      color: #ff006e;
      font-weight: bold;
      font-size: 1.1em;
      animation: blink 0.7s infinite;
      text-align: justify;
    }


    @keyframes blink {
      0%, 49%, 100% { opacity: 1; }
      50%, 99% { opacity: 0.3; }
    }

    .hack-progress {
      margin: 30px 0;
      padding: 20px;
      border: 2px solid #8338ec;
      background: rgba(131, 56, 236, 0.05);
    }

    .progress-bar {
      width: 100%;
      height: 30px;
      background: rgba(0, 0, 0, 0.5);
      border: 2px solid #00ff00;
      overflow: hidden;
      margin-bottom: 10px;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #00ff00, #ff006e, #3a86ff);
      transition: width 0.2s ease;
      box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
    }

    .status {
      text-align: center;
      font-size: 1.1em;
      color: #00ff00;
      text-shadow: 0 0 10px #00ff00;
    }

    .system-log {
      padding: 15px;
      border: 2px solid #00ff00;
      background: rgba(0, 0, 0, 0.7);
      margin: 20px 0;
      height: 200px;
      overflow-y: auto;
    }

    .log-header {
      color: #ff006e;
      font-weight: bold;
      margin-bottom: 10px;
      text-shadow: 0 0 10px #ff006e;
    }

    .log-content {
      font-size: 0.9em;
      line-height: 1.6;
    }

    .log-entry {
      color: #00ff00;
      margin: 5px 0;
      animation: typewrite 0.3s steps(40, end);
    }

    @keyframes typewrite {
      from { color: transparent; }
      to { color: #00ff00; }
    }

    .facts-panel {
      padding: 20px;
      border: 2px solid #3a86ff;
      background: rgba(58, 134, 255, 0.05);
      margin: 20px 0;
    }

    .fact-title {
      color: #3a86ff;
      font-weight: bold;
      font-size: 1.1em;
      margin-bottom: 10px;
      text-shadow: 0 0 10px #3a86ff;
    }

    .fact-content p {
      color: #00ff00;
      line-height: 1.6;
    }

    .absurdity-meter {
      width: 100%;
      height: 20px;
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid #8338ec;
      margin: 10px 0;
      overflow: hidden;
    }

    .absurdity-level {
      height: 100%;
      background: linear-gradient(90deg, #8338ec, #ff006e);
      transition: width 0.5s ease;
      box-shadow: 0 0 10px rgba(131, 56, 236, 0.8);
    }

    .absurdity-text {
      font-size: 0.85em;
      color: #8338ec !important;
    }

    .warning-box {
      text-align: center;
      padding: 20px;
      border: 3px solid #ff006e;
      background: rgba(255, 0, 110, 0.1);
      margin: 30px 0;
      animation: wobble 0.4s infinite;
    }

    .warning-box p {
      margin: 10px 0;
      font-size: 1.3em;
      color: #ff006e;
      text-shadow: 0 0 15px #ff006e;
      font-weight: bold;
    }

    @keyframes wobble {
      0%, 100% { transform: rotateZ(-1deg); }
      50% { transform: rotateZ(1deg); }
    }

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb {
      background: #00ff00;
      border-radius: 4px;
    }

    @media (max-width: 768px) {
      .hacker-profile {
        flex-direction: column;
        align-items: center;
      }

      .hacker-image {
        width: 250px;
        height: 250px;
      }

      .hacker-info h1 {
        font-size: 2em;
      }

      .top-bar {
        flex-direction: column;
        gap: 10px;
      }
    }

    .blast-effect {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: radial-gradient(circle, #ff006e 0%, #fff 40%, #0f0f1e 100%);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: blast 0.5s ease-in;
    }
    .blast-text {
      font-size: 3em;
      color: #ff006e;
      font-weight: bold;
      text-shadow: 0 0 40px #fff, 0 0 80px #ff006e;
      animation: shake 0.5s infinite;
      text-align: center;
    }
    @keyframes blast {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20% { transform: translateX(-10px); }
      40% { transform: translateX(10px); }
      60% { transform: translateX(-10px); }
      80% { transform: translateX(10px); }
    }
  `]
})
export class App implements OnInit {
  systemLog: string[] = [];
  blast: boolean = false;

  constructor(public service: PortfolioService) {}

  ngOnInit() {
    this.addSystemMessages();
    setInterval(() => {
      this.addSystemMessages();
      if (this.service.getCurrentHackLevel() >= 100 && !this.blast) {
        this.triggerBlast();
      }
    }, 1500);
  }

  addSystemMessages() {
    if (this.systemLog.length > 12) {
      this.systemLog.shift();
    }
    this.systemLog.push(this.service.getRandomSystemMessage());
  }

  getStatusMessage(): string {
    return this.service.getStatusMessage();
  }

  triggerBlast() {
    this.blast = true;
    setTimeout(() => {
      this.blast = false;
      this.service.reset();
    }, 3000);

  }
}
