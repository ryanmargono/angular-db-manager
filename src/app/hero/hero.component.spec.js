"use strict";
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var hero_component_1 = require("./hero.component");
var hero_detail_component_1 = require("../hero-detail/hero-detail.component");
var testing_2 = require("@angular/router/testing");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
describe('HeroComponent', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule, forms_1.FormsModule],
            declarations: [hero_component_1.HeroComponent, hero_detail_component_1.HeroDetailComponent,],
            providers: [{ provide: http_1.Http }]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(hero_component_1.HeroComponent);
        comp = fixture.componentInstance;
    });
    it('header should be My Heroes', function () {
        de = fixture.debugElement.query(platform_browser_1.By.css('h2'));
        el = de.nativeElement;
        expect(el.textContent).toEqual('My Heroes');
    });
    it('Has label for hero name', function () {
        de = fixture.debugElement.query(platform_browser_1.By.css('label'));
        el = de.nativeElement;
        expect(el.textContent).toEqual('Hero name:');
    });
});
//# sourceMappingURL=hero.component.spec.js.map