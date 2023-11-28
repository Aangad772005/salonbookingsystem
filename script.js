var menubutton = document.getElementById('menubutton');
  var navigation = document.getElementById('navigation'); 
  var menu = document.getElementById('./menu.png'); 
  menubutton.onclick = function() 
  { 
     if(navigation.style.right=="-160px")  
     { 
       navigation.style.right="0"; 
       menu.src="./close.png";
     }
     else 
     { 
       navigation.style.right="-160px";  
       menu.src="./menu.png";

      
     }
  }
