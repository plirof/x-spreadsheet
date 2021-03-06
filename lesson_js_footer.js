//<script type="text/javascript">
/*
* tinymce_lesson_js_footer  (put this in same folder as parent html)
*
*
* Changes:
* ver200127a - file_local_param, NEED?DEFINE local_server_probe_file(at http://local_server_probe_file path) (Has CORS problem - could run "chromium --disable-web-security" to avoid )
* ver200126a - better null param checks
* ver200124 - added divs probeserver ,file,image,jsonxls  (to test04.html) **reload works only inside the file= text
* ver200121 - hidediv1-hidediv7 : eg http://192.168.1.200/tinymce_class/tinymce_template_form.html?file=temp_test01&hidediv2&hidediv1
* ver200114 - probeserver reloads every 30sec, else load it once
* ver191216 -initial tinymce version - sample http://192.168.1.200/tinymce_class/tinymce.html?probeserver&file=lesson05
* 
* example : index.html?showdiv5\&timer3\&probeserver , 
*/

var first_click=true;
var url_time_param=location.search.substring(1).indexOf("time");
var url_local_param_exists=location.search.substring(1).indexOf("localurl");


var url_string = location;// "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; //window.location.href
var url = new URL(location.href);

var file_name_param = url.searchParams.get("file");
var image_name_param = url.searchParams.get("image");
var json_name_param = url.searchParams.get("jsonxls");
var file_local_param = url.searchParams.get("localurl");

console.log("file_name_param="+file_name_param +" , image_name_param= "+image_name_param +", jsonxls="+json_name_param +" , file_local_param="+file_local_param);



// (((((((((((((((((((  option to hide only specific DIV (((((((((((((((((((
    var url_hidediv_param=location.search.substring(1).indexOf("hidediv");// != to -1 if we have this param
    var url_hidediv1=location.search.substring(1).indexOf("hidediv1");
    var url_hidediv2=location.search.substring(1).indexOf("hidediv2");
    var url_hidediv3=location.search.substring(1).indexOf("hidediv3");
    var url_hidediv4=location.search.substring(1).indexOf("hidediv4");
    var url_hidediv5=location.search.substring(1).indexOf("hidediv5");
    var url_hidediv6=location.search.substring(1).indexOf("hidediv6");
    var url_hidediv7=location.search.substring(1).indexOf("hidediv7");
// ))))))))))))))))  option to hide only specific DIV  )))))))))))))))))))))))


// (((((((((((((((((((((((((( option to show submit button & name/school input fields ((((((((((
    var url_show_submit_button=location.search.substring(1).indexOf("showsubmit");// != to -1 if we have this param
    document.getElementById("div-submit").style.display = "none";
    if(url_show_submit_button!==-1) {console.log("DIV-SUBMIT-style.display=block(show)");document.getElementById("div-submit").style.display = "block";}
// )))))))))))))))))))))))))) option to show submit button & name/school input fields ))))))))


//+++++++++++++++++++ probeserver4lessons v02 1911+++++++++++++++++
var server_probing_enabled=false;
var url_probeserver=location.search.substring(1).indexOf("probeserver");
//if (url_probeserver!==-1)
if (url_probeserver!==null)     
    server_probing_enabled=true;

var timer_server_probe = 30000; //probe every 30 seconds
var server_probe_file="lessons/lesson05.htm";
var server_probe_image="lessons/lesson05.jpg";
var server_probe_json="lessons/lesson05.json";

if (file_name_param!==-1 && file_name_param!==null) { 
    server_probe_file='lessons/'+file_name_param +".htm";
    console.log(server_probe_file);
    }

if (image_name_param!==-1 && image_name_param!==null) {
    server_probe_image='lessons/'+image_name_param +".jpg";
    console.log(server_probe_image);   
    }

if (json_name_param!==-1 && json_name_param!==null) {
    server_probe_json='lessons/'+json_name_param +".json";
    console.log(server_probe_json);
    }


