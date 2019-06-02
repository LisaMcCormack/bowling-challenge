'use strict';

describe('Bowling', function() {
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('lets the player input their score', function() {
    bowling.roll(1);
    expect(bowling.scores()).toEqual([1]);
  });

  it('lets a player input two scores', function() {
    bowling.roll(1);
    bowling.roll(4);
    expect(bowling.scores()).toEqual([1, 4]);
  });

  it('will give the score if all 10 pins are not knocked down in the first frame', function() {
    bowling.roll(1);
    bowling.roll(4);
    expect(bowling.sum1()).toEqual(5);
  });

  it('will give the correct score if the player scores a spare', function() {
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(5);
    expect(bowling.sum1()).toEqual(15);
  });

  it('scores correctly for 3 strikes in a row', function() {
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    expect(bowling.sum1()).toEqual(30);
  });

  it('scores correctly for 2 strikes in a row', function() {
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(5);
    bowling.roll(2);
    expect(bowling.sum1()).toEqual(27);
  })
});
