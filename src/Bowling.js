'use strict';

function Bowling(){

  this._scores = [];
  var i = 0;
  var n = 1;


  this.roll = function(num) {
    this._scores.push(num);
    this.Strike();

  };

  this.scores = function() {
    return this._scores;
  };

  this.sum1 = function() {
    this.lessTen();
    this.Spare();
    this.threeStrikes();
    this.twoStrikes();
  };

  this.Strike = function() {
    do {
      if(this._scores[i] === 10) this._scores[n] = "strike!";
      i += 2;
      n += 2;
    }
    while (i < 16);
  };

  this.Spare = function() {
    do {
      if(this._scores[i] + this._scores[i+1] === 10) return this._scores[i] + this._scores[i+1] + this._scores[i+2];
      i += 2;
      n += 2;
    }
    while (i < 16);
  }

  this.lessTen = function() {
    do {
      if(this._score[i] + this._score[i+1] < 10 ) return this._score[i] + this._score[i+1]
      i += 2;
      n += 2;
    }
    while (i < 16);
  };

  this.threeStrikes = function() {
    do {
      if(this._scores[i] === 10 && this._scores[i+2] === 10 && this._scores[i+4] === 10 ) return 30
      i += 2;
      n += 2;
    }
    while (i < 16);
  };

  this.twoStrikes = function() {
    do {
      if(this._scores[i] === 10 && this._scores[i+2] === 10 && this._scores[i+4] !== 10) return 20 + this._scores[i+4] + this._scores[i+5]
      i += 2;
      n += 2;
    }
    while (i < 16);
  };
};
