<?php 
  require('connection.php'); 
  session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User - Login and Register</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h2>House Of Marktech</h2>
    <nav>
      <a href="#">HOME</a>
      <a href="#">BLOG</a>
      <a href="#">CONTACT</a>
      <a href="#">ABOUT</a>
    </nav>
    <?php 
    
      if(isset($_SESSION['logged_in']) && $_SESSION['logged_in']==true)
      {
        echo"
          <div class='user'>
            $_SESSION[username] - <a href='logout.php'>LOGOUT</a>
          </div>
        ";
      }
      else
      {
        echo"
          <div class='sign-in-up'>
            <button type='button' onclick=\"popup('login-popup')\">LOGIN</button>
            <button type='button' onclick=\"popup('register-popup')\">REGISTER</button>
          </div>
        ";
      }
    
    ?>
  </header>

  <div class="popup-container" id="login-popup">
    <div class="popup">
      <form method="POST" action="login_register.php">
        <h2>
          <span>USER LOGIN</span>
          <button type="reset" onclick="popup('login-popup')">X</button>
        </h2>
        <input type="text" placeholder="E-mail or Username" name="email_username">
        <input type="password" placeholder="Password" name="password">
        <button type="submit" class="login-btn" name="login">LOGIN</button>
      </form>
    </div>
  </div>

  <div class="popup-container" id="register-popup">
    <div class="register popup">
      <form method="POST" action="login_register.php">
        <h2>
          <span>USER REGISTER</span>
          <button type="reset" onclick="popup('register-popup')">X</button>
        </h2>
        <input type="text" placeholder="Full Name" name="fullname">
        <input type="text" placeholder="Username" name="username">
        <input type="email" placeholder="E-mail" name="email">
        <input type="password" placeholder="Password" name="password">
        <input type="text" placeholder="Referral Code" name="referralcode" id="refercode">
        <button type="submit" class="register-btn" name="register">REGISTER</button>
      </form>
    </div>
  </div>


  <?php 
    if(isset($_SESSION['logged_in']) && $_SESSION['logged_in']==true)
    {
      echo"<h1 style='text-align: center; margin-top: 200px;'> WELCOME TO THIS WEBSITE -  $_SESSION[username]</h1>";
      $query="SELECT * FROM `registered_users` WHERE `username`='$_SESSION[username]'";
      $result=mysqli_query($con,$query);
      $result_fetch=mysqli_fetch_assoc($result);

      echo"<h3 class='box'> 
        Your Referral Code: $result_fetch[referral_code] 
      </h3>";
      echo"<h3 class='box'> 
        Your Referral Points: $result_fetch[referral_point] 
      </h3>";

      echo"<h3 class='box'>
        Your Referral Link: 
          <a href='http://localhost/referral system/?refer=$result_fetch[referral_code]'>
            http://localhost/referral system/?refer=$result_fetch[referral_code]
          </a> 
      </h3>";
      
    }
  ?>

  <script>
    function popup(popup_name)
    {
      get_popup=document.getElementById(popup_name);
      if(get_popup.style.display=="flex")
      {
        get_popup.style.display="none";
      }
      else
      {
        get_popup.style.display="flex";
      }
    }
  </script>

<?php 

  if(isset($_GET['refer']) && isset($_GET['refer'])!='')
  {
    if(!(isset($_SESSION['logged_in']) && $_SESSION['logged_in']==true))
    {
      $query="SELECT * FROM `registered_users` WHERE `referral_code`='$_GET[refer]'";
      $result=mysqli_query($con,$query);
      if(mysqli_num_rows($result)==1)
      {
        echo"
          <script defer>
            document.getElementById('refercode').value='$_GET[refer]';
            popup('register-popup');
          </script>
        ";
      }
      else
      {
        echo"
          <script>
            alert('Invalid Referral Code');
          </script>
        ";
      }
    }
  }

?>

</body>
</html>