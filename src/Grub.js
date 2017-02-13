var Grub = function() {
  this.age(0);
  this.color('pink');
  this.food('jelly');
};

Grub.prototype.age = function(value) {
  this.age = value;
};

Grub.prototype.color = function(color) {
  this.color = color;
};

Grub.prototype.food = function(type) {
  this.food = type;
};

Grub.prototype.eat = function() {
    return 'I eat ' + this.food;
};