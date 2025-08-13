const oquvchilarData = [
+  {
    id: 1,
    ismFamiliya: "Ahmed Karimov",
    telefon: "+998 90 123 45 67",
    guruh: "Ubaydullo 1-guruh",
    oqituvchi: "Dilnoza Tosheva",
    royxatgaOlingan: "2024-01-15",
  },
  {
    id: 2,
    ismFamiliya: "Malika Usmonova",
    telefon: "+998 91 234 56 78",
    guruh: "Og'abek 1-guruh",
    oqituvchi: "Dilnoza Tosheva",
    royxatgaOlingan: "2024-01-20",
  },
  {
    id: 3,
    ismFamiliya: "Bobur Rahmonov",
    telefon: "+998 93 345 67 89",
    guruh: "Amriddin 1-guruh",
    oqituvchi: "Dilnoza Tosheva",
    royxatgaOlingan: "2024-02-01",
  },
  {
    id: 4,
    ismFamiliya: "Sevara Nazarova",
    telefon: "+998 94 456 78 90",
    guruh: "Og'abek 2-guruh",
    oqituvchi: "Dilnoza Tosheva",
    royxatgaOlingan: "2024-02-10",
  },
];

const oqituvchilarData = [
  {
    id: 1,
    ismFamiliya: "Kholmatov Amriddin",
    telefon: "+998 90 123 45 67",
    mutaxassislik: "Foundation",
    ishBoshlangan: "01.01.01",
    oylikMaosh: "2.000.000",
  },
  {
    id: 2,
    ismFamiliya: "Oripov Ubaydullo",
    telefon: "+998 90 123 45 67",
    mutaxassislik: "cyber xavfsizlik",
    ishBoshlangan: "01.01.01",
    oylikMaosh: "2.000.000",
  },
  {
    id: 3,
    ismFamiliya: "Isoqov Ogabek",
    telefon: "+998 90 123 45 67",
    mutaxassislik: "Front-end",
    ishBoshlangan: "01.01.01",
    oylikMaosh: "2.000.000",
  },
];

let currentTab = "oquvchilar";
let students = [...oquvchilarData];
let teachers = [...oqituvchilarData];

const tabs = document.querySelectorAll(".tab-btn");
const oquvchilarTable = document.getElementById("oquvchilar-table");
const tolovlarDiv = document.getElementById("tolovlar");
const oqituvchilarDiv = document.getElementById("oqituvchilar");
const oquvchilarBody = document.getElementById("oquvchilar-body");
const oqituvchilarBody = document.getElementById("oqituvchilar-body");
const addBtn = document.getElementById("addBtn");
const addBtn2 = document.getElementById("addBtn2");
const modal = document.getElementById("modal");
const form = document.getElementById("studentForm");
const cancelBtn = modal.querySelector(".cancel-btn");
const cancelbutton = modal.querySelector(".cancel-button");
const tabletitle = document.getElementsByClassName("table-title");
const davomatSection = document.getElementById("studentList");
const topBar = document.querySelector(".top-bar");
const Guruh = document.getElementById("guruh");

// Tablarni almashtirish
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    currentTab = tab.getAttribute("data-tab");

    if (currentTab === "oquvchilar") {
      oquvchilarTable.style.display = "table";
      tolovlarDiv.style.display = "none";
      oqituvchilarDiv.style.display = "none";
      addBtn.style.display = "inline-block";
      addBtn2.style.display = "none";
      tabletitle[0].textContent = "Barcha o'quvchilar";
      davomatSection.style.display = "none";
      topBar.style.display = "none";
      Guruh.style.display = "block";
      renderTable();
    } else if (currentTab === "tolovlar") {
      oquvchilarTable.style.display = "none";
      tolovlarDiv.style.display = "flex";
      oqituvchilarDiv.style.display = "none";
      addBtn.style.display = "none";
      addBtn2.style.display = "none";
      tabletitle[0].textContent = "To'lovlar ro'yxati";
      davomatSection.style.display = "none";
      topBar.style.display = "none";
      Guruh.style.display = "none";
    } else if (currentTab === "oqituvchilar") {
      oquvchilarTable.style.display = "none";
      tolovlarDiv.style.display = "none";
      oqituvchilarDiv.style.display = "table";
      addBtn.style.display = "none";
      addBtn2.style.display = "inline-block";
      tabletitle[0].textContent = "O'qituvchilar ro'yxati";
      davomatSection.style.display = "none";
      topBar.style.display = "none";
      Guruh.style.display = "block";
      renderTable2();
    } else if (currentTab === "davomat") {
      oquvchilarTable.style.display = "none";
      tolovlarDiv.style.display = "none";
      oqituvchilarDiv.style.display = "none";
      addBtn.style.display = "none";
      addBtn2.style.display = "none";
      davomatSection.style.display = "block";
      tabletitle[0].textContent = "Davomat ro'yxati";
      topBar.style.display = "flex";
      Guruh.style.display = "block";
    }
  });
});

