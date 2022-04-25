jQuery(function ($) {

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});

});

//Codigo propio 

$('#data-arg').hide();
$('#data-brz').hide();
$('#data-mxn').hide();
$('#data-clm').hide();
$('#data-pru').hide();
$('#data-latam-car').hide();


$( "#button-send" ).click(function() {
  if($('input:radio[name=country]:checked').val() == "arg"){
    //alert("Seleccionaste argentina");
    $('#data-arg').show();
    $('#data-brz').hide();
    $('#data-mxn').hide();
    $('#data-clm').hide();
    $('#data-pru').hide();
    $('#data-latam-car').hide();
  }else if($('input:radio[name=country]:checked').val() == "brz"){
    //alert("Seleccionaste brazil");
    $('#data-arg').hide();
    $('#data-brz').show();
    $('#data-mxn').hide();
    $('#data-clm').hide();
    $('#data-pru').hide();
    $('#data-latam-car').hide();
  }else if($('input:radio[name=country]:checked').val() == "mxn"){
    //alert("Seleccionaste mexico");
    $('#data-arg').hide();
    $('#data-brz').hide();
    $('#data-mxn').show();
    $('#data-clm').hide();
    $('#data-pru').hide();
    $('#data-latam-car').hide();
  }else if($('input:radio[name=country]:checked').val() == "clm"){
    //alert("Seleccionaste colombia");
    $('#data-arg').hide();
    $('#data-brz').hide();
    $('#data-mxn').hide();
    $('#data-clm').show();
    $('#data-pru').hide();
    $('#data-latam-car').hide();
  }else if($('input:radio[name=country]:checked').val() == "pru"){
    //alert("Seleccionaste mexico");
    $('#data-arg').hide();
    $('#data-brz').hide();
    $('#data-mxn').hide();
    $('#data-clm').hide();
    $('#data-pru').show();
    $('#data-latam-car').hide();
  }else if($('input:radio[name=country]:checked').val() == "latam-car"){
    //alert("Seleccionaste mexico");
    $('#data-arg').hide();
    $('#data-brz').hide();
    $('#data-mxn').hide();
    $('#data-clm').hide();
    $('#data-pru').hide();
    $('#data-latam-car').show();
  }else{
    alert("Debes seleccionar un pais para mostrar sus datos")
  }
});