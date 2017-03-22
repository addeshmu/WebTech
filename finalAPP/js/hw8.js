var oldSidebar ="#LegHome";
var oldLink="#legLink";
var allnB = null;
var allaB = null;
var allLegData = null;
var allCData = null;
var scrollIndex=1;

$('body').on('click',".clickClass",function(e){
   $('#legLink').trigger('click');
});
$('body').on('click',".clickBillClass",function(e){
    $('#billLink').trigger('click');
});
 val=0;
 val2=1;
$('.table-responsive').on('scroll',function () {
   if(this.scrollLeft>50&&this.scrollLeft<100){
       if(val==0){
           $('#menu-toggle-2').click();
           val=1;
           val2=0;
       }
   }else if(this.scrollLeft==0){
       if(val2==0) {
           $('#menu-toggle-2').click();
           val = 0;
           val2 = 1;
       }
   }
});

function setSlide() {
    $('#myCarousel').carousel(0);
}
function setSlide1() {
    $('#myBillCarousel').carousel(0);
}


$('body').on("click",".sidebar-grp",function (e) {
   var href = this.href;
   $(this).css("color","white");


   var ind= href.search("#");
   var val =href.slice(ind,href.length);
    $(val).show();
    if (oldSidebar!=val) {
        $(oldLink).css("color","grey");
        $(oldSidebar).hide();
    }
    oldSidebar=val;
    oldLink = "#"+this.id;
    e.preventDefault();
});
var scrollIndex=0;
$("#menu-toggle-2").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled-2");
    $('#menu ul').hide();
    val=0;
    val2=1;
});


$(function () {
    $(window).scroll(function(e) {
        if ($(this).scrollLeft > 200)
        {
            $("#menu-toggle-2").click();
        }
    });
});



function findFull(state){

    var jsonState = [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        {
            "name": "Alaska",
            "abbreviation": "AK"
        },
        {
            "name": "American Samoa",
            "abbreviation": "AS"
        },
        {
            "name": "Arizona",
            "abbreviation": "AZ"
        },
        {
            "name": "Arkansas",
            "abbreviation": "AR"
        },
        {
            "name": "California",
            "abbreviation": "CA"
        },
        {
            "name": "Colorado",
            "abbreviation": "CO"
        },
        {
            "name": "Connecticut",
            "abbreviation": "CT"
        },
        {
            "name": "Delaware",
            "abbreviation": "DE"
        },
        {
            "name": "District Of Columbia",
            "abbreviation": "DC"
        },
        {
            "name": "Federated States Of Micronesia",
            "abbreviation": "FM"
        },
        {
            "name": "Florida",
            "abbreviation": "FL"
        },
        {
            "name": "Georgia",
            "abbreviation": "GA"
        },
        {
            "name": "Guam",
            "abbreviation": "GU"
        },
        {
            "name": "Hawaii",
            "abbreviation": "HI"
        },
        {
            "name": "Idaho",
            "abbreviation": "ID"
        },
        {
            "name": "Illinois",
            "abbreviation": "IL"
        },
        {
            "name": "Indiana",
            "abbreviation": "IN"
        },
        {
            "name": "Iowa",
            "abbreviation": "IA"
        },
        {
            "name": "Kansas",
            "abbreviation": "KS"
        },
        {
            "name": "Kentucky",
            "abbreviation": "KY"
        },
        {
            "name": "Louisiana",
            "abbreviation": "LA"
        },
        {
            "name": "Maine",
            "abbreviation": "ME"
        },
        {
            "name": "Marshall Islands",
            "abbreviation": "MH"
        },
        {
            "name": "Maryland",
            "abbreviation": "MD"
        },
        {
            "name": "Massachusetts",
            "abbreviation": "MA"
        },
        {
            "name": "Michigan",
            "abbreviation": "MI"
        },
        {
            "name": "Minnesota",
            "abbreviation": "MN"
        },
        {
            "name": "Mississippi",
            "abbreviation": "MS"
        },
        {
            "name": "Missouri",
            "abbreviation": "MO"
        },
        {
            "name": "Montana",
            "abbreviation": "MT"
        },
        {
            "name": "Nebraska",
            "abbreviation": "NE"
        },
        {
            "name": "Nevada",
            "abbreviation": "NV"
        },
        {
            "name": "New Hampshire",
            "abbreviation": "NH"
        },
        {
            "name": "New Jersey",
            "abbreviation": "NJ"
        },
        {
            "name": "New Mexico",
            "abbreviation": "NM"
        },
        {
            "name": "New York",
            "abbreviation": "NY"
        },
        {
            "name": "North Carolina",
            "abbreviation": "NC"
        },
        {
            "name": "North Dakota",
            "abbreviation": "ND"
        },
        {
            "name": "Northern Mariana Islands",
            "abbreviation": "MP"
        },
        {
            "name": "Ohio",
            "abbreviation": "OH"
        },
        {
            "name": "Oklahoma",
            "abbreviation": "OK"
        },
        {
            "name": "Oregon",
            "abbreviation": "OR"
        },
        {
            "name": "Palau",
            "abbreviation": "PW"
        },
        {
            "name": "Pennsylvania",
            "abbreviation": "PA"
        },
        {
            "name": "Puerto Rico",
            "abbreviation": "PR"
        },
        {
            "name": "Rhode Island",
            "abbreviation": "RI"
        },
        {
            "name": "South Carolina",
            "abbreviation": "SC"
        },
        {
            "name": "South Dakota",
            "abbreviation": "SD"
        },
        {
            "name": "Tennessee",
            "abbreviation": "TN"
        },
        {
            "name": "Texas",
            "abbreviation": "TX"
        },
        {
            "name": "Utah",
            "abbreviation": "UT"
        },
        {
            "name": "Vermont",
            "abbreviation": "VT"
        },
        {
            "name": "Virgin Islands",
            "abbreviation": "VI"
        },
        {
            "name": "Virginia",
            "abbreviation": "VA"
        },
        {
            "name": "Washington",
            "abbreviation": "WA"
        },
        {
            "name": "West Virginia",
            "abbreviation": "WV"
        },
        {
            "name": "Wisconsin",
            "abbreviation": "WI"
        },
        {
            "name": "Wyoming",
            "abbreviation": "WY"
        }
    ];

    for(var i=0;i<jsonState.length;i++){
        if(jsonState[i]["abbreviation"]==state){
            return jsonState[i]["name"];
        }
    }

};
/*
var scrollIndex1=0;
var scrollIndex2=0;
$('#resultsTable').on('scroll',function () {
    if (this.scrollLeft>40)
    {
        if(scrollIndex1==0) {
            $("#wrapper").toggleClass("toggled-2");
            $("#menu ul").hide();
            scrollIndex1++;
            scrollIndex2=0;
        }
    }
    else{
        if(scrollIndex2==0) {
            $("#wrapper").toggleClass("toggled");

        }
    }

});
*/






