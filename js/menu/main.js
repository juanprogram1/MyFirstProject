btnpdf.onclick= function(){

var doc = new jsPDF('p', 'pt', 'letter');
var margin = 10;
var scale = (doc.internal.pageSize.width - margin * 2) /
document.body.scrollWidth;
doc.html(document.body, {
        x: margin,
        y: margin,
        html2canvas: {
            scale: scale,
        }, 

        callback: function(doc){
               doc.output('dataurlnewwindow', {filename: 'fichero-pdf.pdf'

                   });

        }


});
}