"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAsyncContext;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var idPointer = 0;
function createAsyncContext() {
  var registry = {};
  var chunkRegistry = {};
  return {
    getNextId: function getNextId() {
      idPointer += 1;
      return idPointer;
    },
    addChunkName: function addChunkName(chunkName) {
      chunkRegistry[chunkName] = true;
    },
    resolved: function resolved(id) {
      registry[id] = true;
    },
    getState: function getState() {
      return {
        resolved: Object.keys(registry).reduce(function (acc, cur) {
          return Object.assign(acc, _defineProperty({}, cur, true));
        }, {})
      };
    },
    getChunkState: function getChunkState() {
      return {
        resolved: Object.keys(chunkRegistry).reduce(function (acc, cur) {
          return Object.assign(acc, _defineProperty({}, cur, true));
        }, {})
      };
    }
  };
}