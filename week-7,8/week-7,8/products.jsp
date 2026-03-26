<%@ page import="java.util.*" %>
<!DOCTYPE html>
<html>
<head>
 <title>Catalog</title>
 <!-- Bootstrap -->
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.
2/dist/css/bootstrap.min.css" rel="stylesheet">
 <style>
 .grid {
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax
(250px, 1fr));
 gap: 20px;
 }
 .card img {
 height: 200px;
 object-fit: cover;
 }
 </style>
</head>
<body class="bg-light">
<
jsp:
include page="navbar.jsp" />
WAD Week - 7,8 13
<div class="container mt-4">
 <h2 class="mb-4">Product Catalog</h2>
 <div class="grid">
<%
 List<String[]> products =
 (List<String[]>) request.getAttribute("productLis
t");
 if(products != null && !products.isEmpty()){
 for(String[] p : products){
%>
 <div class="card shadow">
 <img src="https://source.unsplash.com/400x300/?
shopping,<%= p[1] %>"
 class="card-img-top">
 <div class="card-body text-center">
 <h5 class="card-title"><%= p[1] %></h5>
 <p class="card-text fw-bold">₹ <%= p[2] %>
</p>
 <!-- Simple Buy (No cart) -->
 <form action="CartServlet" method="post">
 <input type="hidden" name="product" val
ue="<%= p[1] %>">
 <input type="hidden" name="price" value
="<%= p[2] %>">
 <button class="btn btn-primary w-100">
 Buy Now
 </button>
 </form>
 </div>
 </div>

<%
 }
 } else {
%>
 <div class="alert alert-info">
 No products available.
 </div>
<%
 }
%>
 </div>
</div>
</body>
</html>
