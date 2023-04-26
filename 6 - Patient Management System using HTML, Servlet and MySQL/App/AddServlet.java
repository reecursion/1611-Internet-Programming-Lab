import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
 
public class AddServlet extends HttpServlet{
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
		out.print("<head><title>PMS | Add record</title></head>" );
		out.print(" <body><h1>Patient Details - Add record</h1>");
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
			
			String name=request.getParameter("name");
			String diseasename=request.getParameter("disease");
			String id=request.getParameter("id");
			String ageStr=request.getParameter("age");
			int age = Integer.parseInt(ageStr);
			String phStr=request.getParameter("phno");
			int phno = Integer.parseInt(phStr);
			// Execute SQL query
			PreparedStatement pst = conn.prepareStatement("insert into records values(?, ?, ?, ?, ?)");

			pst.setString(1,id);
			pst.setString(2,name);
			pst.setInt(3,age);
			pst.setInt(4,phno);
			pst.setString(5,diseasename);
			
			int i = pst.executeUpdate();
			response.sendRedirect("ViewServlet");
			// Extract data from result set
			out.println("<h3> Inserted into database </h3></body></html>");

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
