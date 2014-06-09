'use strict';

function TokenStore() {

}

/**
 * Checks if the provided token is valid and if yes, provides the 
 * linked user details
 * @param  {String}   token to be authenticated
 * @param  {Function} callback of the format (error, user, referrer)
 * error will be null if no error occurred else user and referrer will
 * be null. If the token was not found user will be null. Otherwise,
 * user will contain the UID of the user and referrer will (if provided
 * when the token was stored) the original URL requested
 */
TokenStore.prototype.authenticate = function(token, callback) {
	throw new Error('TokenStore shall never be called in its abstract form');
}

/**
 * Stores a new token / user ID combination or updates the token of an
 * existing user ID if that ID already exists. Hence, a user can only
 * have one valid token at a time
 * @param  {String}   token Token that allows authentication of _uid_
 * @param  {String}   uid Unique identifier of an user
 * @param  {Number}   msToLive Validity of the token in ms
 * @param  {String}   originUrl Originally requested URL or null
 * @param  {Function} callback Called with callback(error) in case of an
 * error or as callback() if the token was successully stored / updated
 */
TokenStore.prototype.storeOrUpdate = function(token, uid, msToLive, originUrl, callback) {
	throw new Error('TokenStore shall never be called in its abstract form');
}

/**
 * Invalidates and removes a token
 * @param  {String}   token Token for which the record shall be removed
 * @param  {Function} callback called with callback(error) in case of an
 * error or as callback() if the token was successully invalidated
 */
TokenStore.prototype.invalidateToken = function(token, callback) {
	throw new Error('TokenStore shall never be called in its abstract form');
}

/**
 * Invalidates and removes a user and the linked token
 * @param  {String}   uid User ID for which the record shall be removed
 * @param  {Function} callback called with callback(error) in case of an
 * error or as callback() if the uid was successully invalidated
 */
TokenStore.prototype.invalidateUser = function(uid, callback) {
	throw new Error('TokenStore shall never be called in its abstract form');
}

/**
 * Removes and invalidates all token
 * @param  {Function} callback Called with callback(error) in case of an
 * error or as callback() if the token was successully stored / updated
 */
TokenStore.prototype.clear = function(callback) {
	throw new Error('TokenStore shall never be called in its abstract form');
}

/**
 * Number of tokens stored (no matter the validity)
 * @param  {Function} callback Called with callback(null, count) in case
 * of success or with callback(error) in case of an error
 */
TokenStore.prototype.length = function(callback) {
	throw new Error('TokenStore shall never be called in its abstract form');
}

module.exports = TokenStore;