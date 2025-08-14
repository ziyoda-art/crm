// Group Management System
let groups = JSON.parse(localStorage.getItem('groups')) || [];
let teachers = JSON.parse(localStorage.getItem('teachers')) || [
    { id: '1', name: 'Ogabek Isoqov', phone: '+998 90 123 45 67', subject: 'HTML/CSS' },
    { id: '2', name: 'Ubaydullo Rahmonov', phone: '+998 91 234 56 78', subject: 'JavaScript' },
    { id: '3', name: 'Amriddin Toshev', phone: '+998 92 345 67 89', subject: 'Python' }
];
let students = JSON.parse(localStorage.getItem('students')) || [
    { id: '1', fullName: 'Ali Valiyev', phone: '+998 90 111 22 33' },
    { id: '2', fullName: 'Vali Aliyev', phone: '+998 90 222 33 44' },
    { id: '3', fullName: 'Sulton Rahimov', phone: '+998 90 333 44 55' }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    loadGroups();
    populateTeachers();
    populateStudents();

    // Form submissions
    document.getElementById('newGroupForm').addEventListener('submit', function (e) {
        e.preventDefault();
        createNewGroup();
    });

    document.getElementById('addStudentForm').addEventListener('submit', function (e) {
        e.preventDefault();
        addStudentToGroup();
    });
});

// Load and display all groups
function loadGroups() {
    const container = document.getElementById('groups-container');
    container.innerHTML = '';

    if (groups.length === 0) {
        container.innerHTML = '<p class="no-groups">Hozircha guruhlar mavjud emas</p>';
        return;
    }

    groups.forEach(group => {
        const groupDiv = createGroupTable(group);
        container.appendChild(groupDiv);
    });
}

// Create HTML for a group table
function createGroupTable(group) {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'group-table';

    const teacher = teachers.find(t => t.id === group.teacherId);
    const teacherName = teacher ? teacher.name : 'Ustoz belgilanmagan';

    groupDiv.innerHTML = `
        <div class="group-header">
            <h3>${group.name}</h3>
            <div class="group-actions">
                <span class="teacher-name">Ustoz: ${teacherName}</span>
                <button class="add-student-btn" onclick="openAddStudentModal('${group.id}')">
                    <i class="fas fa-user-plus"></i> O'quvchi Qo'shish
                </button>
            </div>
        </div>
        <table class="group-students-table">
            <thead>
                <tr>
                    <th>№</th>
                    <th>F.I.SH</th>
                    <th>Telefon</th>
                    <th>Amallar</th>
                </tr>
            </thead>
            <tbody id="students-${group.id}">
                ${renderGroupStudents(group.students || [])}
            </tbody>
        </table>
    `;
    return groupDiv;
}

// Render students for a group
function renderGroupStudents(students) {
    if (students.length === 0) {
        return '<tr><td colspan="4" class="no-students">Guruhga oquvchi kiritilmagan</td></tr>';
    }

    return students.map((student, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${student.fullName}</td>
            <td>${student.phone}</td>
            <td class="actions">
                <button class="remove-btn" onclick="removeStudentFromGroup('${student.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Populate teachers dropdown
function populateTeachers() {
    const teacherSelect = document.getElementById('groupTeacher');
    teacherSelect.innerHTML = '<option value="">Ustoz tanlang...</option>';

    teachers.forEach(teacher => {
        const option = document.createElement('option');
        option.value = teacher.id;
        option.textContent = teacher.name;
        teacherSelect.appendChild(option);
    });
}

// Populate students dropdown
function populateStudents() {
    const studentSelect = document.getElementById('studentSelect');
    studentSelect.innerHTML = '<option value="">O\'quvchi tanlang...</option>';

    students.forEach(student => {
        const option = document.createElement('option');
        option.value = student.id;
        option.textContent = student.fullName;
        studentSelect.appendChild(option);
    });
}

// Create new group
function createNewGroup() {
    const name = document.getElementById('groupName').value;
    const teacherId = document.getElementById('groupTeacher').value;

    if (!name || !teacherId) {
        alert('Iltimos, barcha maydonlarni to\'ldiring!');
        return;
    }

    const newGroup = {
        id: Date.now().toString(),
        name: name,
        teacherId: teacherId,
        students: []
    };

    groups.push(newGroup);
    localStorage.setItem('groups', JSON.stringify(groups));

    loadGroups();
    closeModal('newGroupModal');
    document.getElementById('newGroupForm').reset();
}

// Open new group modal
function openNewGroupModal() {
    document.getElementById('newGroupModal').style.display = 'block';
}

// Open add student modal
function openAddStudentModal(groupId) {
    document.getElementById('targetGroupId').value = groupId;
    document.getElementById('addStudentModal').style.display = 'block';
}

// Add student to group
function addStudentToGroup() {
    const groupId = document.getElementById('targetGroupId').value;
    const studentId = document.getElementById('studentSelect').value;

    if (!groupId || !studentId) {
        alert('Iltimos, barcha maydonlarni to\'ldiring!');
        return;
    }

    const group = groups.find(g => g.id === groupId);
    const student = students.find(s => s.id === studentId);

    if (group && student) {
        // Check if student already exists in group
        if (!group.students.find(s => s.id === studentId)) {
            group.students.push(student);
            localStorage.setItem('groups', JSON.stringify(groups));
            loadGroups();
            closeModal('addStudentModal');
            document.getElementById('addStudentForm').reset();
        } else {
            alert('Bu o\'quvchi allaqachon guruhda mavjud!');
        }
    }
}

// Remove student from group
function removeStudentFromGroup(studentId) {
    const groupId = document.getElementById('targetGroupId').value;
    const group = groups.find(g => g.id === groupId);

    if (group) {
        group.students = group.students.filter(s => s.id !== studentId);
        localStorage.setItem('groups', JSON.stringify(groups));
        loadGroups();
    }
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modals when clicking outside
window.onclick = function (event) {
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}
// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});