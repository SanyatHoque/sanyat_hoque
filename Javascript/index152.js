let user = {
    username: null,
    password: null,
    greet: function () {
        if (user.username !== null) {
            return `Hello, I'm user ${this.username}`
        } else {
            return `Please assign a username value`
        }
    },
    updatePassword: function (str) { this.password = str },
    updaterUsername: function (str) { this.username = str }
};


user.updaterUsername('Gagan');
user.updatePassword('kingSlayer1994');
console.log(user.greet());

