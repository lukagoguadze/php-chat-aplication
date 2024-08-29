<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="logins.css">
    <title>Login</title>
    <?php include("loginCont.php"); ?>
</head>
<body>
    <div class="main">
        <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="POST">
            <h2>Login</h2>
            <input type="email" name="login-email" placeholder="Email" required>
            <input type="password" name="login-password" placeholder="Password" required>
            <button type="submit" class="loginBtn">Login</button>
            <div class="line"></div>
            <a role="button" class="registerBtn" href="register.php">create new account</a>
        </form>
    </div>
</body>
</html>