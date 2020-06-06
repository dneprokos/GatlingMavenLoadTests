var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "45",
        "ok": "0",
        "ko": "45"
    },
    "minResponseTime": {
        "total": "4019",
        "ok": "-",
        "ko": "4019"
    },
    "maxResponseTime": {
        "total": "4102",
        "ok": "-",
        "ko": "4102"
    },
    "meanResponseTime": {
        "total": "4056",
        "ok": "-",
        "ko": "4056"
    },
    "standardDeviation": {
        "total": "18",
        "ok": "-",
        "ko": "18"
    },
    "percentiles1": {
        "total": "4054",
        "ok": "-",
        "ko": "4054"
    },
    "percentiles2": {
        "total": "4067",
        "ok": "-",
        "ko": "4067"
    },
    "percentiles3": {
        "total": "4083",
        "ok": "-",
        "ko": "4083"
    },
    "percentiles4": {
        "total": "4095",
        "ok": "-",
        "ko": "4095"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 45,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "-",
        "ko": "1.667"
    }
},
contents: {
"req_get-all-video-g-1e227": {
        type: "REQUEST",
        name: "Get All Video Games",
path: "Get All Video Games",
pathFormatted: "req_get-all-video-g-1e227",
stats: {
    "name": "Get All Video Games",
    "numberOfRequests": {
        "total": "30",
        "ok": "0",
        "ko": "30"
    },
    "minResponseTime": {
        "total": "4019",
        "ok": "-",
        "ko": "4019"
    },
    "maxResponseTime": {
        "total": "4085",
        "ok": "-",
        "ko": "4085"
    },
    "meanResponseTime": {
        "total": "4049",
        "ok": "-",
        "ko": "4049"
    },
    "standardDeviation": {
        "total": "14",
        "ok": "-",
        "ko": "14"
    },
    "percentiles1": {
        "total": "4052",
        "ok": "-",
        "ko": "4052"
    },
    "percentiles2": {
        "total": "4059",
        "ok": "-",
        "ko": "4059"
    },
    "percentiles3": {
        "total": "4068",
        "ok": "-",
        "ko": "4068"
    },
    "percentiles4": {
        "total": "4081",
        "ok": "-",
        "ko": "4081"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 30,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.111",
        "ok": "-",
        "ko": "1.111"
    }
}
    },"req_get-specific-vi-653d7": {
        type: "REQUEST",
        name: "Get Specific Video Game",
path: "Get Specific Video Game",
pathFormatted: "req_get-specific-vi-653d7",
stats: {
    "name": "Get Specific Video Game",
    "numberOfRequests": {
        "total": "15",
        "ok": "0",
        "ko": "15"
    },
    "minResponseTime": {
        "total": "4037",
        "ok": "-",
        "ko": "4037"
    },
    "maxResponseTime": {
        "total": "4102",
        "ok": "-",
        "ko": "4102"
    },
    "meanResponseTime": {
        "total": "4071",
        "ok": "-",
        "ko": "4071"
    },
    "standardDeviation": {
        "total": "15",
        "ok": "-",
        "ko": "15"
    },
    "percentiles1": {
        "total": "4070",
        "ok": "-",
        "ko": "4070"
    },
    "percentiles2": {
        "total": "4078",
        "ok": "-",
        "ko": "4078"
    },
    "percentiles3": {
        "total": "4089",
        "ok": "-",
        "ko": "4089"
    },
    "percentiles4": {
        "total": "4099",
        "ok": "-",
        "ko": "4099"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 15,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.556",
        "ok": "-",
        "ko": "0.556"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
