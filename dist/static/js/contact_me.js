"use strict";$(function(){$("input,textarea").jqBootstrapValidation({preventSubmit:!0,submitError:function(e,s,t){},submitSuccess:function(e,s){s.preventDefault();var t=$("#name").val(),a=$("#email").val(),c=$("#phone").val(),n=$("#message").val(),r=t;console.log(t+c),$.ajax({url:"./static/mail/contact_me.php",type:"POST",data:{name:t,phone:c,email:a,message:n},cache:!1,success:function(){$("#success").html("<div class='alert alert-success'>"),$("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-success").append("<strong>Your message has been sent. </strong>"),$("#success > .alert-success").append("</div>"),$("#contactForm").trigger("reset")},error:function(){$("#success").html("<div class='alert alert-danger'>"),$("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-danger").append("<strong>Sorry "+r+", it seems that my mail server is not responding. Please try again later!"),$("#success > .alert-danger").append("</div>"),$("#contactForm").trigger("reset")}})},filter:function(){return $(this).is(":visible")}}),$('a[data-toggle="tab"]').click(function(e){e.preventDefault(),$(this).tab("show")})}),$("#name").focus(function(){$("#success").html("")});