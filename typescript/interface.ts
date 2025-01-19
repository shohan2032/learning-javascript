interface User {
    readonly id: number;
    username: string;
    password: string;
    email?: string;
    // check: () => boolean;
    check(): boolean; // this is also currect for methods or functions
    getCoupon(coupneName: string): number;
}

interface Admin extends User { // inheritance User interface        
    role: 'admin' | 'customer';
}

interface User { // this is called reopening of the interface
    isActive: boolean;
}

const user: User = {id: 23, username: 'shohan', password: '123', 
    check: () => { 
        return true;
    },
    getCoupon: (couponName: string) => {
        return 10;
    },
    isActive: true,
}
const admin: Admin = {id: 23, username: 'shohan', password: '123', role: 'admin', 
    check: () => { 
        return true;
    },
    getCoupon: (couponName: string) => {
        return 10;
    },
    isActive: true,
}

// differenct between type vs interface https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript
