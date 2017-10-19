"use strict";
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var testing_2 = require("@angular/router/testing");
var dashboard_component_1 = require("./dashboard.component");
var hero_detail_component_1 = require("../hero-detail/hero-detail.component");
var hero_search_component_1 = require("../hero-search/hero-search.component");
var forms_1 = require("@angular/forms");
var hero_service_1 = require("../hero-service/hero.service");
var http_1 = require("@angular/http");
// import { DashboardModule } from './dashboard.module';
describe('DashboardComponent', function () {
    var comp;
    var fixture;
    var de;
    var el;
    // async beforeEach
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule, forms_1.FormsModule],
            declarations: [dashboard_component_1.DashboardComponent, hero_detail_component_1.HeroDetailComponent, hero_search_component_1.HeroSearchComponent],
            providers: [{ provide: hero_service_1.HeroService }, { provide: http_1.Http }]
        })
            .compileComponents();
    }));
    // synchronous beforeEach
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(dashboard_component_1.DashboardComponent);
        comp = fixture.componentInstance; // BannerComponent test instance
    });
    it('Shows hero search`', function () {
        de = fixture.debugElement.query(platform_browser_1.By.css('h4'));
        el = de.nativeElement;
        expect(el.textContent).toEqual('Hero Search');
    });
    it('Has correct title', function () {
        de = fixture.debugElement.query(platform_browser_1.By.css('h3'));
        el = de.nativeElement;
        expect(el.textContent).toEqual('Top Heroes');
    });
});
//# sourceMappingURL=dashboard.spec.js.map