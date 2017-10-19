"use strict";
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var hero_search_component_1 = require("./hero-search.component");
var testing_2 = require("@angular/router/testing");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
describe('Hero Detail Component', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule, forms_1.FormsModule],
            declarations: [hero_search_component_1.HeroSearchComponent,],
            providers: [{ provide: http_1.Http, }]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(hero_search_component_1.HeroSearchComponent);
        comp = fixture.componentInstance;
    });
    it('Component title is Hero Search', function () {
        de = fixture.debugElement.query(platform_browser_1.By.css('h4'));
        el = de.nativeElement;
        expect(el.textContent).toEqual('Hero Search');
    });
    it('Has a searchbox', function () {
        de = fixture.debugElement.query(platform_browser_1.By.css('input'));
        el = de.nativeElement;
        expect(el.id).toEqual('search-box');
    });
});
//# sourceMappingURL=hero-search.component.spec.js.map