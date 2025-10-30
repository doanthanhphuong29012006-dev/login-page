// Lấy phần tử logo con ong
const bee = document.getElementById('logo');

// Khi rê chuột qua logo — làm nó “bay”
bee.addEventListener('mouseenter', () => {
    bee.style.transition = 'transform 0.3s ease';
    bee.style.transform = 'rotate(10deg) translateY(-5px)';
});

bee.addEventListener('mouseleave', () => {
    bee.style.transform = 'rotate(0deg) translateY(0)';
});

// Khi bấm nút Đăng nhập — hiển thị thông báo demo
const form = document.getElementById('loginForm');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // ngăn load lại trang

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === "" || password === "") {
        alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
    } else {
        alert(`Xin chào, ${username}! Chức năng đăng nhập chỉ là demo.`);
    }
});
