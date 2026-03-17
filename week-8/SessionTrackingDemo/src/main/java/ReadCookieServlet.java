
import java.io.PrintWriter;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;


/**
 * Servlet implementation class ReadCookieServlet
 */
@WebServlet("/ReadCookieServlet")
public class ReadCookieServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ReadCookieServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");
	    PrintWriter out = response.getWriter();

	    Cookie[] cookies = request.getCookies();

	    if(cookies != null)
	    {
	        out.println("<h2>Cookies Found</h2>");

	        for(Cookie c : cookies)
	        {
	            out.println("Cookie Name: " + c.getName() + "<br>");
	            out.println("Cookie Value: " + c.getValue() + "<br><br>");
	        }
	    }
	    else
	    {
	        out.println("No Cookies Found");
	    }
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
