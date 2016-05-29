import sinon from 'sinon';
import { echo } from '../src/middleware.js';

describe('middleware', () => {
	let req = {	query: {} };
	let res = { send: function send() {} };
	let sandbox = null;
	
	beforeEach(() => {
		sandbox = sinon.sandbox.create();
	});
	
	describe('GET', () => {
		
		describe('When no name is given on the query string', () => {
			beforeEach(() => {
				sandbox.stub(res, 'send');	
			});
			
			it('it should send an anonymous greeting', (done) => {

				echo(req, res, done);
				
				sinon.assert.calledOnce(res.send);
				sinon.assert.calledWithExactly(res.send, 'Hello, anonymous.');
			});
		});
	
		describe('When name is given on the query string', () => {
			
			beforeEach(() => {
				sandbox.stub(res, 'send');					
				req.query.name = 'John Smith';	
			});
			
			it('it should send a greeting by name', (done) => {
				
				echo(req, res, done);
				
				sinon.assert.calledOnce(res.send);
				sinon.assert.calledWithExactly(res.send, 'Hello, John Smith');
			});
			
			afterEach(() => {
				delete req.query.name;
			});
		});
	
	});
	
	afterEach(() => {
		sandbox.restore();
	});

});