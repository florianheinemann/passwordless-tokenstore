'use strict';

function TokenStore() {

}

TokenStore.prototype.authenticate = function(token, callback) {
	throw new Error('TokenStore shall never be called in its abstract form');
}

TokenStore.prototype.storeOrUpdate = function(token, uid, msToLive, originUrl, callback) {
	throw new Error('TokenStore shall never be called in its abstract form');
}

TokenStore.prototype.remove = function(token, callback) {
	throw new Error('TokenStore shall never be called in its abstract form');
}

TokenStore.prototype.clear = function(callback) {
	throw new Error('TokenStore shall never be called in its abstract form');
}

TokenStore.prototype.length = function(callback) {
	throw new Error('TokenStore shall never be called in its abstract form');
}

module.exports = TokenStore;