var myApp = angular.module('myApp1',['angularUtils.directives.dirPagination','ngStorage','ngSanitize','ngAnimate','ui.bootstrap']);
myApp.filter('capitalize', function() {
    return function(input, scope) {
        if (input!=null) {
            input = input.toLowerCase();
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        }
    }
});

myApp.controller('MyController', ['$scope','$http','$sce','$localStorage', function($scope,$http,$sce,$localStorage) {

    $scope.ajxCallState = function(){$http({
        method : "GET",
        url : "/hw8.php?operation=legislators"
    }).then(function mySuccess5(response) {
        gdata  = response.data;
        var i=0 ;

        $scope.users=[];
        if(gdata['results'].length>0){
            allLegData = gdata["results"];
        }
        for(i = 0 ;i<gdata['results'].length;i++)
        {
            var ob = new Object();
            ob.name=gdata['results'][i]['last_name']+','+gdata['results'][i]['first_name'];
            if(gdata['results'][i]['party']=='R'){
                ob.party="http://cs-server.usc.edu:45678/hw/hw8/images/r.png";
            }
            else if (gdata['results'][i]['party']=='D'){
                ob.party="http://cs-server.usc.edu:45678/hw/hw8/images/d.png";
            }
            else{
                ob.party = "http://independentamericanparty.org/wp-content/themes/v/images/logo-american-heritage-academy.png"
            }
            if(gdata['results'][i]['district']!=null) {
                ob.district = "District" + ' ' + gdata['results'][i]['district'];
            }else{
                ob.district ="N.A";
            }
            ob.chamber = gdata['results'][i]['chamber'];
            if(ob.chamber =="senate"){
                ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/s.svg";
            }
            else{
                ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/h.png";
            }
            ob.state = findFull(gdata['results'][i]['state']);
            ob.bioguide_id = gdata['results'][i]['bioguide_id'];
            var stringi = JSON.stringify(ob);
            $scope.users.push(ob);
        }

    }, function myError(response) {
        $scope.errorMessage = response.statusText;
    });};

    $scope.ajxCallHouse = function(){$http({
        method : "GET",
        url : "/hw8.php?operation=legislators"
    }).then(function mySuccess4(response) {
        gdata  = response.data;
        var i=0 ;
        $scope.usersH=[];
        for(i = 0 ;i<gdata['results'].length;i++)
        {
            if (gdata['results'][i]['chamber']=='house') {
                var ob = new Object();
                ob.chamber = gdata['results'][i]['chamber'];
                ob.name = gdata['results'][i]['last_name'] + ',' + gdata['results'][i]['first_name'];
                if (gdata['results'][i]['party'] == 'R') {
                    ob.party = "http://cs-server.usc.edu:45678/hw/hw8/images/r.png";
                }
                else if (gdata['results'][i]['party'] == 'D') {
                    ob.party = "http://cs-server.usc.edu:45678/hw/hw8/images/d.png";
                }else{
                    ob.party = "http://independentamericanparty.org/wp-content/themes/v/images/logo-american-heritage-academy.png";
                }
                if (gdata['results'][i]['district'] != null) {
                    ob.district = "District" + ' ' + gdata['results'][i]['district'];
                } else {
                    ob.district = "N.A";
                }
                if(ob.chamber =="senate"){
                    ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/s.svg";
                }
                else{
                    ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/h.png";
                }
                ob.bioguide_id = gdata['results'][i]['bioguide_id'];
                ob.state = findFull(gdata['results'][i]['state']);
                var stringi = JSON.stringify(ob);
                $scope.usersH.push(ob);
            }
        }


    }, function myError(response) {
        $scope.errorMessage = response.statusText;
    });};

    $scope.ajxCallSenate = function(){$http({
        method : "GET",
        url : "/hw8.php?operation=legislators"
    }).then(function mySuccess0(response) {
        gdata  = response.data;
        var i=0 ;

        $scope.usersS=[];
        for(i = 0 ;i<gdata['results'].length;i++)
        {
            if (gdata['results'][i]['chamber']=='senate') {
                var ob = new Object();
                ob.chamber = gdata['results'][i]['chamber'];
                ob.name = gdata['results'][i]['last_name'] + ',' + gdata['results'][i]['first_name'];
                if (gdata['results'][i]['party'] == 'R') {
                    ob.party = "http://cs-server.usc.edu:45678/hw/hw8/images/r.png";
                }
                else if (gdata['results'][i]['party'] == 'D'){
                    ob.party = "http://cs-server.usc.edu:45678/hw/hw8/images/d.png";
                }else{
                    ob.party ="http://independentamericanparty.org/wp-content/themes/v/images/logo-american-heritage-academy.png";
                }
                if (gdata['results'][i]['district'] != null) {
                    ob.district = "District" + ' ' + gdata['results'][i]['district'];
                } else {
                    ob.district = "N.A";
                }
                if(ob.chamber =="senate"){
                    ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/s.svg";
                }
                else{
                    ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/h.png";
                }
                ob.bioguide_id = gdata['results'][i]['bioguide_id'];
                ob.state = findFull(gdata['results'][i]['state']);
                var stringi = JSON.stringify(ob);
                $scope.usersS.push(ob);
            }
        }


    }, function myError(response) {
        $scope.errorMessage = response.statusText;
    });};

    $scope.dateDiff= function (toDate,fromDate) {
        var magicNumber = (1000 * 60 * 60 * 24);

        return function (toDate, fromDate) {
            if(toDate && fromDate){
                var dayDiff = Math.floor((toDate - fromDate) / magicNumber);
                if (angular.isNumber(dayDiff)){
                    return dayDiff + 1;
                }
            }
        };
    };
    $scope.ajxCallBioGuide = function(){$http({
        method : "GET",
        url : "/hw8.php?operation=legSubOpBioGuideIndividual&bioguide_id="+$scope.selected_bioguide_id
    }).then(function mySuccess7(response) {
        gdata  = response.data;
        var i=0 ;
        if (gdata['results'].length>0)
        {
            $scope.viewDetails = [];
            $scope.viewDetails.name = gdata['results'][0]['title'] + '.' + gdata['results'][0]['last_name'] + ',' + gdata['results'][0]['first_name'];
            $scope.viewDetails.email = gdata['results'][0]['oc_email'];
            $scope.viewDetails.chamber = gdata['results'][0]['chamber'];
            $scope.viewDetails.contact = gdata['results'][0]['phone'];
            $scope.viewDetails.bioguide_id = gdata['results'][0]['bioguide_id'];
            if(gdata['results'][0]['party']=='R'){
                $scope.viewDetails.party="http://cs-server.usc.edu:45678/hw/hw8/images/r.png";
                $scope.viewDetails.partyName="Republican";
            }
            else if (gdata['results'][0]['party']=='D'){
                $scope.viewDetails.party="http://cs-server.usc.edu:45678/hw/hw8/images/d.png";
                $scope.viewDetails.partyName="Democrat";
            }else{
                $scope.viewDetails.partyName="Independent";
                $scope.viewDetails.party ="http://independentamericanparty.org/wp-content/themes/v/images/logo-american-heritage-academy.png";
            }
            $scope.viewDetails.photo = "https://theunitedstates.io/images/congress/450x550/" + $scope.selected_bioguide_id + ".jpg";
            $scope.viewDetails.sterm = gdata['results'][0]['term_start'];
            var ab =new Date($scope.viewDetails.sterm.split("-")[0],$scope.viewDetails.sterm.split("-")[1],$scope.viewDetails.sterm.split("-")[2]);
            $scope.viewDetails.eterm = gdata['results'][0]['term_end'];
            var cd =new Date($scope.viewDetails.eterm.split("-")[0],$scope.viewDetails.eterm.split("-")[1],$scope.viewDetails.eterm.split("-")[2]);
            var td = new Date();
            var oneDay = 24*60*60*1000;
            var diffDays = Math.round(Math.abs((cd.getTime() - ab.getTime())/(oneDay)));
            var diffDays2 = Math.round(Math.abs((td.getTime() - ab.getTime())/(oneDay)));
            $scope.viewDetails.percentage = Math.round(diffDays2/diffDays*100);
            $scope.viewDetails.office = gdata['results'][0]['office'];
            $scope.viewDetails.state = findFull(gdata['results'][0]['state']);
            $scope.viewDetails.fax = gdata['results'][0]['fax'];
            $scope.viewDetails.birthday = gdata['results'][0]['birthday'];
            $scope.viewDetails.twitter = "http://www.twitter.com/"+gdata['results'][0]['twitter_id'];
            $scope.viewDetails.facebook = "http://www.facebook.com/"+gdata['results'][0]['facebook_id'];
            $scope.viewDetails.website = gdata['results'][0]['website'];
            $scope.date = new Date();
            $scope.viewDetails.percent=Math.round($scope.dateDiff($scope.date,$scope.viewDetails.sterm)/$scope.dateDiff($scope.viewDetails.eterm,$scope.viewDetails.sterm))*100;

        }
    }, function myError(response) {
        $scope.errorMessage = response.statusText;
    });};

    $scope.ajxCallBioCommittee = function(){$http({
        method : "GET",
        url : "/hw8.php?operation=legSubOpBioGuideCommittee&bioguide_id="+$scope.selected_bioguide_id
        }).then(function mySuccess(response) {
       var  gdata  = response.data;


        if(gdata) {
            var top5c =[];

            for (i = 0; i < gdata['results'].length; i++) {

                var ob = new Object();
                ob.chamber = gdata['results'][i]['chamber'];
                ob.cid = gdata['results'][i]['committee_id'];
                ob.cname = gdata['results'][i]['name'];
                var stringi = JSON.stringify(ob);
                top5c.push(ob);

            }
            $scope.top5c=top5c;

        }
    }, function myError(response) {
        $scope.errorMessage = response.statusText;
    });};



    $scope.ajxCallBioBill = function(){$http({
        method : "GET",
        url : "/hw8.php?operation=legSubOpBioGuideBill&bioguide_id="+$scope.selected_bioguide_id
    }).then(function mySuccess1(response) {
        var gdata  = response.data;

        if(gdata['results'].length>0) {
            var top5b = [];

            for (i = 0; i < gdata['results'].length; i++) {

                var ob = new Object();
                ob.bid = gdata['results'][i]['bill_id'];
                ob.btitle = gdata['results'][i]['official_title'];
                ob.chamber = gdata['results'][i]['chamber'];
                ob.cong = gdata['results'][i]['congress'];
                ob.btype= gdata['results'][i]['bill_type'];
                if (gdata['results'][i]['last_version']) {
                    ob.webLink = gdata['results'][i]['last_version']['urls']['pdf'];
                }
                else{
                    ob.webLink="N.A.";
                }
                var stringi = JSON.stringify(ob);
                top5b.push(ob);
            }
            $scope.top5b=top5b;


        }
    }, function myError(response) {
        $scope.errorMessage = response.statusText;
    });};

    $scope.setSelected = function (idSelected) {
        $scope.selected_bioguide_id = idSelected;
        $scope.ajxCallBioGuide();
        $scope.ajxCallBioCommittee();
        $scope.ajxCallBioBill();
        $scope.chkFavs(idSelected);
    };

    ///////FUNCTIONS TO PULL BILL RELATED details
    $scope.ajxCallActive = function(){$http({
        method : "GET",
        url : "/hw8.php?operation=billsActive"
    }).then(function mySuccess5(response) {
        gdata  = response.data;
        var i=0 ;
        $scope.abills=[];
        if(gdata['results'].length>0) {
            allaB = gdata["results"];
            for (i = 0; i < gdata['results'].length; i++) {
                var ob = new Object();
                ob.bid = gdata["results"][i]["bill_id"];
                ob.bType = gdata["results"][i]["bill_type"];
                ob.title = gdata["results"][i]["official_title"];
                ob.chamber = gdata["results"][i]["chamber"];
                if(ob.chamber =="senate"){
                    ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/s.svg";
                }
                else{
                    ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/h.png";
                }
                ob.ion = gdata["results"][i]["introduced_on"];
                ob.sponsor = gdata["results"][i]["sponsor"]["title"] + '.' + gdata["results"][i]["sponsor"]["last_name"] + ',' + gdata["results"][i]["sponsor"]["first_name"];
                var stringi = JSON.stringify(ob);
                $scope.abills.push(ob);
            }
            $scope.ajxCallBillNew();
        }

    }, function myError(response) {
        $scope.errorMessage = response.statusText;
    });};
    $scope.ajxCallBillNew = function(){$http({
        method : "GET",
        url : "/hw8.php?operation=billsNew"
    }).then(function mySuccess15(response) {
        gdata  = response.data;
        var i=0 ;
        $scope.nbills = [];
        if(gdata['results'].length>0) {
            allnB = gdata["results"];
            for (i = 0; i < gdata['results'].length; i++) {
                var ob = new Object();
                ob.bid = gdata["results"][i]["bill_id"];

                ob.bType = gdata["results"][i]["bill_type"];
                ob.title = gdata["results"][i]["official_title"];
                ob.chamber = gdata["results"][i]["chamber"];
                if(ob.chamber =="senate"){
                    ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/s.svg";
                }
                else{
                    ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/h.png";
                }
                ob.ion = gdata["results"][i]["introduced_on"];
                ob.sponsor = gdata["results"][i]["sponsor"]["title"] + '.' + gdata["results"][i]["sponsor"]["last_name"] + ',' + gdata["results"][i]["sponsor"]["first_name"];

                var stringi = JSON.stringify(ob);
                $scope.nbills.push(ob);
            }
        }

    }, function myError(response) {
        $scope.errorMessage = response.statusText;
    });};

    $scope.setaBDetails = function(bid){
        $scope.ibill =[];
        for(var i=0;i<allaB.length;i++){
            if(bid == allaB[i]['bill_id']){
                $scope.ibill.bid = bid;
                $scope.ibill.title = allaB[i]['official_title'];
                $scope.ibill.btype =allaB[i]['bill_type'];
                $scope.ibill.sponsor =allaB[i]["sponsor"]["title"] + '.' + allaB[i]["sponsor"]["last_name"] + ',' + allaB[i]["sponsor"]["first_name"];
                $scope.ibill.chamber = allaB[i]['chamber'];
                if (allaB[i]["history"]["active"]) {
                    $scope.ibill.status ="Active";
                 }
                 else{
                    $scope.ibill.status = "New";
                 }

                $scope.ibill.ion = allaB[i]['introduced_on'];
                $scope.ibill.coURL=allaB[i]['urls']['congress'];
                $scope.ibill.vstatus= allaB[i]['last_version']['version_name'];
                $scope.ibill.bURL =allaB[i]['last_version']['urls']['pdf'];
                $scope.ibill.pdfi = $scope.ibill.bURL//$sce.trustAsResourceUrl($scope.ibill.bURL);
                break;
            }

        }
        $scope.chkFavsBill($scope.ibill.bid);
    };
    $scope.setnBDetails = function(bid){
        $scope.ibill =[];
        for(var i=0;i<allnB.length;i++){
            if(bid == allnB[i]['bill_id']){
                $scope.ibill.bid = bid;
                $scope.ibill.title = allnB[i]['official_title'];
                $scope.ibill.btype =allnB[i]['bill_type'];
                $scope.ibill.sponsor =allnB[i]["sponsor"]["title"] + '.' + allnB[i]["sponsor"]["last_name"] + ',' + allnB[i]["sponsor"]["first_name"];
                $scope.ibill.chamber = allnB[i]['chamber'];
                if (allnB[i]["history"]["active"]) {
                    $scope.ibill.status ="Active";
                }
                else{
                    $scope.ibill.status = "New";
                }

                $scope.ibill.ion = allnB[i]['introduced_on'];
                $scope.ibill.coURL=allnB[i]['urls']['congress'];
                $scope.ibill.vstatus= allnB[i]['last_version']['version_name'];
                $scope.ibill.bURL =allnB[i]['last_version']['urls']['pdf'];
                $scope.ibill.pdfi = $sce.trustAsResourceUrl($scope.ibill.bURL);
                break;
            }

        }
        $scope.chkFavsBill($scope.ibill.bid);
    };
    $scope.setBDetails= function (bid,status){
        if (status==("Active")){
            $scope.setaBDetails(bid);
        }else{
            $scope.setnBDetails(bid);
        }
    };

    $scope.ajxCallComm = function(){$http({
        method : "GET",
        url : "/hw8.php?operation=comHouse"
    }).then(function mySuccess5(response) {
        gdata  = response.data;
        var i=0 ;
        $scope.scom=[];
        $scope.jcom=[];
        $scope.hcom=[];
        if(gdata["results"].length>0) {
            allCData = gdata["results"];
            for (i = 0; i < gdata['results'].length; i++) {
                var ob = new Object();
                ob.chamber = gdata["results"][i]['chamber'];
                if(ob.chamber !="house"){
                    ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/s.svg";
                }
                else{
                    ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/h.png";
                }
                ob.cid = gdata['results'][i]['committee_id'];
                ob.previousClass=$scope.chkFavsComm(ob.cid);
                ob.name = gdata['results'][i]['name'];
                if (gdata['results'][i]['chamber'] == "joint") {
                    var stringi = JSON.stringify(ob);
                    $scope.jcom.push(ob);
                    continue;
                }
                ob.pc = gdata['results'][i]['parent_committee_id'];
                if (gdata['results'][i]['chamber'] == "senate") {
                    stringi = JSON.stringify(ob);
                    $scope.scom.push(ob);
                    continue;
                }
                ob.contact = gdata['results'][i]['phone'];
                ob.office = gdata['results'][i]['office'];
                stringi = JSON.stringify(ob);
                $scope.hcom.push(ob);
            }
        }
    }, function myError(response) {
        $scope.errorMessage = response.statusText;
    });};


    $scope.chkFavs= function(bio){
        if(!$localStorage.favL) {
            $localStorage.favL = "undefined";
            $scope.starClass = "fa fa-star-o";
        }
        else {
            if($localStorage.favL != "undefined") {
                var obj = JSON.parse($localStorage.favL);
                var flag = false;
                if (obj.arr) {
                    for (var i = 0; i < obj.arr.length; i++) {
                        if (obj.arr[i] == bio) {
                            flag = true;
                            break;
                        }
                    }
                    if (flag) {
                        $scope.starClass = "fa fa-star";
                    }
                    else {
                        $scope.starClass = "fa fa-star-o";
                    }
                } else {
                    $scope.starClass = "fa fa-star-o";
                }
            }
            else{
                $scope.starClass = "fa fa-star-o";
            }
        }
    }
    $scope.setfavs = function(bio){
        if($localStorage.favL) {
            if ($localStorage.favL != "undefined" && $localStorage.favL != []) {
                var obj = JSON.parse($localStorage.favL);
                var ind;
                if (obj.arr) {
                    if (obj.arr.length > 0) {
                        var flag = false;
                        for (var i = 0; i < obj.arr.length; i++) {
                            if (obj.arr[i] == bio) {
                                flag = true;
                                ind = i;
                                break;
                            }
                        }
                        if (flag) {
                            $scope.starClass = "fa fa-star-o";
                            obj.arr.splice(ind, 1);
                            if (obj.arr.length == 0) {
                                delete $localStorage.favL;
                            } else {
                                $localStorage.favL = JSON.stringify(obj);
                            }
                        }
                        else {
                            $scope.starClass = "fa fa-star";
                            obj.arr.push(bio);
                            $localStorage.favL = JSON.stringify(obj);
                        }
                    }
                    else {
                        var obj = new Object;
                        $scope.starClass = "fa fa-star";
                        obj.arr = [];
                        obj.arr.push(bio);
                        $localStorage.favL = JSON.stringify(obj);
                    }
                } else {
                    var obj = new Object;
                    $scope.starClass = "fa fa-star";
                    obj.arr = [];
                    obj.arr.push(bio);
                    $localStorage.favL = JSON.stringify(obj);
                }
            }
            else {
                var obj = new Object;
                $scope.starClass = "fa fa-star";
                obj.arr = [];
                obj.arr.push(bio);
                $localStorage.favL = JSON.stringify(obj);
            }
        }else{
            var obj = new Object;
            $scope.starClass = "fa fa-star";
            obj.arr = [];
            obj.arr.push(bio);
            $localStorage.favL = JSON.stringify(obj);
        }
    };


    $scope.ajxCallFav = function(){
        if($localStorage.favL && $localStorage.favL!="undefined"){
            var obj = JSON.parse($localStorage.favL);
            var arr = obj.arr;
            $scope.useris=[];
            if(arr){
                var len=arr.length;
                for(var i= 0;i<len;i++){
                    var bio = arr[i];
                    var ob = new Object();
                    for(var j =0;j<allLegData.length;j++){
                        if(allLegData[j]["bioguide_id"]==bio){
                            ob.bioguide_id=bio;
                            ob.photo= "https://theunitedstates.io/images/congress/450x550/" + bio + ".jpg"
                            if (allLegData[j]['party'] == 'R') {
                                ob.party = "http://cs-server.usc.edu:45678/hw/hw8/images/r.png";
                            }
                            else if (allLegData[j]['party'] == 'D'){
                                ob.party = "http://cs-server.usc.edu:45678/hw/hw8/images/d.png";
                            }
                            else{
                                ob.party="http://independentamericanparty.org/wp-content/themes/v/images/logo-american-heritage-academy.png";
                            }
                            ob.name=allLegData[j]['last_name']+', '+allLegData[j]['first_name'];
                            ob.chamber = allLegData[j]['chamber'];
                            if(ob.chamber !="house"){
                                ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/s.svg";
                            }
                            else{
                                ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/h.png";
                            }
                            ob.state = findFull(allLegData[j]['state']);
                            ob.email = allLegData[j]['oc_email'];
                            $scope.useris.push(ob);
                        }
                    }
                }

            }
        }

    };

    $scope.chkFavsBill= function(bio){
        if(!$localStorage.favB) {
            $localStorage.favB = "undefined";
            $scope.starClassBill = "fa fa-star-o";
        }
        else {
           if($localStorage.favB != "undefined") {
               var obj = JSON.parse($localStorage.favB);
               var flag = false;
               if (obj.arr) {
                   for (var i = 0; i < obj.arr.length; i++) {
                       if (obj.arr[i] == bio) {
                           flag = true;
                           break;
                       }
                   }
                   if (flag) {
                       $scope.starClassBill = "fa fa-star";
                   }
                   else {
                       $scope.starClassBill = "fa fa-star-o";
                   }
               } else {
                   $scope.starClassBill = "fa fa-star-o";
               }
           }
           else{
               $scope.starClassBill = "fa fa-star-o";
           }
        }
    };

    $scope.setfavsBill = function(bio){
        if($localStorage.favB) {
            if ($localStorage.favB != "undefined" && $localStorage.favB != []) {
                var obj = JSON.parse($localStorage.favB);
                var ind;
                if (obj.arr) {
                    if (obj.arr.length > 0) {
                        var flag = false;
                        for (var i = 0; i < obj.arr.length; i++) {
                            if (obj.arr[i] == bio) {
                                flag = true;
                                ind = i;
                                break;
                            }
                        }
                        if (flag) {
                            $scope.starClassBill = "fa fa-star-o";
                            obj.arr.splice(ind, 1);
                            if (obj.arr.length == 0) {
                                delete $localStorage.favB;
                            } else {
                                $localStorage.favB = JSON.stringify(obj);
                            }
                        }
                        else {
                            $scope.starClassBill = "fa fa-star";
                            obj.arr.push(bio);
                            $localStorage.favB = JSON.stringify(obj);
                        }
                    }
                    else {
                        var obj = new Object;
                        $scope.starClassBill = "fa fa-star";
                        obj.arr = [];
                        obj.arr.push(bio);
                        $localStorage.favB = JSON.stringify(obj);
                    }
                } else {
                    var obj = new Object;
                    $scope.starClassBill = "fa fa-star";
                    obj.arr = [];
                    obj.arr.push(bio);
                    $localStorage.favB = JSON.stringify(obj);
                }
            }
            else {
                var obj = new Object;
                $scope.starClassBill = "fa fa-star";
                obj.arr = [];
                obj.arr.push(bio);
                $localStorage.favB = JSON.stringify(obj);
            }
        }else{
            var obj = new Object;
            $scope.starClassBill = "fa fa-star";
            obj.arr = [];
            obj.arr.push(bio);
            $localStorage.favB = JSON.stringify(obj);
        }
    };

    $scope.ajxCallFavBill = function(){
        if($localStorage.favB && $localStorage.favB!="undefined"){
            var obj = JSON.parse($localStorage.favB);
            var arr = obj.arr;
            $scope.userib=[];
            var allBillData = allaB.concat(allnB);
            if(arr){
                var len=arr.length;
                for(var i= 0;i<len;i++){
                    var bio = arr[i];
                    var ob = new Object();
                    for(var j =0;j<allBillData.length;j++){
                        if(allBillData[j]["bill_id"]==bio){
                            ob.bid = allBillData[j]["bill_id"];
                            if (allBillData[j]["history"]["active"]) {
                                ob.status ="Active";
                            }
                            else{
                                ob.status = "New";
                            }
                            ob.bType = allBillData[j]["bill_type"];
                            ob.title = allBillData[j]["official_title"];
                            ob.chamber = allBillData[j]["chamber"];
                            if(ob.chamber !="house"){
                                ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/s.svg";
                            }
                            else{
                                ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/h.png";
                            }
                            ob.ion = allBillData[j]["introduced_on"];
                            ob.sponsor = allBillData[j]["sponsor"]["title"] + '.' +allBillData[j]["sponsor"]["last_name"] + ', ' +allBillData[j]["sponsor"]["first_name"];
                            $scope.userib.push(ob);
                        }
                    }
                }

            }
        }

    };

    //commm calls
    $scope.chkFavsComm= function(bio){
        $scope.returnCID = bio;
        if(!$localStorage.favC) {
            $localStorage.favC = "undefined";
            $scope.starClassComm = "fa fa-star-o";
            $scope.previousClass = "fa fa-star-o";
            return $scope.previousClass;
        }
        else {
            if($localStorage.favC != "undefined") {
                var obj = JSON.parse($localStorage.favC);
                var flag = false;
                if (obj.arr) {
                    for (var i = 0; i < obj.arr.length; i++) {
                        if (obj.arr[i] == bio) {
                            flag = true;
                            break;
                        }
                    }
                    if (flag) {
                        $scope.starClassComm = "fa fa-star";
                        $scope.previousClass = "fa fa-star";
                    }
                    else {
                        $scope.starClassComm = "fa fa-star-o";
                        $scope.previousClass = "fa fa-star-o";
                    }
                   } else {
                    $scope.starClassComm = "fa fa-star-o";
                    $scope.previousClass = "fa fa-star-o";
                }
            }
            else{
                $scope.starClassComm = "fa fa-star-o";
                $scope.previousClass = "fa fa-star-o";
            }
        }
        return $scope.previousClass;
    };

    $scope.setfavsComm = function(bio){
        $scope.returnCID = bio;
        if($localStorage.favC) {
            if ($localStorage.favC != "undefined" && $localStorage.favC != []) {
                var obj = JSON.parse($localStorage.favC);
                var ind;
                if (obj.arr) {
                    if (obj.arr.length > 0) {
                        var flag = false;
                        for (var i = 0; i < obj.arr.length; i++) {
                            if (obj.arr[i] == bio) {
                                flag = true;
                                ind = i;
                                break;
                            }
                        }
                        if (flag) {
                            $scope.starClassComm = "fa fa-star-o";
                            obj.arr.splice(ind, 1);
                            if (obj.arr.length == 0) {
                                delete $localStorage.favC;
                            } else {
                                $localStorage.favC = JSON.stringify(obj);
                            }
                        }
                        else {
                            $scope.starClassComm = "fa fa-star";
                            obj.arr.push(bio);
                            $localStorage.favC = JSON.stringify(obj);
                        }
                    }
                    else {
                        var obj = new Object;
                        $scope.starClassComm = "fa fa-star";

                        obj.arr = [];
                        obj.arr.push(bio);
                        $localStorage.favC = JSON.stringify(obj);
                    }
                } else {
                    var obj = new Object;
                    $scope.starClassComm = "fa fa-star";
                    obj.arr = [];
                    obj.arr.push(bio);
                    $localStorage.favC = JSON.stringify(obj);
                }
            }
            else {
                var obj = new Object;
                $scope.starClassComm = "fa fa-star";
                obj.arr = [];
                obj.arr.push(bio);
                $localStorage.favC = JSON.stringify(obj);
            }
        }
        else{
            var obj = new Object;
            $scope.starClassComm = "fa fa-star";
            obj.arr = [];
            obj.arr.push(bio);
            $localStorage.favC = JSON.stringify(obj);
        }
        var flag = false;
        if (!flag){
            for (var i=0;i<$scope.hcom.length;i++){
                if($scope.hcom[i].cid==bio ){
                    $scope.hcom[i].previousClass = $scope.starClassComm;
                    flag = true;
                    break;
                }

            }
        }
        if (!flag){
            for (var i=0;i<$scope.scom.length;i++){
                if($scope.scom[i].cid==bio ){
                    $scope.scom[i].previousClass = $scope.starClassComm;
                    flag = true;
                    break;
                }

            }
        }
        if (!flag) {
            for (var i = 0; i < $scope.jcom.length; i++) {
                if ($scope.jcom[i].cid == bio) {
                    $scope.jcom[i].previousClass = $scope.starClassComm;
                    break;
                }

            }
        }

    };

    $scope.ajxCallFavComm = function(){
        if($localStorage.favC && $localStorage.favC!="undefined"){
            var obj = JSON.parse($localStorage.favC);
            var arr = obj.arr;
            $scope.useric=[];
            if(arr){
                var len=arr.length;
                for(var i= 0;i<len;i++){
                    var bio = arr[i];
                    for(var j =0;j<allCData.length;j++){
                        if(allCData[j]["committee_id"]==bio){
                            var ob = new Object();
                            ob.chamber = allCData[j]['chamber'];
                            if(ob.chamber !="house"){
                                ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/s.svg";
                            }
                            else{
                                ob.chamsrc="http://cs-server.usc.edu:45678/hw/hw8/images/h.png";
                            }
                            ob.cid = allCData[j]['committee_id'];
                            ob.name = allCData[j]['name'];
                            if(allCData[j]['parent_committee_id']) {
                                ob.pc = allCData[j]['parent_committee_id'];
                            }else{
                                ob.pc="";
                            }
                            ob.sc =  JSON.stringify(allCData[j]['subcommittee']);
                            ob.sub ="true";
                            var stringi = JSON.stringify(ob);
                            $scope.useric.push(ob);
                        }
                    }
                }

            }
        }

    };

    $scope.triggerCom =function(){
        $scope.ajxCallFav();
        $scope.ajxCallFavBill();
        $scope.ajxCallFavComm();
    };

    $scope.deleteFav = function(bio,type){
        if(type=="bill"){
            var did = "pb-"+bio;
            var result = document.getElementById(did);
            var wrappedResult = angular.element(result);
            wrappedResult.remove();
            var obj = JSON.parse($localStorage.favB);
            var array = obj.arr;
            for(i=0;i<array.length;i++){
                if (bio==array[i]){
                    var ind =i;
                    break;
                }
            }
            obj.arr.splice(ind, 1);
            if (obj.arr.length == 0) {
                delete $localStorage.favB;
            } else {
                $localStorage.favB = JSON.stringify(obj);
            }

        }
        else if(type=="leg"){
            var did = "pl-"+bio;
            var result = document.getElementById(did);
            var wrappedResult = angular.element(result);
            wrappedResult.remove();
            var obj = JSON.parse($localStorage.favL);
            var array = obj.arr;
            for(i=0;i<array.length;i++){
                if (bio==array[i]){
                    var ind =i;
                    break;
                }
            }
            obj.arr.splice(ind, 1);
            if (obj.arr.length == 0) {
                delete $localStorage.favL;
            } else {
                $localStorage.favL = JSON.stringify(obj);
            }

        }else if(type=="com"){
            var did = "pcm-"+bio;
            var result = document.getElementById(did);
            var wrappedResult = angular.element(result);
            wrappedResult.remove();
            var obj = JSON.parse($localStorage.favC);
            var array = obj.arr;
            for(i=0;i<array.length;i++){
                if (bio==array[i]){
                    var ind =i;
                    break;
                }
            }
            obj.arr.splice(ind, 1);
            if (obj.arr.length == 0) {
                delete $localStorage.favC;
            } else {
                $localStorage.favC = JSON.stringify(obj);
            }

        }
    };




}]);




