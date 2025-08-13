// Davomat tizimi JavaScript

// Guruhlar va ulardagi o'quvchilar
const groups = {
    group1: {
        name: "Og'abek 1-guruh",
        students: [
            { id: 1, name: "Ahmed Karimov", phone: "+998 90 123 45 67" },
            { id: 2, name: "Malika Usmonova", phone: "+998 91 234 56 78" },
            { id: 3, name: "Bobur Rahmonov", phone: "+998 93 345 67 89" },
            { id: 4, name: "Sevara Nazarova", phone: "+998 94 456 78 90" },
            { id: 5, name: "Dilnoza Tosheva", phone: "+998 95 567 89 01" },
            { id: 6, name: "Jasur Tursunov", phone: "+998 96 678 90 12" },
            { id: 7, name: "Nigora Karimova", phone: "+998 97 789 01 23" },
            { id: 8, name: "Otabek Rahimov", phone: "+998 98 890 12 34" },
            { id: 9, name: "Ziyoda Nazarova", phone: "+998 99 901 23 45" },
            { id: 10, name: "Farrux Tursunov", phone: "+998 90 012 34 56" },
            { id: 11, name: "Madina Karimova", phone: "+998 91 123 45 67" },
            { id: 12, name: "Sardor Rahimov", phone: "+998 92 234 56 78" },
            { id: 13, name: "Gulnoza Tosheva", phone: "+998 93 345 67 89" },
            { id: 14, name: "Aziz Tursunov", phone: "+998 94 456 78 90" },
            { id: 15, name: "Dilnoza Tosheva", phone: "+998 95 567 89 01" }
        ]
    },
    group2: {
        name: "Og'abek 2-guruh",
        students: [
            { id: 16, name: "Alisher Karimov", phone: "+998 90 123 45 67" },
            { id: 17, name: "Zarina Usmonova", phone: "+998 91 234 56 78" },
            { id: 18, name: "Ravshan Rahmonov", phone: "+998 93 345 67 89" },
            { id: 19, name: "Nodira Nazarova", phone: "+998 94 456 78 90" },
            { id: 20, name: "Azamat Tursunov", phone: "+998 95 567 89 01" },
            { id: 21, name: "Shaxzoda Karimova", phone: "+998 96 678 90 12" },
            { id: 22, name: "Javlon Rahimov", phone: "+998 97 789 01 23" },
            { id: 23, name: "Munisa Tosheva", phone: "+998 98 890 12 34" },
            { id: 24, name: "Oybek Tursunov", phone: "+998 99 901 23 45" },
            { id: 25, name: "Nilufar Karimova", phone: "+998 90 012 34 56" },
            { id: 26, name: "Sardor Rahimov", phone: "+998 91 123 45 67" },
            { id: 27, name: "Madina Tursunova", phone: "+998 92 234 56 78" }
        ]
    },
    group3: {
        name: "Ubaydullo 1-guruh",
        students: [
            { id: 28, name: "Sardor Karimov", phone: "+998 90 123 45 67" },
            { id: 29, name: "Gulchehra Usmonova", phone: "+998 91 234 56 78" },
            { id: 30, name: "Firdavs Rahmonov", phone: "+998 93 345 67 89" },
            { id: 31, name: "Shahzoda Nazarova", phone: "+998 94 456 78 90" },
            { id: 32, name: "Behruz Tursunov", phone: "+998 95 567 89 01" },
            { id: 33, name: "Nigora Karimova", phone: "+998 96 678 90 12" },
            { id: 34, name: "Otabek Rahimov", phone: "+998 97 789 01 23" },
            { id: 35, name: "Ziyoda Tosheva", phone: "+998 98 890 12 34" },
            { id: 36, name: "Farrux Tursunov", phone: "+998 99 901 23 45" },
            { id: 37, name: "Madina Karimova", phone: "+998 90 012 34 56" },
            { id: 38, name: "Sardor Rahimov", phone: "+998 91 123 45 67" },
            { id: 39, name: "Gulnoza Tosheva", phone: "+998 92 234 56 78" },
            { id: 40, name: "Aziz Tursunov", phone: "+998 93 345 67 89" },
            { id: 41, name: "Shahnoza Karimova", phone: "+998 94 456 78 90" },
            { id: 42, name: "Alisher Tursunov", phone: "+998 95 567 89 01" },
            { id: 43, name: "Zarina Karimova", phone: "+998 96 678 90 12" },
            { id: 44, name: "Ravshan Rahimov", phone: "+998 97 789 01 23" },
            { id: 45, name: "Nodira Tosheva", phone: "+998 98 890 12 34" }
        ]
    },
    group4: {
        name: "Amriddin 1-guruh",
        students: [
            { id: 46, name: "Alisher Karimov", phone: "+998 90 123 45 67" },
            { id: 47, name: "Zarina Usmonova", phone: "+998 91 234 56 78" },
            { id: 48, name: "Ravshan Rahmonov", phone: "+998 93 345 67 89" },
            { id: 49, name: "Nodira Nazarova", phone: "+998 94 456 78 90" },
            { id: 50, name: "Azamat Tursunov", phone: "+998 95 567 89 01" },
            { id: 51, name: "Shaxzoda Karimova", phone: "+998 96 678 90 12" },
            { id: 52, name: "Javlon Rahimov", phone: "+998 97 789 01 23" },
            { id: 53, name: "Munisa Tosheva", phone: "+998 98 890 12 34" },
            { id: 54, name: "Oybek Tursunov", phone: "+998 99 901 23 45" },
            { id: 55, name: "Nilufar Karimova", phone: "+998 90 012 34 56" },
            { id: 56, name: "Shohruh Rahimov", phone: "+998 91 123 45 67" },
            { id: 57, name: "Madina Tursunova", phone: "+998 92 234 56 78" }
        ]
    }
};

