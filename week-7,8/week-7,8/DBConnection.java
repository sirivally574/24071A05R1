package week-7,8;

public class DBConnection {
    package week-7,8;
import java.sql.*;
public class DBConnection {
 public static Connection getConnection() throws Exception {
 Class.forName("com.mysql.cj.jdbc.Driver");
 return DriverManager.getConnection(
 "jdbc:mysql://localhost:3306/eshop",
 "root",
 "password");
 }
}

    
}
