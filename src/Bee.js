var Bee = function() {
  this.age(5);
  this.color('yellow');
  this.food(grub.food);
  this.job('keep on growing');
};

Bee.prototype = Object.create(Grub.prototype);

Bee.prototype.constructor = Bee;

Bee.prototype.job = function(title) {
  this.job = title;
};