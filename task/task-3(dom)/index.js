const tailwindClasses = {
    container: 'min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white',
    card: 'bg-white text-black rounded-lg shadow-lg p-6 w-full max-w-sm',
    input: 'w-full px-4 py-2 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400',
    buttonPrimary: 'w-full bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-700',
    buttonSecondary: 'w-full bg-gray-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-gray-700',
    header: 'text-2xl font-bold text-center mb-4',
    subHeader: 'text-lg font-semibold mt-2',
    list: 'mt-4 space-y-2',
    listItem: 'bg-gray-200 text-black p-3 rounded-lg shadow-sm',
};

// Utility functions for localStorage
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
        registered_user = new Map();
        registered_user.set('shohan', '1234');
        registered_user.set('arman', '1234');
    }

    if (savedBalances) {
        user_valance = new Map(JSON.parse(savedBalances));
    } else {
        user_valance = new Map();
        user_valance.set('shohan', 100);
        user_valance.set('arman', 500);
    }

    if (savedHistory) {
        tranjection_history = new Map(JSON.parse(savedHistory));
    } else {
        tranjection_history = new Map();
        tranjection_history.set('shohan', [
            {
                date: new Date().toISOString(),
                amount: 100,
                type: 'credit',
                user: 'arman',
            },
        ]);
        tranjection_history.set('arman', [
            {
                date: new Date().toISOString(),
                amount: 100,
                type: 'debit',
                user: 'shohan',
            },
        ]);
    }
};


let registered_user, user_valance, tranjection_history;
let logoutTimer;

const startLogoutTimer = (username) => {
    clearTimeout(logoutTimer);
    logoutTimer = setTimeout(() => {
        alert('Session expired. Please login again.');
        localStorage.removeItem('currentUser');
        main.innerHTML = '';
        login();
    }, 2 * 60 * 1000); 
};

const resetLogoutTimer = (username) => {
    clearTimeout(logoutTimer);
    startLogoutTimer(username);
};

const main = document.querySelector('#main');

// Function to render login screen
const login = () => {
    // loadFromLocalStorage();
    main.className = tailwindClasses.container;

    const card = document.createElement('div');
    card.className = tailwindClasses.card;

    const header = document.createElement('h1');
    header.className = tailwindClasses.header;
    header.innerText = 'Login';

    const loginInput = document.createElement('input');
    loginInput.type = 'text';
    loginInput.id = 'login';
    loginInput.placeholder = 'Enter Your Username';
    loginInput.className = tailwindClasses.input;

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.placeholder = 'Enter Your Password';
    passwordInput.className = tailwindClasses.input;

    const submitButton = document.createElement('button');
    submitButton.id = 'submit';
    submitButton.className = tailwindClasses.buttonPrimary;
    submitButton.innerText = 'Login';

    const registerButton = document.createElement('button');
    registerButton.id = 'register';
    registerButton.className = tailwindClasses.buttonSecondary;
    registerButton.innerText = 'Register';

    card.appendChild(header);
    card.appendChild(loginInput);
    card.appendChild(passwordInput);
    card.appendChild(submitButton);
    card.appendChild(registerButton);

    main.innerHTML = '';
    main.appendChild(card);

    document.querySelector('#submit').addEventListener('click', () => {
        const username = loginInput.value.trim();
        const password = passwordInput.value.trim();
        if (registered_user.has(username) && registered_user.get(username) === password) {
            localStorage.setItem('currentUser', username);
            startLogoutTimer(username);
            userInfo(username);
        } else {
            alert('Invalid username or password.');
        }
    });

    document.querySelector('#register').addEventListener('click', registerUser);
};

