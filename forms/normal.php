<html>
<h2>This is normal.php</h2>
<h3>posted by your browser:</h3>
<?php 
echo (isset($_POST['mail']))? $_POST['mail'] : 'no mail';
?>
</html>