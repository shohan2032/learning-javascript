var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = /** @class */ (function () {
    function user(name, age) {
        this.name = name;
        this.age = age;
        this.isActive = true;
        this.name = name;
        this.age = age;
        this.userID = Math.random();
    }
    user.prototype.print = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", User ID: ").concat(this.userID));
    };
    return user;
}());
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser(name, age) {
        var _this = _super.call(this, name, age) || this;
        console.log("Is active: ".concat(_this.isActive));
        return _this;
    }
    return subUser;
}(user));
var u = new user("John Doe", 30);
console.log(u);
// console.log(print());
// u.userID = 34; // not allowed
var su = new subUser("Jane Doe", 25);
console.log(su);
