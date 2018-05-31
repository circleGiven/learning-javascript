const u1 = {name: 'Cynthia'};
const u2 = {name: 'Jackson'};
const u3 = {name: 'Olive'};


const userRoles = new Map();
userRoles.set(u1, 'USER');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');
userRoles.set('test', 'Admin');
console.log(userRoles);

console.log(userRoles.has(u1));
console.log(userRoles.get(u1));
console.log(userRoles.size);

// keys
for(let u of userRoles.keys()) {
    console.log(u.name);
}

// values
for(let r of userRoles.values()) {
    console.log(r);
}

console.log(userRoles.values());

// get array
console.log([...userRoles.values()]);

// clear map
userRoles.clear();
console.log(userRoles.size);