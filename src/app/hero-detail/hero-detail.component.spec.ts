import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../hero-service/hero.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Headers, Http } from '@angular/http';

describe('Hero Detail Component', () => {
  let comp: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [HeroDetailComponent,],
      providers: [{provide: HeroService, useValue: Http}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    comp = fixture.componentInstance;
  });

  it('Has a save button', () => {
    de = fixture.debugElement.query(By.css('button'));
    el = de.nativeElement;
    expect(el.textContent).toEqual('Save');
  });

});
