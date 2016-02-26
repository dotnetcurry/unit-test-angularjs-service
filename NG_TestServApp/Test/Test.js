//1.
describe('myserv', function () {
    var myserv, httpBackend;
    //2.
    beforeEach(function () {
        //3. load the module.
        module('mdl');

        // 4. get your service, also get $httpBackend
        // $httpBackend will be a mock.
        inject(function ($httpBackend, _myserv_) {
            myserv = _myserv_;
            httpBackend = $httpBackend;
        });
    });

    // 5. make sure no expectations were missed in your tests.
    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    //6.
    it('ServiceTestSpec', function () {

        var returnData = {};

        //7. expectGET to make sure this is called once.
        httpBackend.expectGET("http://localhost:36337/api/EmployeeInfoAPI/1").respond(returnData);

        //8. make the call.
        var returnedPromise = myserv.get(1);

        //9. set up a handler for the response, that will put the result
        // into a variable in this scope for you to test.
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });

        //10. flush the backend to "execute" the request to do the expectedGET assertion.
        httpBackend.flush();

        //11. check the result. 
        
        expect(result).toEqual(returnData);

    });


});