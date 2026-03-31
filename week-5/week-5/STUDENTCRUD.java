import java.sql.*;
import java.util.Scanner;

public class StudentCRUD {

    static final String URL = "jdbc:mysql://localhost:3306/studentdb";
    static final String USER = "root";
    static final String PASSWORD = "password";

    static Connection con;
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(URL, USER, PASSWORD);

            int choice;

            do {
                System.out.println("\n--- CRUD MENU ---");
                System.out.println("1. Insert");
                System.out.println("2. View");
                System.out.println("3. Update");
                System.out.println("4. Delete");
                System.out.println("5. Exit");

                choice = sc.nextInt();

                switch (choice) {
                    case 1:
                        insertRecord();
                        break;
                    case 2:
                        viewRecord();
                        break;
                    case 3:
                        updateRecord();
                        break;
                    case 4:
                        deleteRecord();
                        break;
                    case 5:
                        System.out.println("Exiting...");
                        break;
                    default:
                        System.out.println("Invalid choice");
                }

            } while (choice != 5);

            con.close();

        } catch (Exception e) {
            System.out.println(e);
        }
    }

    // INSERT
    static void insertRecord() throws SQLException {
        System.out.print("Enter ID: ");
        int id = sc.nextInt();

        System.out.print("Name: ");
        String name = sc.next();

        System.out.print("Age: ");
        int age = sc.nextInt();

        System.out.print("Course: ");
        String course = sc.next();

        String sql = "INSERT INTO student (id, name, age, course) VALUES (?, ?, ?, ?)";
        PreparedStatement ps = con.prepareStatement(sql);

        ps.setInt(1, id);
        ps.setString(2, name);
        ps.setInt(3, age);
        ps.setString(4, course);

        ps.executeUpdate();
        System.out.println("Rec Inserted");
    }

    // VIEW
    static void viewRecord() throws SQLException {
        Statement st = con.createStatement();
        ResultSet rs = st.executeQuery("SELECT * FROM student");

        while (rs.next()) {
            System.out.println(
                rs.getInt("id") + " " +
                rs.getString("name") + " " +
                rs.getInt("age") + " " +
                rs.getString("course")
            );
        }
    }

    // UPDATE
    static void updateRecord() throws SQLException {
        System.out.print("Enter ID: ");
        int id = sc.nextInt();

        System.out.print("New Course: ");
        String course = sc.next();

        String sql = "UPDATE student SET course = ? WHERE id = ?";
        PreparedStatement ps = con.prepareStatement(sql);

        ps.setString(1, course);
        ps.setInt(2, id);

        ps.executeUpdate();
        System.out.println("Record Updated");
    }

    // DELETE
    static void deleteRecord() throws SQLException {
        System.out.print("Enter ID: ");
        int id = sc.nextInt();

        String sql = "DELETE FROM student WHERE id = ?";
        PreparedStatement ps = con.prepareStatement(sql);

        ps.setInt(1, id);
        ps.executeUpdate();

        System.out.println("Record Deleted");
    }
}