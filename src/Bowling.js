'use strict';

function Bowling(){

  this._scores = [];

  this.roll = function(num) {
    this._scores.push(num);
    this.isStrike();
  };

  this.scores = function() {
    return this._scores;
  };

  this.sum1 = function() {
    if(this._scores[0] + this._scores[1] < 10) return this._scores[0] + this._scores[1];
    if(this._scores[0] === 10 && this._scores[2] === 10 && this._scores[4] === 10 ) return 30;
    if(this._scores[0] === 10 && this._scores[2] === 10 && this._scores[4] !== 10 ) return 20 + this._scores[4] + this._scores[5];
    if(this._scores[0] + this._scores[1] === 10) return this._scores[0] + this._scores[1] + this._scores[2];
  };

  this.sum2 = function() {
    if(this._scores[2] + this._scores[3] < 10) return this._scores[0] + this._scores[1];
    if(this._scores[2] === 10 && this._scores[4] === 10 && this._scores[6] === 10 ) return 30;
    if(this._scores[2] === 10 && this._scores[4] === 10 && this._scores[6] !== 10 ) return 20 + this._scores[6] + this._scores[7];
    if(this._scores[2] + this._scores[3] === 10) return this._scores[2] + this._scores[3] + this._scores[4];
  };

  this.isStrike = function() {
    var i = 0;
    var n = 1;
    do {
      if(this._scores[i] === 10) this._scores[n] = "strike!";
      i += 2;
      n += 2;
    }
    while (i < 16);
  };
};