var jsonrequestInterval = function () {
    console.log("The FILE request was send");
    // <hr><div id="probeserver"></div><hr> 
    var jsonrequestIntervaled = new XMLHttpRequest();
    var random_number=Math.random(); // OLD was=Date.prototype.getTime;
    jsonrequestIntervaled.open("GET", server_probe_file+"?"+random_number, true); // Date.prototype.getTime is used to avoid caching
    jsonrequestIntervaled.send();
    jsonrequestIntervaled.onreadystatechange = function () {
        if (jsonrequestIntervaled.readyState == 4) {
            console.log("The FILE request was made and returned status="+jsonrequestIntervaled.status+" , and results (with random number="+random_number);
            var response_string =jsonrequestIntervaled.responseText;

            //always add our extra text -unless we got an 404 not found error
            if (jsonrequestIntervaled.status!=404 && jsonrequestIntervaled.status!=0) {document.getElementById("probeserver").innerHTML = response_string;}

            //in case we put the word reload, refresh browser
            if (response_string.indexOf("reload") !== -1) {
                console.log("refreshing browser");
                //document.getElementById("probeserver").innerHTML = response_string;
                window.location.reload(true);
            }

    // (((((((((((((((((((  option to hide only specific DIV (((((((((((((((((((
    if((url_hidediv_param!==-1 ) && (url_hidediv_param!==null ) /*&& (url_time_param==-1 )*/  ){  //disable show_url IF we have set timer
            //if((url_hidediv1==-1) && (url_time_param==-1 )) document.getElementById("div1").style.display = "none";
         if(url_hidediv1!==-1) document.getElementById("div1").style.display = "none";
         if(url_hidediv2!==-1) document.getElementById("div2").style.display = "none";
         if(url_hidediv3!==-1) document.getElementById("div3").style.display = "none";
         if(url_hidediv4!==-1) document.getElementById("div4").style.display = "none";
         if(url_hidediv5!==-1) document.getElementById("div5").style.display = "none";
         if(url_hidediv6!==-1) document.getElementById("div6").style.display = "none";
         if(url_hidediv7!==-1) document.getElementById("div7").style.display = "none";    
    } 
    // ))))))))))))))))  option to hide only specific DIV  )))))))))))))))))))))))

            
        }
    }; // end of jsonrequestIntervaled.onreadystatechange = function () {
    
}; //END of var jsonrequestInterval = function () {

var jsonrequestIntervalImage = function () {
    console.log("The image request was send");
    // <hr><div id="probeserver"></div><hr> 
    var jsonrequestIntervaledImage = new XMLHttpRequest();
    var random_number=Math.random(); // OLD was=Date.prototype.getTime;
    jsonrequestIntervaledImage.open("GET", server_probe_image+"?"+random_number, true); // Date.prototype.getTime is used to avoid caching
    jsonrequestIntervaledImage.send();
    jsonrequestIntervaledImage.onreadystatechange = function () {
        if (jsonrequestIntervaledImage.readyState == 4) {
            console.log("The IMAGE request was made and returned status="+jsonrequestIntervaledImage.status+" , and results (with random number="+random_number);
            //var response_string =jsonrequestIntervaledImage.responseText;

            //always add our extra text -unless we got an 404 not found error
            //if (jsonrequestIntervaledImage.status!=404 && jsonrequestIntervaledImage.status!=0) document.getElementById("lessonimage").innerHTML = '<img src="lessons/lesson2a-bookstore.jpg"'+'<img src="'+response_string+'" >';
            if (jsonrequestIntervaledImage.status!=404 && jsonrequestIntervaledImage.status!=0) document.getElementById("lessonimage").innerHTML = '<img src="'+server_probe_image+'" >';       
        }
    }; // end of jsonrequestIntervaledImage.onreadystatechange = function () {
    
};


//var jsonrequestIntervalJSON = function (xs) {
function jsonrequestIntervalJSON () {    
    console.log("The JSON request was send");
    // <hr><div id="probeserver"></div><hr> 
    var jsonrequestIntervaledJSON = new XMLHttpRequest();
    var random_number=Math.random(); // OLD was=Date.prototype.getTime;
    jsonrequestIntervaledJSON.open("GET", server_probe_json+"?"+random_number, true); // Date.prototype.getTime is used to avoid caching
    jsonrequestIntervaledJSON.send();
    jsonrequestIntervaledJSON.onreadystatechange = function () {
        if (jsonrequestIntervaledJSON.readyState == 4) {
            var response_string =jsonrequestIntervaledJSON.responseText;
            console.log("The JSON request was made and returned status="+jsonrequestIntervaledJSON.status+" , and results (with random number="+random_number /*+", response_string="+response_string*/);

            //always add our extra text -unless we got an 404 not found error
            if (jsonrequestIntervaledJSON.status!=404 && jsonrequestIntervaledJSON.status!=0) {json_remote = response_string;/* xs.loadData(response_string);*/}
                  // xs.loadData(json_remote).change((cdata) => {console.log(cdata);console.log(xs.validate()); }); }
        }
    }; // end of jsonrequestIntervaledJSON.onreadystatechange = function () {
    
}; //END of var jsonrequestIntervalJSON = function () {

