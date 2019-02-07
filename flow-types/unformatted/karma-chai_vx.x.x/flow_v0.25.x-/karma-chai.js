declare module 'karma-chai' {
        declare module 'global' {
        declare var assert: Chai.AssertStatic;
	declare var expect: Chai.ExpectStatic;
	declare var should: Chai.Should;
    }

    }
