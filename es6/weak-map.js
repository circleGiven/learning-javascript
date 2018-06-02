const SecretHolder = (function() {
   const secrets = new WeakMap();
   return class {
       setSecret(secret) {
           secrets.set(this, secret);
       }

       getSecret() {
           return secrets.get(this);
       }
   }
})();


const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('secret A');
console.log(a.getSecret());
b.setSecret('secret B');
console.log(b.getSecret());
// map과 weak map의 차이는 정확히 무엇인가?

const SecretHolder2 = (function() {
    const secrets = new WeakMap();
    return class {
        setSecret(secret) {
            secrets.set(this, secret);
        }

        getSecret() {
            return secrets.get(this);
        }
    }
})();

const c = new SecretHolder2();
const test = {name: 'A'};
c.setSecret(test);
console.log(c.getSecret());
test.name = 'B';
console.log(c.getSecret());

const d = new SecretHolder();
d.setSecret(test);
console.log(d.getSecret());
test.name = 'A';
console.log(d.getSecret());