// Jadvalni chizish funksiyasi
function renderTable() {
  oquvchilarBody.innerHTML = "";
  if (students.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 6;
    td.textContent = "Ma'lumot topilmadi";
    td.style.textAlign = "center";
    tr.appendChild(td);
    oquvchilarBody.appendChild(tr);
    return;
  }

  students.forEach((student) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${student.ismFamiliya}</td>
        <td>${student.telefon}</td>
        <td>${student.guruh}</td>
        <td>${student.oqituvchi}</td>
        <td>${student.royxatgaOlingan}</td>
        <td class="actions">
          <button class="edit-btn" data-id="${student.id}"><i class="fa-solid fa-pen-to-square"></i> </button>
          <button class="delete-btn" data-id="${student.id}"><i class="fa-solid fa-trash"></i></button>
        </td>
      `;

    oquvchilarBody.appendChild(tr);
  });

  // O'chirish tugmalarini ishlatish
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.onclick = () => {
      const id = Number(btn.getAttribute("data-id"));
      if (confirm("Haqiqatan ham o'chirmoqchimisiz?")) {
        students = students.filter((s) => s.id !== id);
        renderTable();
      }
    };
  });

  // Tahrirlash tugmasi
  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.onclick = () => {
      const id = Number(btn.getAttribute("data-id"));
      const student = students.find((s) => s.id === id);
      openEditModal(student);
    };
  });
}

function renderTable2() {
  oqituvchilarBody.innerHTML = "";
  if (teachers.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 6;
    td.textContent = "Ma'lumot topilmadi";
    td.style.textAlign = "center";
    tr.appendChild(td);
    oqituvchilarBody.appendChild(tr);
    return;
  }

  teachers.forEach((teacher) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${teacher.id}</td>
        <td>${teacher.ismFamiliya}</td>
        <td>${teacher.telefon}</td>
        <td>${teacher.mutaxassislik}</td>
        <td>${teacher.ishBoshlangan}</td>
        <td>${teacher.oylikMaosh}</td>
        <td class="actions">
          <button class="edit-btn" data-id="${teacher.id}"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="delete-btn" data-id="${teacher.id}"><i class="fa-solid fa-trash"></i></button>
        </td>
      `;

    oqituvchilarBody.appendChild(tr);
  });

  // O'chirish tugmalarini ishlatish
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.onclick = () => {
      const id = Number(btn.getAttribute("data-id"));
      if (confirm("Haqiqatan ham o'chirmoqchimisiz?")) {
        teachers = teachers.filter((s) => s.id !== id);
        renderTable2();
      }
    };
  });

  // Tahrirlash tugmasi
  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.onclick = () => {
      const id = Number(btn.getAttribute("data-id"));
      const teacher = teachers.find((s) => s.id === id);
      openEditModalTeacher(teacher);
    };
  });
}

// Edit modal functions
function openEditModal(student) {
    // Set modal title for edit mode
    const modalTitle = document.querySelector('.modal-content h3');
    modalTitle.textContent = "O'quvchini tahrirlash";
    
    // Populate form with existing data
    form.ismFamiliya.value = student.ismFamiliya;
    form.telefon.value = student.telefon;
    form.guruh.value = student.guruh;
    form.oqituvchi.value = student.oqituvchi;
    form.royxatgaOlingan.value = student.royxatgaOlingan;
    
    // Store student ID for edit mode
    form.dataset.editId = student.id;
    
    // Show modal
    modal.style.display = "flex";
}

function openEditModalTeacher(teacher) {
    // Set modal title for edit mode
    const modalTitle = document.querySelector('.modal-content h3');
    modalTitle.textContent = "O'qituvchini tahrirlash";
    
    // Populate form with existing data
    form.ismFamiliya.value = teacher.ismFamiliya;
    form.telefon.value = teacher.telefon;
    form.guruh.value = teacher.mutaxassislik;
    form.oqituvchi.value = teacher.ishBoshlangan;
    form.royxatgaOlingan.value = teacher.oylikMaosh;
    
    // Store teacher ID for edit mode
    form.dataset.editId = teacher.id;
    
    // Show modal
    modal.style.display = "flex";
}

// Modalni ochish
addBtn.onclick = () => {
    // Reset form for add mode
    form.reset();
    delete form.dataset.editId;
    
    const modalTitle = document.querySelector('.modal-content h3');
    modalTitle.textContent = "Yangi o'quvchi qo'shish";
    
    modal.style.display = "flex";
};

addBtn2.onclick = () => {
    // Reset form for add mode
    form.reset();
    delete form.dataset.editId;
    
    const modalTitle = document.querySelector('.modal-content h3');
    modalTitle.textContent = "Yangi o'qituvchi qo'shish";
    
    modal.style.display = "flex";
};

// Modalni yopish
cancelBtn.onclick = () => {
    modal.style.display = "none";
    form.reset();
    delete form.dataset.editId;
};

cancelbutton.onclick = () => {
    modal.style.display = "none";
    form.reset();
    delete form.dataset.editId;
};

