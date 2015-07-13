var chai = require('chai');
var expect = require('chai').expect;
var word = require('../index');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
describe('sanitize', function() {
	beforeEach(function() {
		console.log('before');
	})

	it('return lowercase of string',function() {
		var inputWord = "hello world";
		var outputWord = word.sanitize(inputWord);
		expect(outputWord).to.not.be.a('number');
	})
	it('removes any hyphen', function() {
		var inputWord = 'HELLO-WORLD';
		var outputWord = word.sanitize(inputWord);

		expect(outputWord).to.equal('hello world');
	})
});

describe('tokenize',function() {
	it('returns an array of words', function() {
		var sentence = "hello world";
		var tokenizedSentence = word.tokenize(sentence);
		expect(tokenizedSentence).to.include.members(['hello','world']);
	})
})


describe('GITHUB INFO',function() {
	it.only('returns repo info from github',function(done) {
		word.info(function(reply){
			console.log(reply);
			expect(reply.language).to.equal('JavaScript');
			done();
		})
		console.log('hello');
	})
	// bad practice for this to go to an external site;
})