//https://congress.api.sunlightfoundation.com/legislators?apikey=c113fa1d19e84e5e82663f29559830db&per_p
//  age=all



function parseLegJsonAndHTML(data) {


    myApp.controller('MyController', ['$scope', function($scope) {
        if(gdata)
            $scope.users =  data["results"];

    }]);

    var results = data["results"];
    var houseList=new Array(),senateList=new Array();
    results.forEach(function (element) {

        if(element["chamber"]=="house"){
            houseList.push(element);
        }
        else{
            senateList.push(element);
        }
    });
    results.forEach(function (element) {
        if(element["chamber"]=="house"){
            houseList.push(element);
        }
        else{
            senateList.push(element);
        }
    });


}
/*
function ajax_call(){


    $.ajax({
        url:"https://transparent-gov-add.appspot.com/hw8.php?operation=legislators",

        dataType: 'json',
        type:'GET',
        //success: function (response,status,xhr ) {
        //    $("document").att

        success:function(data){
            gdata = data;

            parseLegJsonAndHTML(data);

        },
        error: function(xhr,status,error){
            alert(error);
        }

    });

}
$("#L1").on('click',ajax_call());
/*
$("#stateTab").each( function() {
    alert("Your book is overdue.");
});
*/
/**/
/****************************/
// Code goes here








