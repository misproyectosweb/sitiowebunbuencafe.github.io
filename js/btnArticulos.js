/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function ()
{
    $(function ()
    {
        $(".btnTexto").bind("click", function ()
        {
            $(this).text($(this).text() === "Ocultar artículo" ? "Mostrar artículo" : "Ocultar artículo");
            $(this).prev().Toggle();
        });
    });
});