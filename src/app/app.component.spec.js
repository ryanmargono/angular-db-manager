"use strict";
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var testing_2 = require("@angular/router/testing");
var app_component_1 = require("./app.component");
describe('AppComponent', function () {
    var comp;
    var fixture;
    var de;
    var el;
    // async beforeEach
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule],
            declarations: [app_component_1.AppComponent],
        })
            .compileComponents(); // compile template and css
    }));
    // synchronous beforeEach
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance; // BannerComponent test instance
    });
    it('no title in the DOM until manually call `detectChanges`', function () {
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = de.nativeElement;
        expect(el.textContent).toEqual('');
    });
    it('h1 tag should have the title of the component', function () {
        fixture.detectChanges();
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = de.nativeElement;
        expect(el.textContent).toEqual(comp.title);
    });
});
//# sourceMappingURL=app.component.spec.js.map