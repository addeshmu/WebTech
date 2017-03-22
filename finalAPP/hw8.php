<?php
if(isset($_GET["operation"]) and $_GET["operation"]=="legislators"){
    //$json_url="https://congress.api.sunlightfoundation.com/legislators?apikey=c113fa1d19e84e5e82663f29559830db&per_page=all&order=state__asc,last_name__asc";
    $json_url="http://104.198.0.197:8080/legislators?apikey=c113fa1d19e84e5e82663f29559830db&per_page=all&order=state__asc,last_name__asc";

    $json = file_get_contents($json_url);
    //$json = file_get_contents("leg.json");
    echo $json;
}

if(isset($_GET["operation"]) and $_GET["operation"]=="legSubOpBioGuideIndividual"){
//    $json_url='https://congress.api.sunlightfoundation.com/legislators?bioguide_id='.$_GET['bioguide_id'].'&apikey=c113fa1d19e84e5e82663f29559830db';
    $json_url='http://104.198.0.197:8080/legislators?bioguide_id='.$_GET['bioguide_id'].'&apikey=c113fa1d19e84e5e82663f29559830db';
    $json = file_get_contents($json_url);
    //$json = file_get_contents("leg.json");
    echo $json;
}

if(isset($_GET["operation"]) and $_GET["operation"]=="legSubOpBioGuideCommittee"){
//    $json_url="https://congress.api.sunlightfoundation.com/committees?member_ids=".$_GET['bioguide_id']."&apikey=c113fa1d19e84e5e82663f29559830db&per_page=5";
    $json_url="http://104.198.0.197:8080/committees?member_ids=".$_GET['bioguide_id']."&apikey=c113fa1d19e84e5e82663f29559830db&per_page=5";

    $json = file_get_contents($json_url);
    //$json = file_get_contents("comm.json");
    echo $json;
}

if(isset($_GET["operation"]) and $_GET["operation"]=="legSubOpBioGuideBill"){
//    $json_url="https://congress.api.sunlightfoundation.com/bills/search?sponsor_id=".$_GET['bioguide_id']."&apikey=c113fa1d19e84e5e82663f29559830db&per_page=5";
    $json_url="http://104.198.0.197:8080/bills?sponsor_id__in=".$_GET['bioguide_id']."&apikey=c113fa1d19e84e5e82663f29559830db&per_page=5";
    $json = file_get_contents($json_url);
    //$json = file_get_contents("bills.json");
    echo $json;
}

if(isset($_GET["operation"]) and $_GET["operation"]=="billsActive"){
//    $json_url="https://congress.api.sunlightfoundation.com/bills?apikey=c113fa1d19e84e5e82663f29559830db&history.active=true&order=last_action_at&per_page=50";
    $json_url="http://104.198.0.197:8080/bills?per_page=50&history.active=true&order=introduced_on__desc&last_version.urls.pdf__exists=true";

    $json = file_get_contents($json_url);
    //$json = file_get_contents("bills.json");
    echo $json;
}
if(isset($_GET["operation"]) and $_GET["operation"]=="billsNew"){
//    $json_url="https://congress.api.sunlightfoundation.com/bills?apikey=c113fa1d19e84e5e82663f29559830db&history.active=false&order=last_action_at&per_page=50";
    $json_url="http://104.198.0.197:8080/bills?per_page=50&history.active=false&order=introduced_on__desc&last_version.urls.pdf__exists=true";
    $json = file_get_contents($json_url);
    //$json = file_get_contents("bills.json");
    echo $json;
}

if(isset($_GET["operation"]) and $_GET["operation"]=="comHouse"){
//    $json_url="https://congress.api.sunlightfoundation.com/committees?apikey=c113fa1d19e84e5e82663f29559830db&per_page=all";
    $json_url="http://104.198.0.197:8080/committees?apikey=c113fa1d19e84e5e82663f29559830db&per_page=all";
    $json = file_get_contents($json_url);
    //$json = file_get_contents("comm.json");
    echo $json;
}


if(isset($_GET["operation"]) and $_GET["operation"]=="legislatorsSenate"){
    //$json_url="https://congress.api.sunlightfoundation.com/legislators?apikey=c113fa1d19e84e5e82663f29559830db&per_page=all&order=state__asc,last_name__asc";
    $json_url="http://104.198.0.197:8080/legislators?apikey=c113fa1d19e84e5e82663f29559830db&per_page=all&chamber=senate&order=last_name__asc";

    $json = file_get_contents($json_url);
    //$json = file_get_contents("leg.json");
    echo $json;
}
if(isset($_GET["operation"]) and $_GET["operation"]=="legislatorsHouse"){
    //$json_url="https://congress.api.sunlightfoundation.com/legislators?apikey=c113fa1d19e84e5e82663f29559830db&per_page=all&order=state__asc,last_name__asc";
    $json_url="http://104.198.0.197:8080/legislators?apikey=c113fa1d19e84e5e82663f29559830db&per_page=all&chamber=house&order=last_name__asc";

    $json = file_get_contents($json_url);
    //$json = file_get_contents("leg.json");
    echo $json;
}
if(isset($_GET["operation"]) and $_GET["operation"]=="billsActiveALL"){
//    $json_url="https://congress.api.sunlightfoundation.com/bills?apikey=c113fa1d19e84e5e82663f29559830db&history.active=true&order=last_action_at&per_page=50";
    $json_url="http://104.198.0.197:8080/bills?apikey=c113fa1d19e84e5e82663f29559830db&history.active=true&&per_page=all";

    $json = file_get_contents($json_url);
    //$json = file_get_contents("bills.json");
    echo $json;
}
if(isset($_GET["operation"]) and $_GET["operation"]=="billsNewALL"){
//    $json_url="https://congress.api.sunlightfoundation.com/bills?apikey=c113fa1d19e84e5e82663f29559830db&history.active=true&order=last_action_at&per_page=50";
    $json_url="http://104.198.0.197:8080/bills?apikey=c113fa1d19e84e5e82663f29559830db&history.active=false&per_page=all";

    $json = file_get_contents($json_url);
    //$json = file_get_contents("bills.json");
    echo $json;
}