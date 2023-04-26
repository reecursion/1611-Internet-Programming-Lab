import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
 
public class ViewServlet extends HttpServlet{
		// JDBC driver name and database URL
      static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
      static final String DB_URL="jdbc:mysql://localhost:3306/patient_details";

      //  Database credentials
      static final String USER = "root";
      static final String PASS = "ssn@123";
	  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
 
		// Set response content type
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

		out.print("<!DOCTYPE html> <html>");
		out.print("<head><title>PMS | View records </title></head>" );
		out.print(" <body><h1>Patient Details - View records</h1>");
		out.print("<div class = \"links\">");
		out.print("<a href = \"add.html\"> Add Record | </a> ");
		out.print("<a href = \"update.html\"> Update Record | </a> ");
		out.print("<a href = \"delete.html\"> Delete Record | </a> ");
		out.print("<a href = \"ViewServlet\"> View Record | </a> ");
		out.print("<a href = \"search.html\"> Search a Record </a> ");
		out.print("</div>");
		out.print("<br>");
		out.print("<style> th, td { padding:15px;  border: 1px solid black; border-collapse: collapse; } </style>");
		try {
			Class.forName(JDBC_DRIVER);
			Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);

			PreparedStatement pst = conn.prepareStatement("select * from records");
			ResultSet rs = pst.executeQuery();
			out.println("<table style=\"margin-left: auto; margin-right: auto; border: 1px solid black; border-collapse: collapse;\"><tr><th>Id</th><th>Name</th><th>Age</th><th>Phone Number</th><th>Disease</th></tr>");
			while (rs.next()){
				out.println("<tr><td>"+ rs.getString(1)+"</td>");
				out.println("<td>"+ rs.getString(2)+"</td>");
				out.println("<td>"+ rs.getString(3)+"</td>");
				out.println("<td>"+ rs.getString(4)+"</td>");
				out.println("<td>"+ rs.getString(5)+"</td></tr>");
			}
			// Extract data from result set
			out.println("</table></body></html>");

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