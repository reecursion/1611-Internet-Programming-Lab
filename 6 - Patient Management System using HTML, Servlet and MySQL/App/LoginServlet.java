import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
 
public class LoginServlet extends HttpServlet{
      //  Application credentials
      static final String USER = "admin";
      static final String PASS = "ssn@123";
	  public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
 
		// Set response content type
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

		try {
			String username=request.getParameter("username");
			String password=request.getParameter("password");

			if (username.equals("admin") && password.equals("ssn")){
				out.print("<!DOCTYPE html> <html>");
				out.print("<head><title>PMS | Home</title></head>" );
				out.print(" <body><h1>Patient Details Management System</h1>");
				out.print("<div class = \"links\">");
				out.print("<a href = \"add.html\"> Add Record </a><br> ");
				out.print("<a href = \"update.html\"> Update Record </a> <br>");
				out.print("<a href = \"delete.html\"> Delete Record </a> <br> ");
				out.print("<a href = \"ViewServlet\"> View Record </a> <br>  ");
				out.print("<a href = \"search.html\"> Search a Record </a> <br> ");
				out.print("</div>");
				out.print("	<br>");
				out.print("</head>");
				out.print("</html>");

			}
			else{
				out.print("<!DOCTYPE html> <html>");
				out.print("<head><title>PMS | Home</title></head>" );
				out.print(" <body><h1>Patient Details Management System</h1>");
				out.print("Incorrect Credentials Entered. Try again. <br><br> ");
				out.print("<form method=\"post\" action=\"LoginServlet\">");
            	out.print("Username: <input name=\"username\" type = \"text\" style=\"margin-left: 100px;\"><br><br>");
            	out.print("Password: <input name=\"password\" type = \"password\" style=\"margin-left: 100px;\"><br><br>");
            	out.print("<input type = \"submit\" value = \"Log In\">");
        		out.print("</form>");
				out.print("	<br>");
				out.print("</head>");
				out.print("</html>");
			}
			// Clean-up environment
		} 
		catch(Exception e) {
         //Handle errors for Class.forName
		 out.println(e);
         e.printStackTrace();
		} 
		
   }
} 