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
const tolovlarDiv = document.getElementById("payment-dashboard");
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
// const davomatSection = document.getElementById("studentList");
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
      // davomatSection.style.display = "none";
      topBar.style.display = "none";
      Guruh.style.display = "block";
      renderTable();
    } else if (currentTab === "tolovlar") {
      oquvchilarTable.style.display = "none";
      tolovlarDiv.style.display = "block";
      oqituvchilarDiv.style.display = "none";
      addBtn.style.display = "none";
      addBtn2.style.display = "none";
      tabletitle[0].textContent = "To'lovlar ro'yxati";
      // davomatSection.style.display = "none";
      topBar.style.display = "none";
      Guruh.style.display = "none";
    } else if (currentTab === "oqituvchilar") {
      oquvchilarTable.style.display = "none";
      tolovlarDiv.style.display = "none";
      oqituvchilarDiv.style.display = "table";
      addBtn.style.display = "none";
      addBtn2.style.display = "inline-block";
      tabletitle[0].textContent = "O'qituvchilar ro'yxati";
      // davomatSection.style.display = "none";
      topBar.style.display = "none";
      Guruh.style.display = "block";
      renderTable2();
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
  const tablesSection = document.getElementById('payment-dashboard');
  tablesSection.style.display =' block';
}

// const davomat = [
//   "Ziyoda",
//   "Abdullayev Jamshid",
//   "Nazarova Shoira",
//   "Toshtmatov Bobur"
// ];

const studentListDiv = document.getElementById("studentList");
const datePicker = document.getElementById("datePicker");

// 📅 Bugungi sanani avtomatik tanlash
const today = new Date();
const formattedToday = today.toISOString().split('T')[0];
datePicker.value = formattedToday;

// 🧾 Davomatni localStorage dan yuklash
// function loadAttendance(date) {
//   studentListDiv.innerHTML = "";

//   let data = JSON.parse(localStorage.getItem("attendance")) || {};
//   let todayData = data[date] || {};

//   davomat.forEach(name => {
//     const div = document.createElement("div");
//     div.className = "student";

//     const nameDiv = document.createElement("div");
//     nameDiv.textContent = name;

//     const buttonsDiv = document.createElement("div");
//     buttonsDiv.className = "buttons";

//     const presentBtn = document.createElement("button");
//     presentBtn.textContent = "Keldi";
//     presentBtn.className = "present";
//     if (todayData[name] === "present") presentBtn.classList.add("selected");

//     const absentBtn = document.createElement("button");
//     absentBtn.textContent = "Kelmadi";
//     absentBtn.className = "absent";
//     if (todayData[name] === "absent") absentBtn.classList.add("selected");

//     presentBtn.onclick = () => {
//       saveAttendance(date, name, "present");
//       loadAttendance(date);
//     };

//     absentBtn.onclick = () => {
//       saveAttendance(date, name, "absent");
//       loadAttendance(date);
//     };

//     buttonsDiv.appendChild(presentBtn);
//     buttonsDiv.appendChild(absentBtn);

//     div.appendChild(nameDiv);
//     div.appendChild(buttonsDiv);
//     studentListDiv.appendChild(div);
//   });
// }

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

// Enhanced Payment Management System
class PaymentManager {
  constructor() {
      this.payments = [];
      this.students = [];
      this.init();
  }

  init() {
      this.loadSampleData();
      this.setupEventListeners();
      this.renderTables();
      this.updateStats();
  }

  loadSampleData() {
      // Sample payment data
      this.payments = [
          {
              id: 1,
              studentName: "Ahmed Karimov",
              phone: "+998 90 123 45 67",
              group: "Og'abek 1-guruh",
              teacher: "Dilnoza Tosheva",
              amount: 500000,
              status: "paid",
              paymentDate: "2024-01-15",
              dueDate: "2024-01-15",
              note: "To'liq to'langan"
          },
          {
              id: 2,
              studentName: "Malika Usmonova",
              phone: "+998 91 234 56 78",
              group: "Og'abek 2-guruh",
              teacher: "Dilnoza Tosheva",
              amount: 500000,
              status: "paid",
              paymentDate: "2024-01-20",
              dueDate: "2024-01-20",
              note: "To'liq to'langan"
          },
          {
              id: 3,
              studentName: "Bobur Rahmonov",
              phone: "+998 93 345 67 89",
              group: "Amriddin 1-guruh",
              teacher: "Dilnoza Tosheva",
              amount: 500000,
              status: "unpaid",
              paymentDate: null,
              dueDate: "2024-01-25",
              note: "To'lanmagan"
          },
          {
              id: 4,
              studentName: "Sevara Nazarova",
              phone: "+998 94 456 78 90",
              group: "Ubaydullo 1-guruh",
              teacher: "Dilnoza Tosheva",
              amount: 500000,
              status: "unpaid",
              paymentDate: null,
              dueDate: "2024-02-01",
              note: "To'lanmagan"
          }
      ];

      // Sample students data
      this.students = [
          { id: 1, name: "Ahmed Karimov", group: "Og'abek 1-guruh" },
          { id: 2, name: "Malika Usmonova", group: "Og'abek 2-guruh" },
          { id: 3, name: "Bobur Rahmonov", group: "Amriddin 1-guruh" },
          { id: 4, name: "Sevara Nazarova", group: "Ubaydullo 1-guruh" }
      ];
  }

