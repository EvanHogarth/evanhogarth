/*
  Johan Karlsson
  https://github.com/DonKarlssonSan/vectory
  MIT License, see Details View

*/

"use strict";

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    return new Vector(
      this.x + v.x,
      this.y + v.y);
  }

  addTo(v) {
    this.x += v.x;
    this.y += v.y;
  }

  sub(v) {
    return new Vector(
      this.x - v.x,
      this.y - v.y);
  }

  subFrom(v) {
    this.x -= v.x;
    this.y -= v.y;
  }

  mult(n) {
    return new Vector(this.x * n, this.y * n);
  }

  multTo(n) {
    this.x *= n;
    this.y *= n;
  }

  div(n) {
    return new Vector(this.x / n, this.y / n);
  }

  divTo(n) {
    this.x /= n;
    this.y /= n;
  }

  setAngle(angle) {
    var length = this.getLength();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  setLength(length) {
    var angle = this.getAngle();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  getAngle() {
    return Math.atan2(this.y, this.x);
  }

  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  getLengthSq() {
    return this.x * this.x + this.y * this.y;
  }

  distanceTo(v) {
    return this.sub(v).getLength();
  }

  distanceToSq(v) {
    return this.sub(v).getLengthSq();
  }

  manhattanDistanceTo(v) {
    return Math.abs(v.x - this.x) + Math.abs(v.y - this.y);
  }

  copy() {
    return new Vector(this.x, this.y);
  }

  rotate(angle) {
    return new Vector(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
  }
}
