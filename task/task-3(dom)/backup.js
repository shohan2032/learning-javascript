// Utility functions for localStorage management
const saveToLocalStorage = () => {
    localStorage.setItem('registered_users', JSON.stringify(Array.from(registered_user)));
    localStorage.setItem('user_balances', JSON.stringify(Array.from(user_valance)));
    localStorage.setItem('transaction_history', JSON.stringify(Array.from(tranjection_history)));
};

const loadFromLocalStorage = () => {
    const savedUsers = localStorage.getItem('registered_users');
    const savedBalances = localStorage.getItem('user_balances');
    const savedHistory = localStorage.getItem('transaction_history');

    if (savedUsers) {
        registered_user = new Map(JSON.parse(savedUsers));
    } else {
        // Initialize with default users if no saved data
        registered_user = new Map();
        registered_user.set('shohan', '1234');
        registered_user.set('arman', '1234');
    }

    if (savedBalances) {
        user_valance = new Map(JSON.parse(savedBalances));
    } else {
        // Initialize with default balances if no saved data
        user_valance = new Map();
        user_valance.set('shohan', 100);
        user_valance.set('arman', 500);
    }

    if (savedHistory) {
        tranjection_history = new Map(JSON.parse(savedHistory));
    } else {
        // Initialize with default history if no saved data
        tranjection_history = new Map();
        tranjection_history.set('shohan', [
            {
                date: new Date().toISOString(),
                amount: 100,
                type: 'credit',
                user: 'arman'
            }
        ]);
        tranjection_history.set('arman', [
            {
                date: new Date().toISOString(),
                amount: 100,
                type: 'debit',
                user: 'shohan'
            }
        ]);
    }
};

// Initialize data structures
let registered_user, user_valance, tranjection_history;

// Auto-logout timer management
let logoutTimer;

const startLogoutTimer = (username) => {
    clearTimeout(logoutTimer);
    logoutTimer = setTimeout(() => {
        alert('Session expired. Please login again.');
        localStorage.removeItem('currentUser');
        main.innerHTML = '';
        login();
    }, 2 * 60 * 1000); // 2 minutes
};

const resetLogoutTimer = (username) => {
    clearTimeout(logoutTimer);
    startLogoutTimer(username);
};

const main = document.querySelector('#main');

// function to login users
const login = () => {
    // Load saved data when app starts
    loadFromLocalStorage();
    
    const div = document.createElement('div');
    div.innerText = "Enter Your Username And Password to Login."
    div.classList.add('font-bold', 'bg-green-100', 'flex', 'flex-col')

    const login = document.createElement('input');
    login.type = 'text';
    login.id = 'login';
    login.placeholder = 'Enter Your Username';
    login.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-2');

    const password = document.createElement('input');
    password.type = 'password';
    password.id = 'password';
    password.placeholder = 'Enter Your Password';
    password.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-2', 'mt-2');

    const submit = document.createElement('button');
    submit.id = 'submit';
    submit.innerText = 'Login';
    submit.classList.add('border-2', 'bg-blue-200', 'p-3');

    const register = document.createElement('button');
    register.id ='register';
    register.innerText = 'Register';
    register.classList.add('border-2', 'bg-blue-200', 'p-3');

    div.appendChild(login);
    div.appendChild(password);
    div.appendChild(submit);
    div.appendChild(register);

    main.innerHTML = '';
    main.appendChild(div);

    // Check for existing session
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        userInfo(currentUser);
        return;
    }

    document.querySelector('#submit').addEventListener('click', (event) => {
        event.preventDefault();
        const username = document.querySelector('#login').value;
        const password = document.querySelector('#password').value;
        if(registered_user.has(username) && registered_user.get(username) === password) {
            localStorage.setItem('currentUser', username);
            startLogoutTimer(username);
            userInfo(username);
        } else {
            alert('Invalid username or password');
        }
    });

    document.querySelector('#register').addEventListener('click', (event) => {
        registerUser();
    });
}
    
const userInfo = (username) => {
    // Reset logout timer on any user interaction
    resetLogoutTimer(username);

    const div = document.createElement('div');
    div.classList.add('font-bold', 'bg-green-100', 'flex', 'flex-col')

    const h1 = document.createElement('h1');
    h1.innerText = `Welcome ${username}`;
    
    const h2 = document.createElement('h2');
    h2.innerText = `Your current valance is ${user_valance.get(username)}`;

    const deposit_money = document.createElement('button');
    deposit_money.id = 'deposit_money';
    deposit_money.innerText = 'Deposit Money';
    deposit_money.classList.add('border-2', 'bg-blue-200', 'p-3');

    const withdraw_money = document.createElement('button');
    withdraw_money.id = 'withdraw_money';
    withdraw_money.innerText = 'Withdraw Money';
    withdraw_money.classList.add('border-2', 'bg-blue-200', 'p-3');

    const logout = document.createElement('button');
    logout.id = 'logout';
    logout.innerText = 'Logout';
    logout.classList.add('border-2', 'bg-blue-200', 'p-3');

    const tranjectionHistory = document.createElement('div');
    tranjectionHistory.id = 'tranjection_history';
    tranjectionHistory.innerText = 'Your Tranjection History';
    tranjectionHistory.classList.add('font-bold', 'bg-green-100', 'flex', 'flex-col');

    const ul = document.createElement('ul');
    tranjection_history.forEach((value, key) => {
        if(key === username) {
            value.forEach((obj, index) => {
                if(index < 5) {
                    const li = document.createElement('li');
                    const date = new Date(obj.date);
                    li.innerText = `Date: ${date.toLocaleString()}, Amount: ${obj.amount}, Type: ${obj.type}${obj.user ? ', User: ' + obj.user : ''}`;
                    ul.appendChild(li);
                }
            });
        }
    });

    tranjectionHistory.appendChild(ul);

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(deposit_money);
    div.appendChild(withdraw_money);
    div.appendChild(logout);

    main.innerHTML = '';
    main.appendChild(div);
    main.appendChild(tranjectionHistory);
    
    document.querySelector('#deposit_money').addEventListener('click', (event) => {
        resetLogoutTimer(username);
        depositMoney(username);
    });

    document.querySelector('#withdraw_money').addEventListener('click', (event) => {
        resetLogoutTimer(username);
        withdrawMoney(username);
    });

    document.querySelector('#logout').addEventListener('click', (event) => {
        clearTimeout(logoutTimer);
        localStorage.removeItem('currentUser');
        main.innerHTML = '';
        login();
    });
}

