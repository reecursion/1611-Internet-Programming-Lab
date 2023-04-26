import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
 
public class ViewProfile extends HttpServlet{
	  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
 
		// Set response content type
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

		out.print("<!DOCTYPE html> <html>");
		out.print("<head><title>View Profile</title>");
        out.print("<style>");
        out.print("body{background-color: #F8E9A1; text-align:center; font-family: Arial, sans-serif;}");
        out.print(".container{width: 80%; margin: 0 auto;}");
        out.print(".header{background-color: #CFF6C8; padding: 20px;}");
        out.print(".header h1{margin: 0;}");
        out.print(".links{float: right;}");
        out.print(".links a{color: #336699; text-decoration: none;}");
        out.print(".content{background-color: #FFFFFF; padding: 20px;}");
        out.print("</style>");
        out.print("</head>");
        out.print("<body>");
        out.print("<div class=\"container\">");
        out.print("<div class=\"header\">");
        out.print("<h1>View Profile</h1>");
        out.print("<div class=\"links\">");
        out.print("<a href=\"index.html\">Log-In</a> |");
        out.print("<a href=\"LogoutServlet\">Log-Out</a>");
        out.print("</div>");
        out.print("</div>");
        out.print("<div class=\"content\">");
		try {
			HttpSession session = request.getSession(false);
			String name= (String)session.getAttribute("Name");  
			String email= (String)session.getAttribute("Email");  

    		out.println("<p style=\"font-size: 25px\">Hi, " +name+ "! </p> <p style=\"font-size: 20px\">Welcome to your account!<br>Email-ID: "+ email + "<br>");
			out.print("Username: "+ (String)session.getAttribute("Username") + "<br>");
			out.print("Password: "+ (String)session.getAttribute("Password") + "</p><br>");
            out.println("</div>");
            out.println("</div>");
            out.println("</body></html>");
			// Clean-up environment
			
		} 
		catch(Exception e) {
            //Handle errors for Class.forName
		    out.println(e);
            e.printStackTrace();
		} 
		
   }
}