  setupEventListeners() {
      // Search functionality
      const searchInput = document.getElementById('searchInput');
      const groupFilter = document.getElementById('groupFilter');
      const statusFilter = document.getElementById('statusFilter');

      if (searchInput) {
          searchInput.addEventListener('input', () => this.filterPayments());
      }
      if (groupFilter) {
          groupFilter.addEventListener('change', () => this.filterPayments());
      }
      if (statusFilter) {
          statusFilter.addEventListener('change', () => this.filterPayments());
      }

      // Add payment button
      const addPaymentBtn = document.getElementById('addPaymentBtn');
      if (addPaymentBtn) {
          addPaymentBtn.addEventListener('click', () => this.showAddPaymentModal());
      }
  }

  renderTables() {
      this.renderPaidTable();
      this.renderUnpaidTable();
  }

  renderPaidTable() {
      const paidTableBody = document.getElementById('paidTableBody');
      if (!paidTableBody) return;

      const paidPayments = this.payments.filter(p => p.status === 'paid');
      
      paidTableBody.innerHTML = '';
      
      if (paidPayments.length === 0) {
          paidTableBody.innerHTML = `
              <tr>
                  <td colspan="8" style="text-align: center; padding: 20px;">
                      <i class="fas fa-info-circle" style="color: #3498db; margin-right: 10px;"></i>
                      To'lov qilgan o'quvchilar topilmadi
                  </td>
              </tr>
          `;
          return;
      }

      paidPayments.forEach(payment => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${payment.studentName}</td>
              <td>${payment.phone}</td>
              <td>${payment.group}</td>
              <td>${payment.teacher}</td>
              <td>${this.formatCurrency(payment.amount)}</td>
              <td>${this.formatDate(payment.paymentDate)}</td>
              <td><span class="badge success">To'langan</span></td>
              <td class="actions">
                  <button class="edit-btn" onclick="paymentManager.editPayment(${payment.id})">
                      <i class="fas fa-edit"></i>
                  </button>
                  <button class="delete-btn" onclick="paymentManager.deletePayment(${payment.id})">
                      <i class="fas fa-trash"></i>
                  </button>
              </td>
          `;
          paidTableBody.appendChild(row);
      });
  }

  renderUnpaidTable() {
      const unpaidTableBody = document.getElementById('unpaidTableBody');
      if (!unpaidTableBody) return;

      const unpaidPayments = this.payments.filter(p => p.status === 'unpaid');
      
      unpaidTableBody.innerHTML = '';
      
      if (unpaidPayments.length === 0) {
          unpaidTableBody.innerHTML = `
              <tr>
                  <td colspan="8" style="text-align: center; padding: 20px;">
                      <i class="fas fa-info-circle" style="color: #e74c3c; margin-right: 10px;"></i>
                      To'lov qilmagan o'quvchilar topilmadi
                  </td>
              </tr>
          `;
          return;
      }

      unpaidPayments.forEach(payment => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${payment.studentName}</td>
              <td>${payment.phone}</td>
              <td>${payment.group}</td>
              <td>${payment.teacher}</td>
              <td>${this.formatCurrency(payment.amount)}</td>
              <td>${this.formatDate(payment.dueDate)}</td>
              <td><span class="badge danger">To'lanmagan</span></td>
              <td class="actions">
                  <button class="edit-btn" onclick="paymentManager.editPayment(${payment.id})">
                      <i class="fas fa-edit"></i>
                  </button>
                  <button class="delete-btn" onclick="paymentManager.deletePayment(${payment.id})">
                      <i class="fas fa-trash"></i>
                  </button>
              </td>
          `;
          unpaidTableBody.appendChild(row);
      });
  }

  filterPayments() {
      const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
      const groupFilter = document.getElementById('groupFilter')?.value || '';
      const statusFilter = document.getElementById('statusFilter')?.value || '';

      let filteredPayments = this.payments;

      if (searchTerm) {
          filteredPayments = filteredPayments.filter(p => 
              p.studentName.toLowerCase().includes(searchTerm) ||
              p.phone.includes(searchTerm)
          );
      }

      if (groupFilter) {
          filteredPayments = filteredPayments.filter(p => p.group === groupFilter);
      }

      if (statusFilter) {
          filteredPayments = filteredPayments.filter(p => p.status === statusFilter);
      }

      this.renderFilteredTables(filteredPayments);
  }

  renderFilteredTables(filteredPayments) {
      const paidTableBody = document.getElementById('paidTableBody');
      const unpaidTableBody = document.getElementById('unpaidTableBody');

      if (!paidTableBody || !unpaidTableBody) return;

      const paidPayments = filteredPayments.filter(p => p.status === 'paid');
      const unpaidPayments = filteredPayments.filter(p => p.status === 'unpaid');

      // Update counts
      document.getElementById('paidCount').textContent = paidPayments.length;
      document.getElementById('unpaidCount').textContent = unpaidPayments.length;

      // Render paid table
      paidTableBody.innerHTML = '';
      paidPayments.forEach(payment => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${payment.studentName}</td>
              <td>${payment.phone}</td>
              <td>${payment.group}</td>
              <td>${payment.teacher}</td>
              <td>${this.formatCurrency(payment.amount)}</td>
              <td>${this.formatDate(payment.paymentDate)}</td>
              <td><span class="badge success">To'langan</span></td>
              <td class="actions">
                  <button class="edit-btn" onclick="paymentManager.editPayment(${payment.id})">
                      <i class="fas fa-edit"></i>
                  </button>
                  <button class="delete-btn" onclick="paymentManager.deletePayment(${payment.id})">
                      <i class="fas fa-trash"></i>
                  </button>
              </td>
          `;
          paidTableBody.appendChild(row);
      });

      // Render unpaid table
      unpaidTableBody.innerHTML = '';
      unpaidPayments.forEach(payment => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${payment.studentName}</td>
              <td>${payment.phone}</td>
              <td>${payment.group}</td>
              <td>${payment.teacher}</td>
              <td>${this.formatCurrency(payment.amount)}</td>
              <td>${this.formatDate(payment.dueDate)}</td>
              <td><span class="badge danger">To'lanmagan</span></td>
              <td class="actions">
                  <button class="edit-btn" onclick="paymentManager.editPayment(${payment.id})">
                      <i class="fas fa-edit"></i>
                  </button>
                  <button class="delete-btn" onclick="paymentManager.deletePayment(${payment.id})">
                      <i class="fas fa-trash"></i>
                  </button>
              </td>
          `;
          unpaidTableBody.appendChild(row);
      });
  }

  updateStats() {
      const totalStudents = this.payments.length;
      const paidStudents = this.payments.filter(p => p.status === 'paid').length;
      const unpaidStudents = this.payments.filter(p => p.status === 'unpaid').length;

      const totalElement = document.getElementById('totalStudents');
      const paidElement = document.getElementById('paidStudents');
      const unpaidElement = document.getElementById('unpaidStudents');

      if (totalElement) totalElement.textContent = totalStudents;
      if (paidElement) paidElement.textContent = paidStudents;
      if (unpaidElement) unpaidElement.textContent = unpaidStudents;
  }

  showAddPaymentModal() {
      // Create modal for adding new payment
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
          <div class="modal-content">
              <div class="modal-header">
                  <h3>Yangi to'lov qo'shish</h3>
                  <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
              </div>
              <form id="addPaymentForm">
                  <div class="form-group">
                      <label for="studentSelect">O'quvchi tanlang</label>
                      <select id="studentSelect" required>
                          <option value="">Tanlang...</option>
                          ${this.students.map(s => `<option value="${s.id}">${s.name} (${s.group})</option>`).join('')}
                      </select>
                  </div>
                  <div class="form-group">
                      <label for="paymentAmount">To'lov miqdori (so'm)</label>
                      <input type="number" id="paymentAmount" required min="0" step="1000" value="500000">
                  </div>
                  <div class="form-group">
                      <label for="paymentStatus">Holati</label>
                      <select id="paymentStatus" required>
                          <option value="paid">To'langan</option>
                          <option value="unpaid">To'lanmagan</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label for="paymentDate">Sana</label>
                      <input type="date" id="paymentDate" required value="${new Date().toISOString().split('T')[0]}">
                  </div>
                  <div class="form-group">
                      <label for="paymentNote">Izoh</label>
                      <textarea id="paymentNote" rows="3" placeholder="Qo'shimcha ma'lumot..."></textarea>
                  </div>
                  <div class="modal-actions">
                      <button type="button" class="btn-secondary" onclick="this.closest('.modal').remove()">Bekor qilish</button>
                      <button type="submit" class="btn-primary">Saqlash</button>
                  </div>
              </form>
          </div>
      `;

      document.body.appendChild(modal);
      modal.style.display = 'block';

      // Handle form submission
      const form = modal.querySelector('#addPaymentForm');
      form.addEventListener('submit', (e) => {
          e.preventDefault();
          this.addPayment({
              studentId: parseInt(document.getElementById('studentSelect').value),
              amount: parseInt(document.getElementById('paymentAmount').value),
              status: document.getElementById('paymentStatus').value,
              paymentDate: document.getElementById('paymentDate').value,
              note: document.getElementById('paymentNote').value
          });
          modal.remove();
      });
  }

  addPayment(paymentData) {
      const student = this.students.find(s => s.id === paymentData.studentId);
      if (!student) return;

      const newPayment = {
          id: this.payments.length + 1,
          studentName: student.name,
          phone: "+998 90 123 45 67", // This should come from student data
          group: student.group,
          teacher: "Dilnoza Tosheva", // This should come from group data
          amount: paymentData.amount,
          status: paymentData.status,
          paymentDate: paymentData.status === 'paid' ? paymentData.paymentDate : null,
          dueDate: paymentData.status === 'unpaid' ? paymentData.paymentDate : null,
          note: paymentData.note
      };

      this.payments.push(newPayment);
      this.renderTables();
      this.updateStats();
  }

  editPayment(paymentId) {
      const payment = this.payments.find(p => p.id === paymentId);
      if (!payment) return;

      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
          <div class="modal-content">
              <div class="modal-header">
                  <h3>To'lovni tahrirlash</h3>
                  <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
              </div>
              <form id="editPaymentForm">
                  <div class="form-group">
                      <label>O'quvchi</label>
                      <input type="text" value="${payment.studentName}" readonly>
                  </div>
                  <div class="form-group">
                      <label for="editAmount">To'lov miqdori (so'm)</label>
                      <input type="number" id="editAmount" required min="0" step="1000" value="${payment.amount}">
                  </div>
                  <div class="form-group">
                      <label for="editStatus">Holati</label>
                      <select id="editStatus" required>
                          <option value="paid" ${payment.status === 'paid' ? 'selected' : ''}>To'langan</option>
                          <option value="unpaid" ${payment.status === 'unpaid' ? 'selected' : ''}>To'lanmagan</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label for="editDate">Sana</label>
                      <input type="date" id="editDate" required value="${payment.status === 'paid' ? payment.paymentDate : payment.dueDate}">
                  </div>
                  <div class="form-group">
                      <label for="editNote">Izoh</label>
                      <textarea id="editNote" rows="3">${payment.note || ''}</textarea>
                  </div>
                  <div class="modal-actions">
                      <button type="button" class="btn-secondary" onclick="this.closest('.modal').remove()">Bekor qilish</button>
                      <button type="submit" class="btn-primary">Yangilash</button>
                  </div>
              </form>
          </div>
      `;

      document.body.appendChild(modal);
      modal.style.display = 'block';

      // Handle form submission
      const form = modal.querySelector('#editPaymentForm');
      form.addEventListener('submit', (e) => {
          e.preventDefault();
          this.updatePayment(paymentId, {
              amount: parseInt(document.getElementById('editAmount').value),
              status: document.getElementById('editStatus').value,
              date: document.getElementById('editDate').value,
              note: document.getElementById('editNote').value
          });
          modal.remove();
      });
  }

  updatePayment(paymentId, updatedData) {
      const paymentIndex = this.payments.findIndex(p => p.id === paymentId);
      if (paymentIndex === -1) return;

      const payment = this.payments[paymentIndex];
      
      payment.amount = updatedData.amount;
      payment.status = updatedData.status;
      
      if (updatedData.status === 'paid') {
          payment.paymentDate = updatedData.date;
          payment.dueDate = null;
      } else {
          payment.dueDate = updatedData.date;
          payment.paymentDate = null;
      }
      
      payment.note = updatedData.note;

      this.renderTables();
      this.updateStats();
  }

  deletePayment(paymentId) {
      if (confirm('Haqiqatan ham ushbu to\'lovni o\'chirmoqchimisiz?')) {
          this.payments = this.payments.filter(p => p.id !== paymentId);
          this.renderTables();
          this.updateStats();
      }
  }

  formatCurrency(amount) {
      return new Intl.NumberFormat('uz-UZ', {
          style: 'currency',
          currency: 'UZS',
          minimumFractionDigits: 0
      }).format(amount);
  }

  formatDate(dateString) {
      if (!dateString) return '-';
      return new Date(dateString).toLocaleDateString('uz-UZ');
  }

  exportToExcel() {
      // Export functionality would go here
      console.log('Exporting to Excel...');
  }

  generateReport() {
      // Report generation would go here
      console.log('Generating report...');
  }
}

// Initialize payment manager
const paymentManager = new PaymentManager();

// Make it globally available
window.paymentManager = paymentManager;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  paymentManager.init();
});
