import test from 'ava';
import fn from './';

test( 'returns proper bool if each key is explicit in location', t => {

    t.true( fn( {
        a: 2
    }, {
        a: fn.is.number
    } ) )

    t.false( fn( {
        a: 2
    }, {
        a: fn.is.function
    } ) )
} );

test( 'deeply nested', t => {

    t.true( fn( {
        a: {
            b: 2
        }
    }, {
        a: {
            b: fn.is.number
        }
    } ) )

    t.false( fn( {
        a: {
            b: 2
        }
    }, {
        a: {
            b: fn.is.string
        }
    } ) )
} )

test( 'instanceof', t => {

    t.true( fn( {
        a: "isstring"
    }, {
        a: String
    } ) )

    t.true( fn( {
        a: {
            b: "isstring"
        }
    }, {
        a: {
            b: String
        }
    } ) )
} )

test( 'allValues', t => {

    t.true( fn( {
        a: "b",
        b: "a"
    }, {
        a: fn.is.string,
        b: fn.is.string
    }, fn.is.string ) )

    t.false( fn( {
        a: "b",
        b: "a",
        c: 2
    }, {
        a: fn.is.string,
        b: fn.is.string,
        c: fn.is.number
    }, fn.is.number ) )

    t.false( fn( {
        a: "b",
        b: "a",
        c: 2
    }, {
        a: fn.is.string,
        b: fn.is.string,
        c: fn.is.number
    }, Number ) )

    t.true( fn( {
        a: "b",
        b: "a",
        c: "2"
    }, {
        a: fn.is.string,
        b: fn.is.string,
        c: fn.is.string
    }, String ) )
    t.false( fn( {
        a: "b",
        b: 2,
        c: "2"
    }, {
        a: fn.is.string,
        c: fn.is.string
    }, fn.is.string ) )
} )

test( 'deep all values', t => {
    t.true( fn( {
        a: {
            b: 2
        }
    }, {
        a: {
            b: fn.is.number
        }
    }, Number ) )

    t.false( fn( {
        a: {
            b: 2
        }
    }, {
        a: {
            b: Number
        }
    }, fn.is.string ) )

    t.true( fn( {
        a: {
            b: 2
        }
    }, {
        a: {
            b: Number
        }
    }, Number ) )

} )
