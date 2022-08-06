$(document).ready(function() {

    $("#tab1_content").hide();
    $("#tab2_content").hide();
    $("#tab3_content").hide();
    $("#tab4_content").hide();
    $("#tab5_content").hide();
    $("#tab6_content").hide();
    $("#tab7_content").hide();
    $("#tab8_content").hide();

    $("#tab0").click(function() {
        $("#tab0_content").hide();
        $("#tab1_content").hide();
        $("#tab2_content").hide();
        $("#tab3_content").hide();
        $("#tab6_content").hide();
        $("#tab7_content").hide();
        $("#tab8_content").hide();
      });
  
    $("#tab1").click(function() {
      $("#tab1_content").show();
      $("#tab2_content").hide();
      $("#tab3_content").hide();
      $("#tab4_content").hide();
      $("#tab5_content").hide();
      $("#tab6_content").hide();
      $("#tab7_content").hide();
      $("#tab8_content").hide();
    });
  
    $("#tab2").click(function() {
      $("#tab2_content").show();
      $("#tab1_content").hide();
      $("#tab3_content").hide();
      $("#tab4_content").hide();
      $("#tab5_content").hide();
      $("#tab6_content").hide();
      $("#tab7_content").hide();
      $("#tab8_content").hide();
    });
  
    $("#tab3").click(function() {
      $("#tab3_content").show();
      $("#tab1_content").hide();
      $("#tab2_content").hide();
      $("#tab4_content").hide();
      $("#tab5_content").hide();
      $("#tab6_content").hide();
      $("#tab7_content").hide();
      $("#tab8_content").hide();
    });
  
    $("#tab4").click(function() {
      $("#tab4_content").show();
      $("#tab1_content").hide();
      $("#tab2_content").hide();
      $("#tab3_content").hide();
      $("#tab5_content").hide();
      $("#tab6_content").hide();
      $("#tab7_content").hide();
      $("#tab8_content").hide();
    });
    $("#tab5").click(function() {
        $("#tab5_content").show();
        $("#tab1_content").hide();
        $("#tab2_content").hide();
        $("#tab3_content").hide();
        $("#tab6_content").hide();
        $("#tab7_content").hide();
        $("#tab8_content").hide();
      });
    $("#tab6").click(function() {
        $("#tab6_content").show();
        $("#tab1_content").hide();
        $("#tab2_content").hide();
        $("#tab3_content").hide();
        $("#tab5_content").hide();
        $("#tab7_content").hide();
        $("#tab8_content").hide();
      });
    $("#tab7").click(function() {
        $("#tab7_content").show();
        $("#tab1_content").hide();
        $("#tab2_content").hide();
        $("#tab3_content").hide();
        $("#tab5_content").hide();
        $("#tab6_content").hide();
        $("#tab8_content").hide();
      });
    $("#tab8").click(function() {
        $("#tab4_content").show();
        $("#tab1_content").hide();
        $("#tab2_content").hide();
        $("#tab3_content").hide();
        $("#tab5_content").hide();
        $("#tab6_content").hide();
        $("#tab7_content").hide();
      });
  });

  function checkWindowSize() {
    if ( jQuery(window).width() >= 480 ) {
        $('.truncate').succinct({
            size: 100
        }); 
    }
    else if ( jQuery(window).width() >= 320 ) {
        $('.truncate').succinct({
            size: 55
        }); 
    } 
    else {
        $('.truncate').succinct({
            size: 150
        }); 
    }   
  }
  
  jQuery(document).ready(function(){
    jQuery(window).resize(checkWindowSize);
    checkWindowSize();
  });
 