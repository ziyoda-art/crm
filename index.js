const adminBtn = document.getElementById('adminBtn');
const teacherBtn = document.getElementById('teacherBtn');
const usernameInput = document.getElementById('username');
const submitBtn = document.getElementById('submitBtn');
const loginForm = document.getElementById('loginForm');

let role = 'admin'; // default role

function setRole(newRole) {
    role = newRole;

    if (role === 'admin') {
        adminBtn.classList.add('active');
        teacherBtn.classList.remove('active');
        usernameInput.placeholder = 'Admin username';
        submitBtn.textContent = 'Admin sifatida kirish';
    } else {
        teacherBtn.classList.add('active');
        adminBtn.classList.remove('active');
        usernameInput.placeholder = "O'qituvchi username";
        submitBtn.textContent = "O'qituvchi sifatida kirish";
    }

    // Tozalash inputlar
    usernameInput.value = '';
    document.getElementById('password').value = '';
}

adminBtn.addEventListener('click', () => setRole('admin'));
teacherBtn.addEventListener('click', () => setRole('teacher'));

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    alert(
        `${role === 'admin' ? 'Admin' : "O'qituvchi"} sifatida kirish:\n` +
        `Foydalanuvchi: ${usernameInput.value}\n` +
        `Parol: ${document.getElementById('password').value}`
    );

    // Bu yerda loginni serverga yuborish yoki boshqa ishlar bo'lishi mumkin
});