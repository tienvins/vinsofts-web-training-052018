 <?php
 $tmp_name = $_FILES['file']['tmp_name'];
 $nameImg = $_FILES['file']['name'];
 $type = $_FILES['file']['type'];
 $size = $_FILES['file']['size'];
  move_uploaded_file($tmp_name,$path);
 ?>
                          