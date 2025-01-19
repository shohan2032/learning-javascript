var user = { id: 23, username: 'shohan', password: '123',
    check: function () {
        return true;
    },
    getCoupon: function (couponName) {
        return 10;
    },
    isActive: true, };
var admin = { id: 23, username: 'shohan', password: '123', role: 'admin',
    check: function () {
        return true;
    },
    getCoupon: function (couponName) {
        return 10;
    },
    isActive: true, };
// differenct between type vs interface https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript
