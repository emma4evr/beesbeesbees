var ForagerBee = function() {
  this.age(10);
  this.job('find pollen');
  this.color(bee.color);
  this.food(grub.food);
  this.canFly();
  this.treasureChest();
};

ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.canFly = function() {
  this.canFly = true;
};

ForagerBee.prototype.treasureChest = function() {
  this.treasureChest = [];
};

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};