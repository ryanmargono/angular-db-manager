"use strict";
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_service_1 = require("../hero-service/hero.service");
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
            declarations: [hero_detail_component_1.HeroDetailComponent,],
            providers: [{ provide: hero_service_1.HeroService, useValue: http_1.Http }]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(hero_detail_component_1.HeroDetailComponent);
        comp = fixture.componentInstance;
    });
    it('Has a save button', function () {
        de = fixture.debugElement.query(platform_browser_1.By.css('button'));
        el = de.nativeElement;
        expect(el.textContent).toEqual('Save');
    });
});
//# sourceMappingURL=hero-detail.component.spec.js.map