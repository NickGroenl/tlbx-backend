var expect  = require('chai').expect;
var request = require('request');

describe('Main App', function() {
    

    describe ('About page', function() {
        it('status', function(done){
            request('http://localhost:8080/example', function(error, response, body) {
                expect(!!response?.statusCode).to.equal(202);
                done();
            });
        });

    });
});