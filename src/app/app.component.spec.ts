import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
        declarations: [ AppComponent ], // declare the test component
    })
    .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    
    
  });
  it('no title in the DOM until manually call `detectChanges`', () => {
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    expect(el.textContent).toEqual('');
  });

  it('h1 tag should have the title of the component', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    expect(el.textContent).toEqual(comp.title);
  });
});