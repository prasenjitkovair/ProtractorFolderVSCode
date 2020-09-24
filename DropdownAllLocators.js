describe("Element All understanding",function(){

    function cal(a,b,operation)
    {
        element(by.model("first")).sendKeys(a);
        element.all(by.tagName("option")).each(function(item){
            item.getAttribute("value").then(function(value){
                if(value == operation)
                {
                    item.click()
                }
            })

        })
        element(by.model("second")).sendKeys(b)
        element(by.id("gobutton")).click()
    }

    it("All Understanding 1",function(){

        browser.get("http://juliemr.github.io/protractor-demo/");
        cal(12,4,"ADDITION")
        cal(45,56,"MULTIPLICATION")
        cal(3,6,"ADDITION")
        cal(45,871,"SUBTRACTION")
        cal(789,18,"SUBTRACTION")
        cal(8,64,"DIVISION")
        cal(9,0,"MULTIPLICATION")
        cal(65,99,"ADDITION")


        element.all(by.repeater("result in memory")).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                console.log(text)
            })

        })


    })

})