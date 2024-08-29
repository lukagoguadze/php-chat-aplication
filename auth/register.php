<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="register.css">
    <?php include("registerCont.php"); ?>
</head>
<body>
    <div class="main">
        <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="POST">
            <h2>create new account</h2>
            <input type="text" name="reg-name" placeholder="Firstname" required>
            <input type="text" name="reg-lastName" placeholder="Last name" required>
            <input type="email" name="reg-email" placeholder="Email" required>
            <input type="password" name="reg-password" placeholder="Password" required>
            <input type="password" name="repeatPassword" placeholder="Repeat password" required>
            <button type="submit">Sign up</button>
            <div class="line"></div>
            <a href="login.php">Already have an account?</a>
        </form>
    </div>
</body>
</html>