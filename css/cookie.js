   function getCookieValue(cookieName)
    {
       var cookieValue = document.cookie;
       var cookieStartsAt = cookieValue.indexOf(" " + cookieName + "=");
       if (cookieStartsAt == -1)
       {
          cookieStartsAt = cookieValue.indexOf(cookieName + "=");
       }
       if (cookieStartsAt == -1)
       {
          cookieValue = null;
       }
       else
       {
          cookieStartsAt = cookieValue.indexOf("=", cookieStartsAt) + 1;
          var cookieEndsAt = cookieValue.indexOf(";", cookieStartsAt);
          if (cookieEndsAt == -1)
          {
             cookieEndsAt = cookieValue.length;
          }
          cookieValue = unescape(cookieValue.substring(cookieStartsAt,
              cookieEndsAt));
       }
       return cookieValue;
    }

      setCookie("TestCookie","Yes","","");
    if (getCookieValue("TestCookie") == null)
       {
          alert("This website requires cookies to function");
       }