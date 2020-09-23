describe("Element All understanding",function(){

    it("All Understanding 1",function(){

        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys("10");
        element(by.model("second")).sendKeys("765")
        element(by.id("gobutton")).click()

        element(by.model("first")).sendKeys("45");
        element(by.model("second")).sendKeys("87")
        element(by.id("gobutton")).click()

        element(by.model("first")).sendKeys("4");
        element(by.model("second")).sendKeys("2")
        element(by.id("gobutton")).click()


        element.all(by.repeater("result in memory")).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                console.log(text)
            })

        })


    })

})