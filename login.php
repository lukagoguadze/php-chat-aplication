<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="auth/logins.css">
     <link rel="icon" type="image/x-icon" href="https://hpanel.hostinger.com/favicons/hostinger.png">
        <meta charset="utf-8">
        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
        <meta content="Default page" name="description">
        <meta content="width=device-width, initial-scale=1" name="viewport">
    <title>Login</title>
    <?php include("auth/loginCont.php"); ?>
</head>
<body>
    <div class="main">
        <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="POST">
            <h2>Login</h2>
            <input type="email" name="login-email" placeholder="Email" required>
            <input type="password" name="login-password" placeholder="Password" required>
            <button type="submit" class="loginBtn">Login</button>
            <div class="line"></div>
            <a role="button" class="registerBtn" href="auth/register.php">create new account</a>
        </form>
    </div>
</body>
</html>