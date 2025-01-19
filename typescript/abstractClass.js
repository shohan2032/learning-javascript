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
var takePhoto = /** @class */ (function () {
    function takePhoto(url, id) {
        this.url = url;
        this.id = id;
    }
    takePhoto.prototype.getReelTime = function () {
        return 6;
    };
    return takePhoto;
}());
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera(url, id) {
        var _this = _super.call(this, url, id) || this;
        _this.url = url;
        _this.id = id;
        return _this;
    }
    Camera.prototype.getImageUrl = function (id) {
        return "".concat(this.url, "/").concat(id, ".jpg");
    };
    return Camera;
}(takePhoto));
var shohan = new Camera("test", "test");
console.log(shohan.getImageUrl("test"));
console.log(shohan.getReelTime());
