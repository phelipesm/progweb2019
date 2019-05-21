
for(var j = 1; j <= 10; j ++){
    document.write("<table border='1'>")
    document.write("<tr> <td colspan=2><b>Produtos de " + j + "</b></td> </tr>")
    document.write("<tbody>")
    for(var i = 1; i <= 10; i++){
        document.write("<tr> <td>" + j + "x" + i + "</td> <td>" + j*i + "</td> </tr>")
    }
    document.write("</tbody>")
    document.write("</table>")
}