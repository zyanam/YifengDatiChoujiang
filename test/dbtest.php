<?php
/**
 * Created by PhpStorm.
 * User: yanam
 * Date: 18/4/17
 * Time: 9:53
 */

require_once "dbconn.php";
require_once "session.php";

function testinsert()
{
    $mysqli = new mysqli(MYSQL_HOST,
        MYSQL_USER,
        MYSQL_PWD,
        MYSQL_DBNAME,
        MYSQL_PORT
    );


    if ($mysqli->connect_errno) {
        die("could not connect to the database:\n" . $mysqli->connect_error);
    }

    $token = "access_token";
    $gettime = time();
    var_dump($gettime);

    $stmt = $mysqli->prepare("INSERT INTO wx_accesstoken (token,gettime) VALUES (?,?)");

    //var_dump($stmt);

    $stmt->bind_param("ss", $token, $gettime);
    $stmt->execute();

    $mysqli->close();
}

//testinsert();

function testGet()
{
    $mysqli = createConn();

    $result = mysqli_query($mysqli, "SELECT * FROM wx_accesstoken ORDER BY id DESC ");

    $data = array();

    while ($rows = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        $data[] = $rows;
    }

    var_dump($data);

    $mysqli->close();
}

//testGet();

//$token = getTokenFromDb();
//echo "token=" . $token;

$userId = "userid";
$data = getUserBaseInfo($userId);
var_dump($data);
if(count($data) == 0)
{
    if(!saveUserIdToDb($userId))
    {
        die("Save to DB error");
    }
}

setSession($userId);

Header("Location: " . "dati.php");
exit;
