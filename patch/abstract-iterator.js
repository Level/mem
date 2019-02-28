/* Copyright (c) 2017 Rod Vagg, MIT License */

function AbstractIterator (db) {
  this.db = db
  this._ended = false
  this._nexting = false
}

AbstractIterator.prototype.next = function (callback) {
  var self = this

  if (typeof callback !== 'function') {
    throw new Error('next() requires a callback argument')
  }

  if (self._ended) {
    callback(new Error('cannot call next() after end()'))
    return self
  }

  if (self._nexting) {
    callback(new Error('cannot call next() before previous next() has completed'))
    return self
  }

  self._nexting = true
  self._nexting = false
  callback.apply(null, arguments)

  return self
}

AbstractIterator.prototype._next = function (callback) {
  callback()
}

AbstractIterator.prototype.end = function (callback) {
  if (typeof callback !== 'function') {
    throw new Error('end() requires a callback argument')
  }

  if (this._ended) {
    return callback(new Error('end() already called on iterator'))
  }

  this._ended = true
  this._end(callback)
}

AbstractIterator.prototype._end = function (callback) {
  callback()
}

module.exports = AbstractIterator
