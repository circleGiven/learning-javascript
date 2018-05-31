
function validateEmail(email) {
    return email.match(/@/) ? email : new Error(`invalid email : ${email}`);
}

const email = "chfjunegmail.com";

const validatel = validateEmail(email);
if (validatel instanceof Error) {
    console.log(`Error====> ${validatel.message}`);
} else {
    console.log(`valid email: ${validatel}`);
}


const email2 = null;

try {
    const validate = validateEmail(email2);
    // error 가 발생하면 실행되지 않는다...
    if (validate instanceof Error) {
        console.log(`Error====> ${validate.message}`);
    } else {
        console.log(`valid email: ${validate}`);
    }
} catch (e) {
    console.log(e.message);
}