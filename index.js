'use strict';
const is = {
        string: require( 'is-string' ),
        function: require( 'is-function' ),
        object: require( 'is-object' ),
        number: require( 'is-number' ),
        buffer: require( 'is-buffer' ),
        promise: require( 'is-promise' ),
        regex: require( 'is-regex' ),
        symbol: require( 'is-symbol' )
    },
    extender = require( 'objextension' )
let please = null
    /*example usage
    var isItInCorrectFormat= require('is-in-correct-format');
    isItInCorrectFormat({a:2},{key:String,value:Number})
    var is=IsItInCorrectformat.is;
    isItInCorrectFormat({a:{b:3}},{a:{b:is.number}})
    isItInCorrectFormat({a:{b:3}},{a:{b:a=>is.number(a)||is.function(a)}})
    */
module.exports = ( obj, check ) => {
    if ( !obj || !check )
        return false

    let recur = function ( obj, checker ) {
        return Object.keys( obj ).filter( function ( key ) {
            let val = obj[ key ]
            if ( is.object( val ) ) {
                return recur( val, checker[ key ] )
            } else {
                if ( is.function( checker[ key ] ) ) {
                    return checker[ key ]( val, key )
                }
                return val instanceof checker[ key ]
            }
        } ).length > 0
    }
    return recur( obj, check )


};
module.exports.is = is
