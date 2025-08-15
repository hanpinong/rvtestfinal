var fs = require('fs');
var path = require('path');
var config = require('../config.json')

var currentPath = config['status_file_path']
if (config['local_setup']){
    var currentPath = process.cwd();
}

console.log(currentPath)
var run_status;


//main project old 
var RVMTLCS0 = "RVMTLCS0"
var RVMTLCE0 = "RVMTLCE0"
var RVMTLSOCNC0 = "RVMTLSOCNC0"
var RVMTLSOCNK0 = "RVMTLSOCNK0"
var RVMTLSOCSNB0 = "RVMTLSOCSNB0"

//shiou fang
var RVARLCPXA0 = "RVARLCPXA0"
var RVARLCSP0  = "RVARLCSP0"
var RVARLCB0  = "RVARLCB0"
var RVARLCJ0  = "RVARLCJ0"
var RVARLCR0  = "RVARLCR0"
var RVNVLCA0  = "RVNVLCA0"

//David
var RVNVLCD0  = "RVNVLCD0"

//yq 
var RVPTLA0  = "RVPTLA0"
var RVPTLA0EVR  = "RVPTLA0EVR"
var RVPTLB0EVR  = "RVPTLB0EVR"
var RVWCLA0  = "RVWCLA0"
var RVWCLA0EVR  = "RVWCLA0EVR"

//gugen project
var RVARLCPA0  = "RVARLCPA0"
var RVARLCPB0  = "RVARLCPB0"
var RVARLCPB0_preswap  = "RVARLCPB0_preswap"
var RVARLCPC0  = "RVARLCPC0"


//xander project 
var RVNVLA0  = "RVNVLA0"

//Brian project 
var RVNVLB0  = "RVNVLB0"

//hanpin project 
var RVNVLCL0  = "RVNVLCL0"
var RVNVLCP0  = "RVNVLCP0"
var RVNVLCT0  = "RVNVLCT0"
var RVNVLCR0  = "RVNVLCR0"
///////////////////////////////
//////////////////////////////

//main project old 
var rvmtlcs0indicators,rvmtlce0indicators,rvmtlsocnc0indicators,rvmtlsocnk0indicators,rvmtlsocsnb0indicators;
//shiou fang
var rvarlca0indicators,rvarlcsp0indicators,rvarlcb0indicators,rvarlcj0indicators,rvarlcr0indicators,rvnvlca0indicators;
//DAVID
var rvnvlcd0indicators;
//yq 
var rvptla0indicators,rvptla0evrindicators,rvptlb0evrindicators,rvwcla0indicators,rvwcla0evrindicators;
//gugen project
var rvarlcpa0indicators,rvarlcpb0indicators,rvarlcpb0_preswapindicators,rvarlcpc0indicators;
//xander project 
var rvnvla0indicators;
//Brian project 
var rvnvlb0indicators;
//hanpin project
var rvnvlcl0indicators,rvnvlcp0indicators,rvnvlct0indicators,rvnvlcr0indicators;

