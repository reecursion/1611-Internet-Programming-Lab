import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class LogoutServlet extends HttpServlet{
	  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
 
		// Set response content type
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

		out.print("<!DOCTYPE html> <html>");
		out.print("<head><title>Log-In</title>");
        out.print("<style>body{text-align:center; background-color: #FFF8E6; font-family: Arial; font-size: 20px;} .links {margin-top: 20px; margin-bottom: 20px;} .links a {color: #E88D67; text-decoration: none; margin-right: 10px;} button {background-color: #E88D67; color: white; font-size: 20px; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin-top: 20px;}</style>");
        out.print("</head>");
		out.print("<body>");
		out.print("<div class = \"links\">");
		out.print("<a href = \"index.html\"> Log-In | </a> ");
		out.print("<a href = \"LogoutServlet\"> Log-Out </a> ");
		out.print("</div>");
		out.print("	<br>");
		try {
			HttpSession session = request.getSession(false);
			if (session == null)
			{
				response.sendRedirect("index.html");
			}
			session.invalidate();
			out.print("<h4> User has logged out </h4>");
			out.print("<button onclick = window.location.href='index.html'>Go to Log-In</button><br>");
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
