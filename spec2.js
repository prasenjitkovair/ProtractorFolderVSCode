describe("Javascript Asynchronous", function(){


    it("Test case 1", function(){

        browser.get("https://angularjs.org")

        browser.get("http://juliemr.github.io/protractor-demo/").then(function(){

            browser.sleep(5000)
            console.log("This should be the last step to execute")

        })

        



    })



})