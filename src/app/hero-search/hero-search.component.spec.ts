import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from '../hero-service/hero.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Headers, Http } from '@angular/http';

describe('Hero Detail Component', () => {
  let comp: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [HeroSearchComponent,],
      providers: [{provide: Http,}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    comp = fixture.componentInstance;
  });

  it('Component title is Hero Search', () => {
    de = fixture.debugElement.query(By.css('h4'));
    el = de.nativeElement;
    expect(el.textContent).toEqual('Hero Search');
  });

  it('Has a searchbox', () => {
    de = fixture.debugElement.query(By.css('input'));
    el = de.nativeElement;
    expect(el.id).toEqual('search-box');
  });

});
