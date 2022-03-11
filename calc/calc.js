"use strict";
var $ = function(id) { return document.getElementById(id); };
var inputval="";
var buttontxt;
var item;
var sqrt="&#8730;";
var buttons= document.querySelectorAll("button");
for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttontxt=e.target.innerText;
        console.log("Button number is=",buttontxt);
        if(buttontxt=="C"){
           inputval=" ";
           $("input").value=inputval;
        }
        else if(buttontxt=="=")
        {
            inputval=eval($("input").value);
            $("input").value=inputval;
        }
        else if(buttontxt=="sin"){
            inputval=Math.sin($("input").value);
            $("input").value=inputval;
        }
        else if(buttontxt=="cos"){
            inputval=Math.cos($("input").value);
            $("input").value=inputval;
        }
        else if(buttontxt=="tan"){
            inputval=Math.tan($("input").value);
            $("input").value=inputval;
        }
        else if(buttontxt=="ln"){
            inputval=Math.log($("input").value);
            $("input").value=inputval;
        }
        else if(buttontxt=="sqrt"){
            inputval=Math.sqrt($("input").value);
            $("input").value=inputval;
        }
        else if(buttontxt=="X2"){
            inputval=Math.pow($("input").value,2);
            $("input").value=inputval;
        }
        else if(buttontxt=="x^"){
            inputval=Math.pow($("input").value);
            $("input").value=inputval;
        }
        else if(buttontxt=="<--"){
            inputval=inputval.substr(0,inputval.length-1);
            $("input").value=inputval;
        }
        else if(buttontxt=="Pi"){
            if(inputval==""){
                inputval=Math.PI;
                $("input").value=inputval;
            }
            else{
                inputval=Math.PI*$("input").value;
                $("input").value=inputval;
            }
        }
        else if(buttontxt=="+/-")
        {
            if(inputval>0)
            {
                inputval=-Math.abs($("input").value);
                $("input").value=inputval;
            }
            else
            {
                inputval=Math.abs($("input").value);
                $("input").value=inputval;
            }
        }
        else
        {
                inputval+=buttontxt;
            $("input").value=inputval;
        }
        
    })

}
var calculate=function(input)
{
    
};
var clear=function(){
    
}
var sin=function()
{
    
};
var cos=function()
{
    
};
var tan=function()
{
    $("input").value=Math.tan($("input").value);
};
var ln=function()
{
    $("input").value=Math.log($("input").value);
};

var pi=function()
{
    if(input==null)
    {
        $("input").value=Math.PI();
    }
};
window.onload=function(){
    $("input").focus();
};