// Formani yuborish
form.onsubmit = (e) => {
    e.preventDefault();
    
    const ismFamiliya = form.ismFamiliya.value.trim();
    const telefon = form.telefon.value.trim();
    const guruh = form.guruh.value.trim();
    const oqituvchi = form.oqituvchi.value.trim();
    const royxatgaOlingan = form.royxatgaOlingan.value;
    
    // Validation
    const phoneRegex = /^\+998 \d{2} \d{3} \d{2} \d{2}$/;
    if (!phoneRegex.test(telefon)) {
        alert("Telefon format xato. Masalan: +998 90 123 45 67");
        return;
    }
    
    const editId = form.dataset.editId;
    
    if (currentTab === "oquvchilar") {
        if (editId) {
            // Edit existing student
            const index = students.findIndex(s => s.id === parseInt(editId));
            if (index !== -1) {
                students[index] = {
                    ...students[index],
                    ismFamiliya,
                    telefon,
                    guruh,
                    oqituvchi,
                    royxatgaOlingan
                };
            }
        } else {
            // Add new student
            const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
            const newStudent = {
                id: newId,
                ismFamiliya,
                telefon,
                guruh,
                oqituvchi,
                royxatgaOlingan
            };
            students.push(newStudent);
        }
        renderTable();
    } else if (currentTab === "oqituvchilar") {
        if (editId) {
            // Edit existing teacher
            const index = teachers.findIndex(t => t.id === parseInt(editId));
            if (index !== -1) {
                teachers[index] = {
                    ...teachers[index],
                    ismFamiliya,
                    telefon: telefon,
                    mutaxassislik: guruh,
                    ishBoshlangan: oqituvchi,
                    oylikMaosh: royxatgaOlingan
                };
            }
        } else {
            // Add new teacher
            const newId = teachers.length > 0 ? Math.max(...teachers.map(t => t.id)) + 1 : 1;
            const newTeacher = {
                id: newId,
                ismFamiliya,
                telefon,
                mutaxassislik: guruh,
                ishBoshlangan: oqituvchi,
                oylikMaosh: royxatgaOlingan
            };
            teachers.push(newTeacher);
        }
        renderTable2();
    }
    
    modal.style.display = "none";
    form.reset();
    delete form.dataset.editId;
};

function toggleTables() {
  const tablesSection = document.getElementById('tables-section');
  tablesSection.classList.toggle('hidden');
}

const davomat = [
  "Ziyoda",
  "Abdullayev Jamshid",
  "Nazarova Shoira",
  "Toshtmatov Bobur"
];

const studentListDiv = document.getElementById("studentList");
const datePicker = document.getElementById("datePicker");

// 📅 Bugungi sanani avtomatik tanlash
const today = new Date();
const formattedToday = today.toISOString().split('T')[0];
datePicker.value = formattedToday;

// 🧾 Davomatni localStorage dan yuklash
function loadAttendance(date) {
  studentListDiv.innerHTML = "";

  let data = JSON.parse(localStorage.getItem("attendance")) || {};
  let todayData = data[date] || {};

  davomat.forEach(name => {
    const div = document.createElement("div");
    div.className = "student";

    const nameDiv = document.createElement("div");
    nameDiv.textContent = name;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons";

    const presentBtn = document.createElement("button");
    presentBtn.textContent = "Keldi";
    presentBtn.className = "present";
    if (todayData[name] === "present") presentBtn.classList.add("selected");

    const absentBtn = document.createElement("button");
    absentBtn.textContent = "Kelmadi";
    absentBtn.className = "absent";
    if (todayData[name] === "absent") absentBtn.classList.add("selected");

    presentBtn.onclick = () => {
      saveAttendance(date, name, "present");
      loadAttendance(date);
    };

    absentBtn.onclick = () => {
      saveAttendance(date, name, "absent");
      loadAttendance(date);
    };

    buttonsDiv.appendChild(presentBtn);
    buttonsDiv.appendChild(absentBtn);

    div.appendChild(nameDiv);
    div.appendChild(buttonsDiv);
    studentListDiv.appendChild(div);
  });
}

// 💾 Davomatni saqlash
function saveAttendance(date, name, status) {
  let data = JSON.parse(localStorage.getItem("attendance")) || {};
  if (!data[date]) data[date] = {};
  data[date][name] = status;
  localStorage.setItem("attendance", JSON.stringify(data));
}

// 📅 Sana o‘zgarganda yangilash
datePicker.addEventListener("change", (e) => {
  loadAttendance(e.target.value);
});

// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Profile dropdown hover functionality
const userProfile = document.getElementById('userProfile');
const profileDropdown = document.getElementById('profileDropdown');

// Ensure dropdown works with hover
userProfile.addEventListener('mouseenter', () => {
  profileDropdown.style.opacity = '1';
  profileDropdown.style.visibility = 'visible';
  profileDropdown.style.transform = 'translateY(0)';
});

userProfile.addEventListener('mouseleave', () => {
  profileDropdown.style.opacity = '0';
  profileDropdown.style.visibility = 'hidden';
  profileDropdown.style.transform = 'translateY(-10px)';
});

// Handle dropdown item clicks
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

// ⏱ Boshlang‘ich yuklash
loadAttendance(formattedToday);
renderTable();
renderTable2();

// Admin profile navigation function
function navigateToSettings() {
    window.location.href = 'settings.html';
}
