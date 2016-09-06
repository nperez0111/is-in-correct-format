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
    extender = require( 'objextension' )
let please = null
    /*example usage
    var isItInCorrectFormat= require('is-in-correct-format');
    isItInCorrectFormat({a:2},{key:String,value:Number})
    var is=IsItInCorrectformat.is;
    isItInCorrectFormat({a:{b:3}},{a:{b:is.number}})
    isItInCorrectFormat({a:{b:3}},{a:{b:a=>is.number(a)||is.function(a)}})
    */
module.exports = ( obj, check, allValues ) => {
    let flag = false
    if ( !obj || !check )
        return false
    if ( allValues === undefined ) {
        allValues = a => true
        flag = true
    }

    let checkAllVals = function ( obj, checker ) {
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
    return traverseObj( obj, check ) && checkAllVals( obj, allValues )


};
module.exports.is = is
