import { suite, test, slow, timeout, skip, only } from "mocha-typescript";
import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;
const assert = chai.assert;

@suite('Hello  World Test')
class HelloWorldTest {

  @test
  test_should_be_json(){
    return chai.request(app).get('/')
      .then(res => {
        expect(res.type).to.eql('application/json');
      });
  }

  @test
  test_should_have_a_message(){
    return chai.request(app).get('/')
    .then(res => {
      expect(res.body.message).to.eql('Hello World!');
    });
  }


}
