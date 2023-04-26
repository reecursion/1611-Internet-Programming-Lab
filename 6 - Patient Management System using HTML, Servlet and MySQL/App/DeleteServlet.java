import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
 
public class DeleteServlet extends HttpServlet{
		// JDBC driver name and database URL
      static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
      static final String DB_URL="jdbc:mysql://localhost:3306/patient_details";

      //  Database credentials
      static final String USER = "root";
      static final String PASS = "ssn@123";
	  public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
 
		// Set response content type
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

		out.print("<!DOCTYPE html> <html>");
		out.print("<head><title>PMS | Delete record</title></head>" );
		out.print(" <body><h1>Patient Details - Delete records</h1>");
		out.print("<div class = \"links\">");
		out.print("<a href = \"add.html\"> Add Record | </a> ");
		out.print("<a href = \"update.html\"> Update Record | </a> ");
		out.print("<a href = \"delete.html\"> Delete Record | </a> ");
		out.print("<a href = \"ViewServlet\"> View Record | </a> ");
		out.print("<a href = \"search.html\"> Search a Record </a> ");
		out.print("</div>");
		out.print("	<br>");
		try {
			Class.forName(JDBC_DRIVER);
			Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
			String id=request.getParameter("id");
			// Execute SQL query
			PreparedStatement pst = conn.prepareStatement("delete from records where id = ?");
			pst.setString(1,id);
			
			int i = pst.executeUpdate();

			// Extract data from result set
			out.println("<h3> Deleted Record from database </h3></body></html>");
			response.sendRedirect("ViewServlet");
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