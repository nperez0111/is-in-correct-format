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
} )
