<?php
class DB_CONNECT {
    function __construct() {
        $this->connect();
    }

    function __destruct() {
        $this->close();
    }

    function connect() {
        $con = mysqli_connect("your dbname", "your db user", "VP password", "db") 
            or die("Unable to connect to MySQL");
        return $con;
    }

    function close() {
        mysqli_close($con);
    }
}

?>
