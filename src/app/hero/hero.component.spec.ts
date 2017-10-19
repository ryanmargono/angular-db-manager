import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroComponent } from './hero.component';
import { HeroService } from '../hero-service/Hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Headers, Http } from '@angular/http';

describe('HeroComponent', () => {
  let comp: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [HeroComponent, HeroDetailComponent,],
      providers: [{ provide: Http }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    comp = fixture.componentInstance;
  });

  it('header should be My Heroes', () => {
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;
    expect(el.textContent).toEqual('My Heroes');
  });

  it('Has label for hero name', () => {
    de = fixture.debugElement.query(By.css('label'));
    el = de.nativeElement;
    expect(el.textContent).toEqual('Hero name:');
  });

});
