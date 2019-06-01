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
  // it('lets you roll two rolls,', function() {
  //   expect((bowling.frame()).length).toEqual(2);
  // });
});
