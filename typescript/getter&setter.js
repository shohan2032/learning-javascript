var user = /** @class */ (function () {
    function user() {
        this._id = 1;
    }
    Object.defineProperty(user.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    return user;
}());
var u = new user();
u.id = 123;
console.log(u.id); // output: 123
