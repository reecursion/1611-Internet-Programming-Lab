import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
 
public class LoginServlet extends HttpServlet {
    // JDBC driver name and database URL
    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost:3306/login";

    //  Database credentials
    static final String USER = "root";
    static final String PASS = "ssn@123";

    public void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

        // Set response content type
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.print("<!DOCTYPE html>");
        out.print("<html>");
        out.print("<head>");
        out.print("<title>Log-In</title>");
        out.print("<style>");
        out.print("body {");
        out.print("    text-align: center;");
        out.print("    background-color: #F5EFE8;");
        out.print("    color: #333333;");
        out.print("    font-family: Arial, sans-serif;");
        out.print("}");
        out.print(".links a {");
        out.print("    display: inline-block;");
        out.print("    margin-right: 10px;");
        out.print("    text-decoration: none;");
        out.print("    color: #333333;");
        out.print("    font-weight: bold;");
        out.print("}");
        out.print(".links a:hover {");
        out.print("    text-decoration: underline;");
        out.print("}");
        out.print("form {");
        out.print("    display: inline-block;");
        out.print("    text-align: left;");
        out.print("}");
        out.print("form input {");
        out.print("    margin: 5px;");
        out.print("    padding: 5px;");
        out.print("    border-radius: 5px;");
        out.print("    border: none;");
        out.print("}");
        out.print("form input[type='submit'] {");
        out.print("    background-color: #333333;");
        out.print("    color: #FFFFFF;");
        out.print("    font-weight: bold;");
        out.print("    cursor: pointer;");
        out.print("}");
        out.print("form input[type='submit']:hover {");
        out.print("    background-color: #555555;");
        out.print("}");
        out.print("</style>");
        out.print("</head>");
        out.print("<body>");
        out.print("<div class='links'>");
        out.print("<a href='index.html'>Log-In</a>");
        out.print("<a href='LogoutServlet'>Log-Out</a>");
        out.print("</div>");
        out.print("<br>");

        try {
            Class.forName(JDBC_DRIVER);
            Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);

            String username = request.getParameter("username");
            String password = request.getParameter("password");

            // Execute SQL query
            PreparedStatement pst = conn.prepareStatement("select * from details where username = ?");
            pst.setString(1, username);
            ResultSet rs = pst.executeQuery();
            if (rs.next()) {
                String check = rs.getString(2);
                if (check.equals(password)) {
                    out.print("<button onclick=window.location.href='ViewProfile'>View Profile</button><br>");
                    //out.print("<button onclick = window.location.href='LogoutServlet'>Log-Out</button>");
                    HttpSession session = request.getSession();
                    session.setAttribute("Name", rs.getString(3));
                    session.setAttribute("Email", rs.getString(4));
                    session.setAttribute("Username", rs.getString(1));
                    session.setAttribute("Password", rs.getString(2));
                    //out.println("<h3> Hi, " + rs.getString(3)+ "! </h3><br> <h2> Welcome to your account! Your Email-ID is: "+ rs.getString(4) + "</h2><br>");
                }
                else {
                    out.print("<h4> Incorrect Password </h4>");
                    out.print("<form action=\"LoginServlet\" method=\"POST\">");
                    out.print("Username: <input type = \"text\" name = \"username\" style=\"margin-left: 10px;\"><br>");
                    out.print("Password: <input type = \"text\" name = \"password\" style=\"margin-left: 11px;\"><br> <br>");
                    out.print("<input type = \"submit\" value = \"Log-In\" style=\"align-items: center;\"> </form>");
                }
            }
            else{
                    out.print("<h4> Invalid Username </h4>");
                    out.print("<form action=\"LoginServlet\" method=\"POST\">");
                    out.print("Username: <input type = \"text\" name = \"username\" style=\"margin-left: 10px;\"><br>");
                    out.print("Password: <input type = \"text\" name = \"password\" style=\"margin-left: 11px;\"><br> <br>");
                    out.print("<input type = \"submit\" value = \"Log-In\" style=\"align-items: center;\"> </form>");
            }
            out.println("</body></html>");
			// Clean-up environment
			pst.close();
			conn.close();
		} 
		catch(Exception e) {
            //Handle errors for Class.forName
		    out.println(e);
            e.printStackTrace();
		} 
		
   }
} 
