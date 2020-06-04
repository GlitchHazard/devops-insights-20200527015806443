var rewire = require('rewire');
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var should = chai.should;
chai.config.includeStack = false;

describe('My test suite', function() {
  beforeEach(function() {
  });
  afterEach(function() {
  });
  it('Test case', function(done) {
    expect(true).to.be.equal(true);
    done();
  });
});

describe('Name Test', function() {
  beforeEach(function() {

  });
  afterEach(function() {
  	
  });
  it('Test case', function(done) {
  	var NameCodePattern = /\b[^\d\W]+\b/;
  	var nameCorrect = "Hamilton";
  	var nameCorrect2 = "Auckland";
  	var nameCorrect3 = "Wellington";
  	var nameIncorrect = "12345";
  	var nameIncorrect2 = "09dcsd8";
  	var nameIncorrect3 = "Hamiton01";
    expect(NameCodePattern.test(nameCorrect)).to.be.equal(true); 
    expect(NameCodePattern.test(nameCorrect2)).to.be.equal(true); 
    expect(NameCodePattern.test(nameCorrect3)).to.be.equal(true); 
    expect(NameCodePattern.test(nameIncorrect)).to.be.equal(false); 
    expect(NameCodePattern.test(nameIncorrect2)).to.be.equal(false); 
    expect(NameCodePattern.test(nameIncorrect3)).to.be.equal(false); 
    done();
  });
});

const api = '`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${NameValue},{},NZ,us`';
const relativeUrl = '/persons';


describe('API Test', function() {
  beforeEach(function() {

  });
  afterEach(function() {
  	
  });
  it('should be able to create a site', function async () {
      const response = await fetch(relativeUrl)
        .set('Content-Type', 'application/json');
      expect(response).to.have.status(200);
    });
});

