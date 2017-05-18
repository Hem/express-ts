import { suite, test, timeout, slow, skip, only } from 'mocha-typescript';
import { expect, assert } from 'chai';



@suite
class SampleTest {

    @test assert_test_one_async(done) {
        expect(1).to.deep.equal(1);
        done();   
    }

    @test assert_test_two() {
        expect(2).to.equal(2);        
    }
}