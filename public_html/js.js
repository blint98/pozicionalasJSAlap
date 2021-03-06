 console.log("konzolra irunk");
          document.write("Hello világ");
          document.getElementById('a').value=2;
          document.getElementById('b').value=3;
         var valtozoA = document.getElementById('a').value;
         var valtozoB = document.getElementById('b').value;
         document.write("<p> style='color:red'> Első érték:"+valtozoA + " </p>")
         document.write("<p>Első változó: "+valtozoA+"</p>");
         document.write("<p>második változó: "+valtozoB+"</p>");
         var osszeg = Number(valtozoA)+Number(valtozoB);
         document.write("<p> A két szám összege "+osszeg+"</p>");
         
         var szoveg="";
         var sv=0;
         for (var i = 1; i < 101; i++)
         {
             szoveg+=i + ",";
             sv++;
             if (sv==0)
             {
                 szoveg +="<br>";
                 sv = 0;
             }
    
}
 
    

document.write("<p>"+szoveg"</p>"")