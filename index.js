const oquvchilarData = [
    {
      id: 1,
      ismFamiliya: "Ahmed Karimov",
      telefon: "+998 90 123 45 67",
      guruh: "Ingliz tili - Boshlang'ich",
      oqituvchi: "Dilnoza Tosheva",
      royxatgaOlingan: "2024-01-15",
    },
    {
      id: 2,
      ismFamiliya: "Malika Usmonova",
      telefon: "+998 91 234 56 78",
      guruh: "Ingliz tili - O'rta",
      oqituvchi: "Dilnoza Tosheva",
      royxatgaOlingan: "2024-01-20",
    },
    {
      id: 3,
      ismFamiliya: "Bobur Rahmonov",
      telefon: "+998 93 345 67 89",
      guruh: "IELTS Tayyorgarlik",
      oqituvchi: "Dilnoza Tosheva",
      royxatgaOlingan: "2024-02-01",
    },
    {
      id: 4,
      ismFamiliya: "Sevara Nazarova",
      telefon: "+998 94 456 78 90",
      guruh: "Ingliz tili - Boshlang'ich",
      oqituvchi: "Dilnoza Tosheva",
      royxatgaOlingan: "2024-02-10",
    },
  ];

  let currentTab = "oquvchilar";
  let students = [...oquvchilarData];

  const tabs = document.querySelectorAll(".tab-btn");
  const oquvchilarTable = document.getElementById("oquvchilar-table");
  const tolovlarDiv = document.getElementById("tolovlar");
  const oqituvchilarDiv = document.getElementById("oqituvchilar");
  const oquvchilarBody = document.getElementById("oquvchilar-body");
  const addBtn = document.getElementById("addBtn");
  const modal = document.getElementById("modal");
  const form = document.getElementById("studentForm");
  const cancelBtn = modal.querySelector(".cancel-btn");
  const cancelbutton = modal.querySelector(".cancel-button");

  // Tablarni almashtirish
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Active class olib tashlash va yangi qo'shish
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      currentTab = tab.getAttribute("data-tab");

      if (currentTab === "oquvchilar") {
        oquvchilarTable.style.display = "table";
        tolovlarDiv.style.display = "none";
        oqituvchilarDiv.style.display = "none";
        addBtn.style.display = "inline-block";
        renderTable();
      } else if (currentTab === "tolovlar") {
        oquvchilarTable.style.display = "none";
        tolovlarDiv.style.display = "block";
        oqituvchilarDiv.style.display = "none";
        addBtn.style.display = "none";
      } else if (currentTab === "oqituvchilar") {
        oquvchilarTable.style.display = "none";
        tolovlarDiv.style.display = "none";
        oqituvchilarDiv.style.display = "block";
        addBtn.style.display = "none";
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
          <button class="edit-btn" data-id="${student.id}">Tahrirlash</button>
          <button class="delete-btn" data-id="${student.id}">O'chirish</button>
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

    // Tahrirlash tugmasi (hozir alert ko'rsatadi)
    document.querySelectorAll(".edit-btn").forEach((btn) => {
      btn.onclick = () => {
        const id = Number(btn.getAttribute("data-id"));
        const student = students.find((s) => s.id === id);
        alert("Tahrirlash: " + student.ismFamiliya + " (Edit funksiyasi hozircha yo'q)");
      };
    });
  }

  renderTable();

  // Modalni ochish
  addBtn.onclick = () => {
    modal.style.display = "flex";
    form.reset();
  };

  // Modalni yopish
  cancelBtn.onclick = () => {
    modal.style.display = "none";
  };

  // Modalni yopish
  cancelbutton.onclick = () => {
    modal.style.display = "none";
  };
  // Formani yuborish
  form.onsubmit = (e) => {
    e.preventDefault();
    const ismFamiliya = form.ismFamiliya.value.trim();
    const telefon = form.telefon.value.trim();
    const guruh = form.guruh.value.trim();
    const oqituvchi = form.oqituvchi.value.trim();
    const royxatgaOlingan = form.royxatgaOlingan.value;

    // Telefon formatini oddiy tekshirish
    const phoneRegex = /^\+998 \d{2} \d{3} \d{2} \d{2}$/;
    if (!phoneRegex.test(telefon)) {
      alert("Telefon format xato. Masalan: +998 90 123 45 67");
      return;
    }

    // Yangi id
    const newId = students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;

    const newStudent = {
      id: newId,
      ismFamiliya,
      telefon,
      guruh,
      oqituvchi,
      royxatgaOlingan,
    };

    students.push(newStudent);
    renderTable();
    modal.style.display = "none";
  };

  function toggleTables() {
    const tablesSection = document.getElementById('tables-section');
    tablesSection.classList.toggle('hidden');
  }