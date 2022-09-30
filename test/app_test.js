const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

var app = require('../app');
describe('Main App', function() {
    describe('API /v1/files/data', () => {
        it('it should return 202', (done) => {
          chai.request(app)
            .get('/v1/files/data')
            .end((err, res) => {
              res.should.have.status(202);
              done();
            });
        });
    });
    describe('API /v1/files/data/select', () => {
        it('it should return 202', (done) => {
            chai.request(app)
                .post('/v1/files/data/select').send({filename: 'test9.csv'})
                .end((err, res) => {
                    res.should.have.status(202);
                    done();
                });
        });
    });
});