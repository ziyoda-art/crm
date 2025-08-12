// Settings page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation function for admin profile
    window.navigateToSettings = function() {
        window.location.href = 'settings.html';
    };

    // Save settings function
    window.saveSettings = function() {
        const adminName = document.getElementById('adminName').value;
        const adminEmail = document.getElementById('adminEmail').value;
        const adminPhone = document.getElementById('adminPhone').value;
        const language = document.getElementById('language').value;
        const darkMode = document.getElementById('darkModeToggleSettings').checked;
        const notifications = document.getElementById('notificationsToggle').checked;
        const autoBackup = document.getElementById('autoBackupToggle').checked;

        // Save to localStorage
        localStorage.setItem('adminName', adminName);
        localStorage.setItem('adminEmail', adminEmail);
        localStorage.setItem('adminPhone', adminPhone);
        localStorage.setItem('language', language);
        localStorage.setItem('darkMode', darkMode);
        localStorage.setItem('notifications', notifications);
        localStorage.setItem('autoBackup', autoBackup);

        alert('Settings saved successfully!');
    };

    // Export data function
    window.exportData = function() {
        const settings = {
            adminName: document.getElementById('adminName').value,
            adminEmail: document.getElementById('adminEmail').value,
            adminPhone: document.getElementById('adminPhone').value,
            language: document.getElementById('language').value,
            darkMode: document.getElementById('darkModeToggleSettings').checked,
            notifications: document.getElementById('notificationsToggle').checked,
            autoBackup: document.getElementById('autoBackupToggle').checked
        };

        const dataStr = JSON.stringify(settings, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'settings.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    // Import data function
    window.importData = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const settings = JSON.parse(e.target.result);
                    document.getElementById('adminName').value = settings.adminName || '';
                    document.getElementById('adminEmail').value = settings.adminEmail || '';
                    document.getElementById('adminPhone').value = settings.adminPhone || '';
                    document.getElementById('language').value = settings.language || 'uz';
                    document.getElementById('darkModeToggleSettings').checked = settings.darkMode || false;
                    document.getElementById('notificationsToggle').checked = settings.notifications || true;
                    document.getElementById('autoBackupToggle').checked = settings.autoBackup || true;
                    alert('Settings imported successfully!');
                } catch (error) {
                    alert('Error importing settings: ' + error.message);
                }
            };
            reader.readAsText(file);
        }
    };

    // Load saved settings
    function loadSettings() {
        document.getElementById('adminName').value = localStorage.getItem('adminName') || 'T. Ziyodabonu';
        document.getElementById('adminEmail').value = localStorage.getItem('adminEmail') || 'admin@yagonait.uz';
        document.getElementById('adminPhone').value = localStorage.getItem('adminPhone') || '+998 90 123 45 67';
        document.getElementById('language').value = localStorage.getItem('language') || 'uz';
        document.getElementById('darkModeToggleSettings').checked = localStorage.getItem('darkMode') === 'true';
        document.getElementById('notificationsToggle').checked = localStorage.getItem('notifications') !== 'false';
        document.getElementById('autoBackupToggle').checked = localStorage.getItem('autoBackup') !== 'false';
    }

    // Initialize settings
    loadSettings();

    // Event listeners
    document.getElementById('darkModeToggleSettings').addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);
    });

    document.getElementById('notificationsToggle').addEventListener('change', function() {
        // Handle notification settings
    });

    document.getElementById('autoBackupToggle').addEventListener('change', function() {
        // Handle auto backup settings
    });

    // Dark mode toggle for settings page
    document.getElementById('darkModeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
