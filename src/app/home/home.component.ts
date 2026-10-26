import { Component, ElementRef, OnDestroy, AfterViewInit, ViewChild, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('typed') typedEl!: ElementRef<HTMLSpanElement>;
  private platformId = inject(PLATFORM_ID);
  private typed?: Typed;

  stats = [
    { value: '5+', label: 'Years building' },
    { value: '5', label: 'Countries served' },
    { value: '∞', label: 'Curiosity' },
  ];

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return; // SSR-safe
    this.typed = new Typed(this.typedEl.nativeElement, {
      strings: ['Angular Developer', 'UI Craftswoman', 'Agentic Coding Enthusiast', 'Future Financial Engineer'],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
    });
  }

  ngOnDestroy() {
    this.typed?.destroy();
  }
}