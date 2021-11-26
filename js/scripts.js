function keep(nameshit,mailshit) {this.name=nameshit; this.mail=mailshit}
$(document).ready(function () {
    $('form#clear').submit(function (e) { 
        e.preventDefault();

        var first = $("input#first").val();
        var second = $("input#mail").val();

       console.log(first);
       console.log(second);
        
    });
});