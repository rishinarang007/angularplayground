

describe("Navigation Menu", function(){

	it("changes actiev link depending on browser", function(){


		browser.get("/");

		var activelistItem = element(by.css(".active")).element(by.tagName("a")).getText();

		expect(activelistItem).toEqual("Home");


		var edgesLink = element(by.linkText('Edges'));
		edgesLink.click();

		activelistItem = element(by.css(".active")).element(by.tagName("a")).getText();

		expect(activelistItem).toEqual("Edges");
	});

});