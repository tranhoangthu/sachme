document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector('.loader');
    const notification = document.getElementById("notification");
    const popup = document.getElementById("login-popup");
    const closePopup = document.getElementById("close-popup");
    const loginForm = document.getElementById("login-form");
    const guestBtn = document.getElementById("guest-btn");
    const userInfo = document.getElementById("user-info");
    const userGreeting = document.getElementById("user-greeting");

    // Ẩn loading sau 2 giây
    setTimeout(() => {
        loader.style.display = "none";
        notification.classList.remove("hidden");
    }, 2000);

    // Hiển thị popup khi nhấn vào thông báo
    notification.onclick = function () {
        popup.style.display = "block";
        AOS.init(); // Khởi động AOS
        AOS.refresh(); // Cập nhật lại AOS để áp dụng hiệu ứng
    }

    // Đóng popup khi nhấn vào "×"
    closePopup.onclick = function () {
        popup.style.display = "none";
    }

    // Đóng popup khi nhấn vào nút gửi
    loginForm.onsubmit = function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const birthYear = document.getElementById("birth-year").value;

        // Tính tuổi dựa trên năm hiện tại
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
