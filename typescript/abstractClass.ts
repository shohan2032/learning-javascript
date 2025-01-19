abstract class takePhoto {
    constructor(public url: string, public id: string) {

    }

    abstract getImageUrl(id: string): string

    getReelTime(): number { 
        return 6;
    }
}

class Camera extends takePhoto {
    constructor(public url: string, public id: string) {
        super(url, id);
    }
    getImageUrl(id: string): string {
        return `${this.url}/${id}.jpg`;
    }
}

let shohan = new Camera("test","test")
console.log(shohan.getImageUrl("test"));
console.log(shohan.getReelTime());