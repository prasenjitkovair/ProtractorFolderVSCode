describe("Element All understanding",function(){

    function add(a,b)
    {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b)
        element(by.id("gobutton")).click()
    }

    it("All Understanding 1",function(){

        browser.get("http://juliemr.github.io/protractor-demo/");
        add(12,4)
        add(45,56)
        add(3,6)
        add(45,871)
        add(789,18)
        add(8,64)
        add(9,0)
        add(65,99)


        element.all(by.repeater("result in memory")).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                console.log(text)
            })

        })


    })

})