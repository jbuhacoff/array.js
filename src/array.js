/*
array.js - some extensions to the javascript array object

Copyright (C) 2013 Jonathan Buhacoff

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


Version: 0.1
Requires: no dependencies

References & credits:
http://stackoverflow.com/questions/3954438/remove-item-from-array-by-value

*/

// older browsers may not have Array.indexOf
if(!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(valueToFind, startIndex) {
        startIndex = startIndex || 0;
        var i = startIndex;
        var cachedLength = this.length;
        while (i < cachedLength) {
            if(this[i] === valueToFind) { return i; }
            ++i;
        }
        return -1;
    };
}

/**
 * Arguments:  one or more values to remove from the array
 * Post-condition: all elements in the array that have the same value as any one of the arguments are removed
 * Example:   ['e','b','b','c','z'].removeAll('b','c')  == ['e','z']
 */
Array.prototype.removeAll = function() {
    var valueToRemove, argIndex = arguments.length, foundAtIndex; 
    while( argIndex > 0 && this.length > -1 ) {
        valueToRemove = arguments[--argIndex];
        while( (foundAtIndex = this.indexOf(valueToRemove)) !== -1 ) {
            this.splice(foundAtIndex,1);
        }
    }
    return this;
};