// Function to show user info
const userInfo = (username) => {
    resetLogoutTimer(username);
    main.className = tailwindClasses.container;

    const card = document.createElement('div');
    card.className = tailwindClasses.card;

    const header = document.createElement('h1');
    header.className = tailwindClasses.header;
    header.innerText = `Welcome, ${username}`;

    const balanceInfo = document.createElement('p');
    balanceInfo.className = tailwindClasses.subHeader;
    balanceInfo.innerText = `Your balance: $${user_valance.get(username)}`;

    const depositButton = document.createElement('button');
    depositButton.className = tailwindClasses.buttonPrimary;
    depositButton.innerText = 'Deposit Money';
    depositButton.addEventListener('click', () => depositMoney(username));

    const withdrawButton = document.createElement('button');
    withdrawButton.className = tailwindClasses.buttonSecondary;
    withdrawButton.innerText = 'Withdraw Money';
    withdrawButton.addEventListener('click', () => withdrawMoney(username));

    const transferButton = document.createElement('button');
    transferButton.className = tailwindClasses.buttonPrimary;
    transferButton.innerText = 'Transfer Money';
    transferButton.addEventListener('click', () => transferMoney(username));

    const logoutButton = document.createElement('button');
    logoutButton.className = tailwindClasses.buttonSecondary;
    logoutButton.innerText = 'Logout';
    logoutButton.addEventListener('click', () => {
        clearTimeout(logoutTimer);
        localStorage.removeItem('currentUser');
        login();
    });

    const transactionList = document.createElement('div');
    transactionList.className = tailwindClasses.list;
    tranjection_history.get(username)?.slice(0, 5).forEach((entry) => {
        const item = document.createElement('div');
        item.className = tailwindClasses.listItem;
        item.innerText = `Date: ${new Date(entry.date).toLocaleString()}, Amount: ${entry.amount}, Type: ${entry.type}, Account: ${entry.user}`;
        transactionList.appendChild(item);
    });

    card.appendChild(header);
    card.appendChild(balanceInfo);
    card.appendChild(depositButton);
    card.appendChild(withdrawButton);
    card.appendChild(transferButton);
    card.appendChild(logoutButton);
    card.appendChild(transactionList);

    main.innerHTML = '';
    main.appendChild(card);
};

// Register user function
const registerUser = () => {
    main.className = tailwindClasses.container;

    const card = document.createElement('div');
    card.className = tailwindClasses.card;

    const header = document.createElement('h1');
    header.className = tailwindClasses.header;
    header.innerText = 'Register';

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.id = 'username';
    usernameInput.placeholder = 'Enter New Username';
    usernameInput.className = tailwindClasses.input;

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.placeholder = 'Enter New Password';
    passwordInput.className = tailwindClasses.input;

    const registerButton = document.createElement('button');
    registerButton.className = tailwindClasses.buttonPrimary;
    registerButton.innerText = 'Register';
    registerButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        if(registered_user.has(username)) {
            alert('Username already exists!');
        } else if (username && password) {
            registered_user.set(username, password);
            user_valance.set(username, 0);
            tranjection_history.set(username, []);
            saveToLocalStorage();
            alert('Registration successful! Please login.');
            login();
        } else {
            alert('Both fields are required!');
        }
    });

    card.appendChild(header);
    card.appendChild(usernameInput);
    card.appendChild(passwordInput);
    card.appendChild(registerButton);

    main.innerHTML = '';
    main.appendChild(card);
};

// Deposit money function
const depositMoney = (username) => {
    const amount = prompt('Enter the amount to deposit:');
    if (amount && !isNaN(amount) && amount > 0) {
        user_valance.set(username, user_valance.get(username) + parseFloat(amount));
        tranjection_history.get(username).unshift({
            date: new Date().toISOString(),
            amount: parseFloat(amount),
            type: 'credit',
            user: 'Self',
        });
        saveToLocalStorage();
        userInfo(username);
    } else {
        alert('Invalid amount!');
    }
};

// Withdraw money function
const withdrawMoney = (username) => {
    const amount = prompt('Enter the amount to withdraw:');
    if (amount && !isNaN(amount) && amount > 0 && amount <= user_valance.get(username)) {
        user_valance.set(username, user_valance.get(username) - parseFloat(amount));
        tranjection_history.get(username).unshift({
            date: new Date().toISOString(),
            amount: parseFloat(amount),
            type: 'debit',
            user: 'Self'
        });
        saveToLocalStorage();
        userInfo(username);
    } else {
        alert('Invalid or insufficient amount!');
    }
};

const transferMoney = (username) => {
    const toUsername = prompt('Enter the username to transfer to:');
    const amount = prompt('Enter the amount to transfer:');
    if(toUsername === username) {
        alert('Cannot transfer to yourself!');
    } else if (toUsername && amount && !isNaN(amount) && amount > 0 && amount <= user_valance.get(username)) {
        user_valance.set(username, user_valance.get(username) - parseFloat(amount));
        user_valance.set(toUsername, user_valance.get(toUsername) + parseFloat(amount));
        tranjection_history.get(username).unshift({
            date: new Date().toISOString(),
            amount: parseFloat(amount),
            type: 'debit',
            user: toUsername,
        });
        tranjection_history.get(toUsername).unshift({
            date: new Date().toISOString(),
            amount: parseFloat(amount),
            type: 'credit',
            user: toUsername,
        });
        saveToLocalStorage();
        userInfo(username);
    } else {
        alert('Invalid or insufficient amount!');
    }
}

loadFromLocalStorage();
const currentUser = localStorage.getItem('currentUser');
if (currentUser) {
    startLogoutTimer(currentUser);
    userInfo(currentUser);
} else {
    login();
}
