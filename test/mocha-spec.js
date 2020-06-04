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
  	var NameCodePattern = /^[A-Za-z]+/;
  	var nameCorrect = "Hamilton";
  	var nameCorrect2 = "Auckland";
  	var nameCorrect3 = "Wellington";
  	var nameIncorrect = "12345";
  	var nameIncorrect2 = "Chicago";
  	var nameIncorrect3 = "Hamiton";
    expect(NameCodePattern.test(nameCorrect)).to.be.equal(true); 
    expect(NameCodePattern.test(nameCorrect2)).to.be.equal(true); 
    expect(NameCodePattern.test(nameCorrect3)).to.be.equal(true); 
    expect(NameCodePattern.test(nameIncorrect)).to.be.equal(false); 
    expect(NameCodePattern.test(nameIncorrect2)).to.be.equal(false); 
    expect(NameCodePattern.test(nameIncorrect3)).to.be.equal(false); 
    done();
  });
});

