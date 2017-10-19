import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero-service/hero.service';
import { Headers, Http } from '@angular/http';

// import { DashboardModule } from './dashboard.module';

describe('DashboardComponent', () => {

    let comp: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    // async beforeEach
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, FormsModule],
            declarations: [DashboardComponent, HeroDetailComponent, HeroSearchComponent],
            providers: [{ provide: HeroService }, { provide: Http }]
        })
            .compileComponents();
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);

        comp = fixture.componentInstance; // BannerComponent test instance



    });
    it('Shows hero search`', () => {
        de = fixture.debugElement.query(By.css('h4'));
        el = de.nativeElement;
        expect(el.textContent).toEqual('Hero Search');
    });

    it('Has correct title', () => {
        de = fixture.debugElement.query(By.css('h3'));
        el = de.nativeElement;
        expect(el.textContent).toEqual('Top Heroes');
    })
});