var jsonrequestCustomLocal = function () {
    
    // <hr><div id="probeserver"></div><hr> 
    var jsonrequestCustomLocalReq = new XMLHttpRequest();
    var random_number=Math.random(); // OLD was=Date.prototype.getTime;
    var localfilepath="http://"+file_local_param+"/"+local_server_probe_file+"?"+random_number;
    console.log("The CustomLocal FILE request was send localfilepath="+localfilepath);
    jsonrequestCustomLocalReq.open("GET", localfilepath, true); // Date.prototype.getTime is used to avoid caching
    jsonrequestCustomLocalReq.send();
    jsonrequestCustomLocalReq.onreadystatechange = function () {
        if (jsonrequestCustomLocalReq.readyState == 4) {
            console.log("The FILE request was made and returned status="+jsonrequestCustomLocalReq.status+" , and results (with random number="+random_number);
            var response_string =jsonrequestCustomLocalReq.responseText;

            //always add our extra text -unless we got an 404 not found error
            if (jsonrequestCustomLocalReq.status!=404 && jsonrequestCustomLocalReq.status!=0) {json_remote = response_string;/* xs.loadData(response_string);*/}

            //in case we put the word reload, refresh browser
            if (response_string.indexOf("reload") !== -1) {
                console.log("refreshing browser");
                //document.getElementById("probeserver").innerHTML = response_string;
                window.location.reload(true);
            }

    // (((((((((((((((((((  option to hide only specific DIV (((((((((((((((((((
    if((url_hidediv_param!==-1 ) && (url_hidediv_param!==null ) /*&& (url_time_param==-1 )*/  ){  //disable show_url IF we have set timer
            //if((url_hidediv1==-1) && (url_time_param==-1 )) document.getElementById("div1").style.display = "none";
         if(url_hidediv1!==-1) document.getElementById("div1").style.display = "none";
         if(url_hidediv2!==-1) document.getElementById("div2").style.display = "none";
         if(url_hidediv3!==-1) document.getElementById("div3").style.display = "none";
         if(url_hidediv4!==-1) document.getElementById("div4").style.display = "none";
         if(url_hidediv5!==-1) document.getElementById("div5").style.display = "none";
         if(url_hidediv6!==-1) document.getElementById("div6").style.display = "none";
         if(url_hidediv7!==-1) document.getElementById("div7").style.display = "none";    
    } 
    // ))))))))))))))))  option to hide only specific DIV  )))))))))))))))))))))))

            
        }
    }; // end of jsonrequestCustomLocalReq.onreadystatechange = function () {
    
}; //END of var jsonrequestCustomLocal = function () {


//if (file_name_param!==-1) 
if (file_name_param!==null)     { jsonrequestInterval();}
//if (image_name_param!==-1) 
if (image_name_param!==null)     jsonrequestIntervalImage();
//if (json_name_param!==-1) 
if (json_name_param!==null)     jsonrequestIntervalJSON();
if (file_local_param!==null)     { jsonrequestCustomLocal();}

//console.log ("DEBUGGGGGGGGGGGGGGGG") ;
if (file_name_param!==null) {if(server_probing_enabled ) {setInterval(jsonrequestInterval, timer_server_probe); } else {jsonrequestInterval();}}
if (image_name_param!==null) {if(server_probing_enabled) {setInterval(jsonrequestIntervalImage, timer_server_probe*2); }else {jsonrequestIntervalImage();}}
if (file_local_param!==null && local_server_probe_file!==null ) {console.log ("SSSSSSSSSSSS ");if(server_probing_enabled ) {setInterval(jsonrequestCustomLocal, timer_server_probe); } else {jsonrequestCustomLocal();}}
//if(server_probing_enabled) {setInterval(jsonrequestIntervalJSON, timer_server_probe*2); }else {jsonrequestIntervalJSON();} //We DO NOT want to update (student will loose his work)


//-------------------probeserver ---------------




//</script>
