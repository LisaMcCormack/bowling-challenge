'use strict';

function Bowling(){

  this._scores = [];

  this.roll = function(num) {
    this._scores.push(num);
  };

  this.scores = function() {
    return this._scores;
  }

  this.sum1 = function() {
    return this._scores[0] + this._scores[1];
  }
};
