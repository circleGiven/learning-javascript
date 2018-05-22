

let obj = {
  name: 'Wallance',
  bark: function() {return this.name;}  // es5
};

console.log('obj.bark() es5:', obj.bark());

obj = {
    name: 'Wallance',
    bark() {return this.name;}  // es6
};

console.log('obj.bark() es6:', obj.bark());


// es5 function
const es5Obj = {
  name: 'es5',
  greetBackwards: function() {
      const that = this;
      function getName() {
          return that.name;
      }
      return getName();
  }
};
console.log(es5Obj.greetBackwards());

const es6Obj = {
    name: 'es6',
    greetBackwards: function() {
        const getName = () => {
            return this.name;
        };
        return getName();
    }
};
console.log(es6Obj.greetBackwards());


const bruce = {name: 'Bruce'};
const madeline = {name: 'Madeline'};

function update(birthYear, occupateion) {
    this.birthYear = birthYear;
    this.occupateion = occupateion;
}
// call
update.call(bruce, 1991, 'singer');
console.log(bruce);
// apply
update.apply(madeline, [1991, 'test33']);
console.log(madeline);

// get min max value used apply function
const arrNum = [1, 31, -1,-222,414];
console.log(Math.max.apply(null, arrNum));
console.log(Math.min.apply(null, arrNum));
// get min max value used ...
console.log(Math.max(...arrNum));
console.log(Math.min(...arrNum));


const updateBruce = update.bind(bruce);
// const updateBruce = update.bind(bruce, 0);
console.log(bruce);
updateBruce(1111,'bind');
console.log(bruce);
updateBruce.call(madeline, 2222, 'mid');
console.log(madeline);