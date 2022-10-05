<?php
  $name = $_GET['name'];
  $total = $_GET['total'];

  header("Location: product.html?name=$name&total=$total");
?>