read_files = function(){
    console.log("Reading files11...runStatus.js");
    console.log("Reading files22...");
    console.log("Reading files33...");
    console.log("Reading files44...");
    console.log("Reading files55...");
    console.log("Reading files66...");	
	console.log("Reading files777...");	


	try {
    console.log("Reading files xander project...");	

    } catch (error) {
    // Handle errors that occur during file reading or JSON parsing
    console.error('Error reading or parsing JSON file:');
	} finally {
       console.log("Done read Xander project...");	
    }
   
   
   
    console.log("Reading files hanpin project...");	
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvnvlcl0indicator.json'));
    rvnvlcl0indicators = JSON.parse(rawdata);
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvnvlcp0indicator.json'));
    rvnvlcp0indicators = JSON.parse(rawdata);
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvnvlct0indicator.json'));
    rvnvlct0indicators = JSON.parse(rawdata);
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvnvlcr0indicator.json'));
    rvnvlcr0indicators = JSON.parse(rawdata);

    console.log("Reading files gugen project...");	
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvarlcpa0indicator.json'));
    rvarlcpa0indicators = JSON.parse(rawdata);
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvarlcpb0indicator.json'));
    rvarlcpb0indicators = JSON.parse(rawdata);
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvarlcpb0_preswapindicator.json'));
    rvarlcpb0_preswapindicators = JSON.parse(rawdata);
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvarlcpc0indicator.json'));
    rvarlcpc0indicators = JSON.parse(rawdata);
	
	
    console.log("Reading files yq project...");	
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvptla0indicator.json'));
    rvptla0indicators = JSON.parse(rawdata);
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvptla0evrindicator.json'));
    rvptla0evrindicators = JSON.parse(rawdata);
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvptlb0evrindicator.json'));
    rvptlb0evrindicators = JSON.parse(rawdata);
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvwcla0indicator.json'));
    rvwcla0indicators = JSON.parse(rawdata);
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvwcla0evrindicator.json'));
    rvwcla0evrindicators = JSON.parse(rawdata);


    console.log("Reading files old main project...");	
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvmtlcs0indicator.json'));
    rvmtlcs0indicators = JSON.parse(rawdata);
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvmtlce0indicator.json'));
    rvmtlce0indicators = JSON.parse(rawdata);
	var rawdata = fs.readFileSync(path.join(currentPath, 'rvmtlsocnc0indicator.json'));
    rvmtlsocnc0indicators = JSON.parse(rawdata);
	var rawdata = fs.readFileSync(path.join(currentPath, 'rvmtlsocnk0indicator.json'));
    rvmtlsocnk0indicators = JSON.parse(rawdata);
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvmtlsocsnb0indicator.json'));
    rvmtlsocsnb0indicators = JSON.parse(rawdata);
	
	
    console.log("Reading files shiou fan project...");	
	try {
    console.log("Reading files773...");	
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvarlca0indicator.json'));
    rvarlca0indicators = JSON.parse(rawdata);

    console.log("Reading files774...");	
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvarlcsp0indicator.json'));
    rvarlcsp0indicators = JSON.parse(rawdata);

    var rawdata = fs.readFileSync(path.join(currentPath, 'rvarlcb0indicator.json'));
    rvarlcb0indicators = JSON.parse(rawdata);

    console.log("Reading files775...");	
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvarlcj0indicator.json'));
    rvarlcj0indicators = JSON.parse(rawdata);
	
    console.log("Reading files776...");	
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvarlcr0indicator.json'));
    rvarlcr0indicators = JSON.parse(rawdata);
	
    console.log("Reading files777...");	
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvnvlca0indicator.json'));
    rvnvlca0indicators = JSON.parse(rawdata);
	
	
	//DAVID
    console.log("Reading files777.david..");	
    var rawdata = fs.readFileSync(path.join(currentPath, 'rvnvlcd0indicator.json'));
    rvnvlcd0indicators = JSON.parse(rawdata);
	
	
	//xander
	var rawdata = fs.readFileSync(path.join(currentPath, 'rvnvla0indicator.json'));
    rvnvla0indicators = JSON.parse(rawdata);
	
	
	//BRIAN
	//var rawdata = fs.readFileSync(path.join(currentPath, 'rvnvlb0indicator.json'));
    //rvnvlb0indicators = JSON.parse(rawdata);
	
	
    } catch (error) {
    // Handle errors that occur during file reading or JSON parsing
    console.error('Error reading or parsing JSON file:');
	} finally {
    console.log("Done reading sf project...");
   }
	console.log("Reading files88donedonedone...");	
};

console.log("Reading files88...");	
exports.read_rv_queue = function(){
    console.log("Reading Queue...");
    var rawdata = fs.readFileSync(path.join(currentPath, 'queuejson', 'rvqueue.json'));
    return JSON.parse(rawdata)
}

exports.write_rv_queue = function(queue){
    fs.writeFileSync(path.join(currentPath, 'queuejson', 'rvqueue.json'),JSON.stringify(queue, null, 4));
}

