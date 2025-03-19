function login() {
    const fixedUsername = "huanrose@gmail.com";
    const fixedPassword = "123456";

    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    if (usernameInput === fixedUsername && passwordInput === fixedPassword) {
        console.log("Đăng nhập thành công");
    } else {
        console.log("Đăng nhập thất bại");
    }
}