// function to register users
const registerUser = () => {
    const div = document.createElement('div');
    div.innerText = "Enter Your Username and Password to Register."
    div.classList.add('font-bold', 'bg-green-100', 'flex', 'flex-col')

    const username = document.createElement('input');
    username.type = 'text';
    username.id = 'username';
    username.placeholder = 'Enter Your Username';
    username.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-2');

    const password = document.createElement('input');
    password.type = 'password';
    password.id = 'password';
    password.placeholder = 'Enter Your Password';
    password.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-2', 'mt-2');

    const submit = document.createElement('button');
    submit.id ='submit';
    submit.innerText = 'Register';
    submit.classList.add('border-2', 'bg-blue-200', 'p-3');

    div.appendChild(username);
    div.appendChild(password);
    div.appendChild(submit);
    main.innerHTML = '';
    main.appendChild(div);

    document.querySelector('#submit').addEventListener('click', (event) => {
        event.preventDefault();
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        if(registered_user.has(username)) {
            alert('Username already exists');
        } else {
            registered_user.set(username, password);
            user_valance.set(username, 0);
            tranjection_history.set(username, []);
            saveToLocalStorage();
            localStorage.setItem('currentUser', username);
            startLogoutTimer(username);
            userInfo(username);
        }
    });
}

const depositMoney = (username) => {
    const div = document.createElement('div');
    div.classList.add('font-bold', 'bg-green-100', 'flex', 'flex-col')

    const toUser = document.createElement('input');
    toUser.type = 'text';
    toUser.id = 'toUser';
    toUser.placeholder = 'Enter Username to Deposit';
    toUser.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-2');

    const amount = document.createElement('input');
    amount.type = 'number';
    amount.id = 'amount';
    amount.placeholder = 'Enter Amount';
    amount.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-2');

    const submit = document.createElement('button');
    submit.id ='submit';
    submit.innerText = 'Deposit';
    submit.classList.add('border-2', 'bg-blue-200', 'p-3');

    div.appendChild(toUser);
    div.appendChild(amount);
    div.appendChild(submit);
    main.innerHTML = '';
    main.appendChild(div);

    document.querySelector('#submit').addEventListener('click', (event) => {
        event.preventDefault();
        const toUser = document.querySelector('#toUser').value;
        const amount = parseInt(document.querySelector('#amount').value);

        if(!registered_user.has(toUser)) {
            alert('User does not exist whom you are trying to deposit');
        } else if(toUser === username) {
            alert('Cannot deposit to yourself');
        } else if(user_valance.get(username) < amount) {
            alert('Insufficient balance');
        } else {
            user_valance.set(username, user_valance.get(username) - amount);
            user_valance.set(toUser, user_valance.get(toUser) + amount);
            tranjection_history.get(username).push({
                date: new Date().toISOString(),
                amount: amount,
                type: 'debit',
                user: toUser
            });
            tranjection_history.get(toUser).push({
                date: new Date().toISOString(),
                amount: amount,
                type: 'credit',
                user: username
            });
            saveToLocalStorage();
            resetLogoutTimer(username);
            alert(`Successfully deposited ${amount} to ${toUser}`);
            userInfo(username);
        }
    });
}

const withdrawMoney = (username) => {
    const div = document.createElement('div');
    div.classList.add('font-bold', 'bg-green-100', 'flex', 'flex-col')

    const amount = document.createElement('input');
    amount.type = 'number';
    amount.id = 'amount';
    amount.placeholder = 'Enter Amount';
    amount.classList.add('bg-white', 'border-2', 'rounded-lg', 'p-2');

    const submit = document.createElement('button');
    submit.id ='submit';
    submit.innerText = 'Withdraw';
    submit.classList.add('border-2', 'bg-blue-200', 'p-3');

    div.appendChild(amount);
    div.appendChild(submit);
    main.innerHTML = '';
    main.appendChild(div);

    document.querySelector('#submit').addEventListener('click', (event) => {
        event.preventDefault();
        const amount = parseInt(document.querySelector('#amount').value);

        if(user_valance.get(username) < amount) {
            alert('Insufficient balance');
        } else {
            user_valance.set(username, user_valance.get(username) - amount);
            tranjection_history.get(username).push({
                date: new Date().toISOString(),
                amount: amount,
                type: 'withdraw'
            });
            saveToLocalStorage();
            resetLogoutTimer(username);
            alert(`Successfully withdrew ${amount}`);
            userInfo(username);
        }
    });
}

// Initialize the application
loadFromLocalStorage();
login();