exports.access_rv_status = function () {
    //read js file
    read_files();
    var flattened_status_b0 = {};
    var flattened_status_sp0 = {};
    var flattened_status_sr0 = {};

    var status_b0 = run_status[TGLB0];
    var status_sp0 = run_status[TGLSP0];
    var status_sr0 = run_status[TGLSR0];

    var everypartition;
    var everyfolder;

    //parsing status - flattening it for b0
    for (everypartition in status_b0){
        for (everyfolder in status_b0[everypartition]){
            flattened_status_b0[everyfolder] = status_b0[everypartition][everyfolder];
        }
    }

    for (everypartition in status_sp0){
        for (everyfolder in status_sp0[everypartition]){
            flattened_status_sp0[everyfolder] = status_sp0[everypartition][everyfolder];
        }
    }
    for (everypartition in status_sr0){
        for (everyfolder in status_sr0[everypartition]){
            flattened_status_sr0[everyfolder] = status_sr0[everypartition][everyfolder];
        }
    }

    var lastupdated = run_status['lastupdated'];
    return [flattened_status_b0, flattened_status_sp0, flattened_status_sr0, lastupdated];
};

console.log("Reading files99...");	

//main old project 
exports.access_rvmtlcs0_indicators = function () {
    read_files();
    //read js file
    return rvmtlcs0indicators;
};
exports.access_rvmtlce0_indicators = function () {
    read_files();
    //read js file
    return rvmtlce0indicators;
};
exports.access_rvmtlsocnc0_indicators = function () {
    read_files();
    //read js file
    return rvmtlsocnc0indicators;
};
exports.access_rvmtlsocnk0_indicators = function () {
    read_files();
    //read js file
    return rvmtlsocnk0indicators;
};
exports.access_rvmtlsocsnb0_indicators = function () {
    read_files();
    //read js file
    return rvmtlsocsnb0indicators;
};



//shiou fang project
exports.access_rvarlca0_indicators = function () {
    read_files();
    //read js file
    return rvarlca0indicators;
};
exports.access_rvarlcsp0_indicators = function () {
    read_files();
    //read js file
    return rvarlcsp0indicators;
};
exports.access_rvarlcb0_indicators = function () {
    read_files();
    //read js file
    return rvarlcb0indicators;
};
exports.access_rvarlcj0_indicators = function () {
    read_files();
    //read js file
    return rvarlcj0indicators;
};
exports.access_rvarlcr0_indicators = function () {
    read_files();
    //read js file
    return rvarlcr0indicators;
};
exports.access_rvnvlca0_indicators = function () {
    read_files();
    //read js file
    return rvnvlca0indicators;
};
//David

exports.access_rvnvlcd0_indicators = function () {
    read_files();
    //read js file
    return rvnvlcd0indicators;
};


//yq project
exports.access_rvptla0_indicators = function () {
    read_files();
    //read js file
    return rvptla0indicators;
};
exports.access_rvptla0evr_indicators = function () {
    read_files();
    //read js file
    return rvptla0evrindicators;
};
exports.access_rvptlb0evr_indicators = function () {
    read_files();
    //read js file
    return rvptlb0evrindicators;
};
exports.access_rvwcla0_indicators = function () {
    read_files();
    //read js file
    return rvwcla0indicators;
};
exports.access_rvwcla0evr_indicators = function () {
    read_files();
    //read js file
    return rvwcla0evrindicators;
};



// gugen project
exports.access_rvarlcpa0_indicators = function () {
    read_files();
    //read js file
    return rvarlcpa0indicators;
};
exports.access_rvarlcpb0_indicators = function () {
    read_files();
    //read js file
    return rvarlcpb0indicators;
};
exports.access_rvarlcpb0_preswap_indicators = function () {
    read_files();
    //read js file
    return rvarlcpb0_preswapindicators;
};
exports.access_rvarlcpc0_indicators = function () {
    read_files();
    //read js file
    return rvarlcpc0indicators;
};





// xander project
exports.access_rvnvla0_indicators = function () {
    read_files();
    //read js file
    return rvnvla0indicators;
};



// BRIAN project
exports.access_rvnvlb0_indicators = function () {
    read_files();
    //read js file
    return rvnvlb0indicators;
};


// hanpin project

exports.access_rvnvlcl0_indicators = function () {
    read_files();
    //read js file
    return rvnvlcl0indicators;
};
exports.access_rvnvlcp0_indicators = function () {
    read_files();
    //read js file
    return rvnvlcp0indicators;
};
exports.access_rvnvlct0_indicators = function () {
    read_files();
    //read js file
    return rvnvlct0indicators;
};
exports.access_rvnvlcr0_indicators = function () {
    read_files();
    //read js file
    return rvnvlcr0indicators;
};
