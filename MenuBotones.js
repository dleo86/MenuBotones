var i = - 300;
var j = - 400;
var k = - 500;
var SlideIn = false;
function ButtonEff( Nb, state )
{
   if ( state == 'up' )
   {
      if ( Nb == 1 )
      {
         document.querySelector( "#first" ).style.borderStyle = "outset"
      }
      if ( Nb == 2 )
      {
         document.querySelector( "#second" ).style.borderStyle = "outset"
      }
      if ( Nb == 3 )
      {
         document.querySelector( "#third" ).style.borderStyle = "outset"
      }
      if ( Nb == 4 )
      {
         document.querySelector( "#fourth" ).style.borderStyle = "outset"
      }
   }
   if ( state == 'down' )
   {
      if ( Nb == 1 )
      {
         document.querySelector( "#first" ).style.borderStyle = "inset"
      }
      if ( Nb == 2 )
      {
         document.querySelector( "#second" ).style.borderStyle = "inset"
      }
      if ( Nb == 3 )
      {
         document.querySelector( "#third" ).style.borderStyle = "inset"
      }
      if ( Nb == 4 )
      {
         document.querySelector( "#fourth" ).style.borderStyle = "inset"
      }
   }
}
 
//  ---------------------------------------
 
function OverEff( Nb, Ovstate )
{
   if ( Ovstate == 'over' )
   {
      if ( Nb == 1 )
      {
         document.querySelector( "#first" ).style.color = "#00CCFF";
         document.querySelector( "#first" ).style.backgroundColor = "red";
      }
      if ( Nb == 2 )
      {
         document.querySelector( "#second" ).style.color = "#00FF00";
         document.querySelector( "#second" ).style.backgroundColor = "#0000FF";
      }
      if ( Nb == 3 )
      {
         document.querySelector( "#third" ).style.color = "#00FF00";
         document.querySelector( "#third" ).style.backgroundColor = "#0000FF";
      }
      if ( Nb == 4 )
      {
         document.querySelector( "#fourth" ).style.color = "#00FF00";
         document.querySelector( "#fourth" ).style.backgroundColor = "#0000FF";
      }
   }
   if ( Ovstate == 'out' )
   {
      if ( Nb == 1 )
      {
         document.querySelector( "#first" ).style.color = "red";
         document.querySelector( "#first" ).style.backgroundColor = "#00CCFF";
      }
      if ( Nb == 2 )
      {
         document.querySelector( "#second" ).style.color = "#0000FF";
         document.querySelector( "#second" ).style.backgroundColor = "#00FF00";
      }
      if ( Nb == 3 )
      {
         document.querySelector( "#third" ).style.color = "#0000FF";
         document.querySelector( "#third" ).style.backgroundColor = "#00FF00";
      }
      if ( Nb == 4 )
      {
         document.querySelector( "#fourth" ).style.color = "#0000FF";
         document.querySelector( "#fourth" ).style.backgroundColor = "#00FF00";
      }
   }
}
 
//  ---------------------------------------
 
function DoIt()
{
   if ( i < 0 )
   {
      i += 4;
      document.querySelector( "#second" ).style.left = i;
   }
   if ( j < 0 )
   {
      j += 4;
      document.querySelector( "#third" ).style.left = j;
   }
   if ( k < 0 )
   {
      k += 4;
      document.querySelector( "#fourth" ).style.left = k;
   }
   if ( ( k == 0 ) || ( SlideIn == false ) )
   {
      clearInterval( Over );
 
   }
}
 
//  ---------------------------------------
 
function ReversIt()
{
   if ( ( i > - 300 ) && ( j < - 100 ) && ( k < - 200 ) )
   {
      i -= 4;
      document.querySelector( "#second" ).style.left = i;
   }
   if ( ( j > - 400 ) && ( k < - 200 ) )
   {
      j -= 4;
      document.querySelector( "#third" ).style.left = j;
   }
   if ( k > - 500 )
   {
      k -= 4;
      document.querySelector( "#fourth" ).style.left = k;
   }
   if ( ( k == - 500 ) || ( SlideIn == true ) )
   {
      clearInterval( Out );
   }
}
 
//  ---------------------------------------
 
function Go()
{
   SlideIn = ! SlideIn;
   if( SlideIn == true )
   {
      Over = setInterval( "DoIt()", 1 );
   }
   else
   {
      Out = setInterval( "ReversIt()", 1 );
   }
}
 
//  ---------------------------------------
 
function Load( Nb )
{
   if ( Nb == 1 )
   {
      window.location = "http://yaldex.com";
   }
   if ( Nb == 2 )
   {
      window.location = "http://google.com";
   }
   if ( Nb == 3 )
   {
      window.location = "http://yahoo.com";
   }
}