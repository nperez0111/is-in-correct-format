'use strict';
const is = {
        string: require( 'is-string' ),
        function: require( 'is-function' ),
        object: require( 'is-object' ),
        number: require( 'is-number' ),
        buffer: require( 'is-buffer' ),
        promise: require( 'is-promise' ),
        regex: require( 'is-regex' ),
        symbol: require( 'is-symbol' ),
        boolean: a => a === true || a === false
    },
    extender = require( 'objextension' ),
    checkAllVals = function ( obj, checker ) {
        return Object.keys( obj ).every( function ( key ) {
            let val = obj[ key ]
            if ( is.object( val ) ) {
                return checkAllVals( val, checker )
            }
            let ret = checker( val )
            return is.boolean( ret ) ? ret : typeof checker( val ) === typeof val
        } )
    },
    traverseObj = function ( obj, checker ) {
        return Object.keys( checker ).every( function ( key ) {
            let val = obj[ key ],
                check = checker[ key ]
            if ( is.object( val ) ) {
                return traverseObj( val, check )
            } else {
                if ( is.function( check ) ) {

                    return check( val, key )
                }
                return val instanceof check
            }
        } )
    }

let please = null

module.exports = ( obj, check, allValues ) => {

    if ( !obj || !check )
        return false

    if ( allValues === undefined ) {

        allValues = a => true

    }

    return traverseObj( obj, check ) && checkAllVals( obj, allValues )


};
module.exports.is = is
