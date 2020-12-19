<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Questionnaire</title>
    <link href="${contextPath}/resources/css/questionStyle.css" rel="stylesheet">
</head>
<body bgcolor="#CFCECB">
<h2 id="test_status"></h2>
<fieldset id="test">
    <legend>Jean-Jules && Olivier</legend>

</fieldset>
<script src="${contextPath}/resources/js/questionsManagement.js"></script>
</body>
<hr>
<footer class='footerbottom'>

    <center><div> class='contentfooter'>Copyright &#169; 2020 MWAMBA Jean-Jules and KOUADIO Olivier| <a href='https://www.linkedin.com/feed/'> Contactez-nous !</a> </div></center>

</footer>
</html>
