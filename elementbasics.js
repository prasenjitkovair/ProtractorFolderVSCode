describe("Element basic understanding",function(){

    it("Understanding 1",function(){

        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys("10");
        element(by.model("second")).sendKeys("765")
        element(by.id("gobutton")).click()
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("775")

        element(by.css("h2[class='ng-binding']")).getText().then(function(text){
            console.log("The output is: " + text)

        })


    })

})