// Global o'zgaruvchilar
let currentGroup = null;
let currentDate = new Date().toISOString().split('T')[0];

// Sahifa yuklanganda ishga tushadigan funksiyalar
document.addEventListener('DOMContentLoaded', function () {
    // LocalStorage ni tekshirish va bo'sh bo'lsa boshlang'ich ma'lumot yozish
    if (!localStorage.getItem('attendance')) {
        localStorage.setItem('attendance', JSON.stringify({}));
    }

    // Hozirgi sanani o'rnatish
    // document.getElementById('currentDate').textContent = new Date().toLocaleDateString('uz-UZ');
});

// Davomatni saqlash
function saveAttendance() {
    alert('Davomat muvaffaqiyatli saqlandi!');
}

// Guruh davomatini ko'rsatish
function showAttendance(groupId) {
    currentGroup = groupId;
    const group = groups[groupId];

    if (!group) {
        console.error('Guruh topilmadi:', groupId);
        return;
    }

    // Guruh nomini yangilash
    document.getElementById('groupTitle').textContent = group.name + ' davomati';

    // Hozirgi sanani o'rnatish
    document.getElementById('attendanceDate').value = currentDate;

    // Jadvalni tozalash
    const tbody = document.getElementById('attendanceBody');
    tbody.innerHTML = '';

    // Studentlarni jadvalga qo'shish
    group.students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.phone}</td>
            <td>
                <label class="radio-container">
                    <input type="radio" name="attendance_${student.id}" value="present" onchange="updateAttendanceCounts()">
                    <span class="checkmark"></span>
                </label>
            </td>
            <td>
                <label class="radio-container">
                    <input type="radio" name="attendance_${student.id}" value="absent" onchange="updateAttendanceCounts()">
                    <span class="checkmark"></span>
                </label>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Davomat bo'limini ko'rsatish
    document.getElementById('attendance-section').classList.remove('hidden');

    // Guruh kartalarini yashirish
    document.querySelector('.groups-container').classList.add('hidden');

    // Initial count update
    updateAttendanceCounts();
}

// Davomat sonlarini yangilash
function updateAttendanceCounts() {
    if (!currentGroup) return;

    const group = groups[currentGroup];
    if (!group) return;

    let presentCount = 0;
    let absentCount = 0;

    // Hisoblash
    group.students.forEach(student => {
        const radioPresent = document.querySelector(`input[name="attendance_${student.id}"][value="present"]:checked`);
        const radioAbsent = document.querySelector(`input[name="attendance_${student.id}"][value="absent"]:checked`);

        if (radioPresent) {
            presentCount++;
        } else if (radioAbsent) {
            absentCount++;
        }
    });

    // Yangilash
    document.getElementById('presentCount').textContent = presentCount;
    document.getElementById('absentCount').textContent = absentCount;
    document.getElementById('excuseCount').textContent = 0; // Hozircha excuse ni 0 qilib qo'yamiz
}

// Davomat bo'limini yashirish
function hideAttendance() {
    document.getElementById('attendance-section').classList.add('hidden');
    document.querySelector('.groups-container').classList.remove('hidden');
}

// Qidiruv funksiyasi
document.getElementById('searchInput')?.addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const groupCards = document.querySelectorAll('.group-card');

    groupCards.forEach(card => {
        const groupName = card.querySelector('h3').textContent.toLowerCase();
        const studentCount = card.querySelector('.student-count').textContent.toLowerCase();

        if (groupName.includes(searchTerm) || studentCount.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
