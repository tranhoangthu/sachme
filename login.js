document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector('.loader');
    const notification = document.getElementById("notification");
    const popup = document.getElementById("login-popup");
    const closePopup = document.getElementById("close-popup");
    const loginForm = document.getElementById("login-form");
    const guestBtn = document.getElementById("guest-btn");
    const userInfo = document.getElementById("user-info");
    const userGreeting = document.getElementById("user-greeting");

    // Hiển thị thông báo sau khi tải trang
    setTimeout(() => {
        notification.classList.remove("hidden");
    }, 2000);

    // Hiển thị popup khi nhấn vào thông báo
    notification.onclick = function () {
        popup.style.display = "block";
    }

    // Đóng popup khi nhấn vào "×"
    closePopup.onclick = function () {
        popup.style.display = "none";
    }

    // Đóng popup khi nhấn vào nút gửi và tính tuổi
    loginForm.onsubmit = function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const birthYear = document.getElementById("birth-year").value;
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        userGreeting.textContent = `Chào ${username}, bạn ${age} tuổi!`;
        userInfo.classList.remove("hidden");
        notification.classList.add("hidden");
        popup.style.display = "none";
    }

    // Tiếp tục với tư cách Khách
    guestBtn.onclick = function () {
        userGreeting.textContent = "Bạn đã tiếp tục với tư cách Khách.";
        userInfo.classList.remove("hidden");
        notification.classList.add("hidden");
        popup.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector('.loader');
    const notification = document.getElementById("notification");
    const popup = document.getElementById("login-popup");
    const closePopup = document.getElementById("close-popup");
    const loginForm = document.getElementById("login-form");
    const guestBtn = document.getElementById("guest-btn");
    const userInfo = document.getElementById("user-info");
    const userGreeting = document.getElementById("user-greeting");

    // Hiển thị thông báo sau khi tải trang
    setTimeout(() => {
        notification.classList.remove("hidden");
    }, 2000);

    // Hiển thị popup khi nhấn vào thông báo
    notification.onclick = function () {
        popup.style.display = "block";
    };

    // Đóng popup khi nhấn vào "×"
    closePopup.onclick = function () {
        popup.style.display = "none";
    };

    // Đóng popup khi nhấn vào nút gửi và tính tuổi
    loginForm.onsubmit = function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const birthYear = parseInt(document.getElementById("birth-year").value, 10);
        const currentYear = new Date().getFullYear();

        // Kiểm tra năm sinh hợp lệ
        if (isNaN(birthYear) || birthYear < 1900 || birthYear > currentYear) {
            alert("Vui lòng nhập lại năm sinh");
            return; // Dừng xử lý nếu năm sinh không hợp lệ
        }

        const age = currentYear - birthYear;
        userGreeting.textContent = `Chào ${username}, bạn ${age} tuổi!`;
        userInfo.classList.remove("hidden");
        notification.classList.add("hidden");
        popup.style.display = "none";
    };

    // Tiếp tục với tư cách Khách
    guestBtn.onclick = function () {
        userGreeting.textContent = "Bạn đã tiếp tục với tư cách Khách.";
        userInfo.classList.remove("hidden");
        notification.classList.add("hidden");
        popup.style.display = "none";
    };
});

