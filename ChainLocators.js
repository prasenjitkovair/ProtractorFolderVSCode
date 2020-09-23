describe("Chain locators",function(){

    it("Understanding chain locators",function(){

        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys("2");
        element(by.model("operator")).element(by.css("option[value='MULTIPLICATION']")).click()
        element(by.model("second")).sendKeys("8")
        element(by.id("gobutton")).click()
        
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
            console.log(text)
        })

    })

})