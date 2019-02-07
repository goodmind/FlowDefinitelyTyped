declare module 'karma-chai-sinon' {
        declare module 'global' {
        declare var should: Chai.Should;
	declare var expect: Chai.ExpectStatic;
	declare var assert: Chai.AssertStatic;
	declare var sinon: Sinon.SinonStatic;
    }

    }
