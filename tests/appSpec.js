/**
 * Created by davem on 27/11/2016.
 */
describe("learn javascript", function(){
    it("cas show question view",function(){
        learnjavascript.showView("$question-1");
        expect($(".view-container .question-view").length).toEqual(1);
      });

    it("shows the landing page view when their is not  hash", function(){

    

    })
    });