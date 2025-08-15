var fs = require('fs');
var path = require('path');
var config = require('../config.json')

var currentPath = config['status_file_path']
if (config['local_setup']){
    var currentPath = process.cwd();
}

var extension_finder = {
    //purely ptla extension
	"pgem_peak": ".pgem_peak",
    "pgem_maxem": ".pgem_maxem",
    "em_lte_log_avg": ".em_lte_log_avg",
    "em_lte_log_sh": ".em_lte_log_sh",
    "sig_em_lte_log_avg": ".sig_em_lte_log_avg",
    "sig_em_lte_log_peak": ".sig_em_lte_log_peak",
    "sig_em_lte_log_rms": ".sig_em_lte_log_rms",
    "sig_em_lte_log_sh": ".sig_em_lte_log_sh",
    "hotnets": ".hotnets",
	"fish" : ".FISH.violations",
    "LIB": ".LIB",
	
	"sta" : ".rhsc.inst_no_tw",
	"spef_check" : ".rhsc.spef_reports",
	
	
	"lib_check" : ".rhsc.dv_lib_check",
	"lef_check" : ".rhsc.dv_lef_check",

    "dirty.signal": ".dirty.signal",
    "drop.signal": ".drop.signal",
	"timing_slew" : ".rhsc.inst_no_slew",
	"em_no_tw" : ".em_inst_no_tw.rpt",
	
    //purely ptla extension
	
    "pgopens": ".opens",
    "sfactor": ".sfactor.violations",
    "sh":".selfheat",
    "gdvd" : ".gdvd.violations", // todo here in backend
    "udvd": ".udvd.violations",
    "glbdrvmissingv5uclkqclk": ".check_hip_pg_glbdrv_pins_missing_v5.parsed_rpt",
    "checkhipnopg":".check_hip_pg_no_pg.parsed_rpt",
    "checkhippgmissingvias":".check_hip_pg_pins_missing_50%_vias.parsed_rpt",
    "checksecondarypgcells":".check_secondary_pg_cells.parsed_rpt",
    "gdsimissingv6qclkuclk":".gdsi_missing_v6_qclk_uclk.parsed_rpt",
    "aonmissingladder":".aon_missing_ladder.parsed_rpt",
    "aonmissingv4":".aon_missing_v4.parsed_rpt",
            "LibInteg": ".LibInteg",
            "badtap": ".badtap",
            "boxcon": ".boxcon",
            "cmden": ".cmden",
            "con2cell": ".con2cell",
            "denallIP": ".denallIP",
            "dfi_integra": ".dfi_integra",
            "dfi_integra.info": ".dfi_integra.info",
            "dfi_integra.warn": ".dfi_integra.warn",
            "dfmtail_active": ".dfmtail_active",
            "dfmtail_float": ".dfmtail_float",
            "dfmtail_longactive": ".dfmtail_longactive",
            "drc_IL": ".drc_IL",
            "drc_IOgnac": ".drc_IOgnac",
            "drc_IPall": ".drc_IPall",
            "drc_LU": ".drc_LU",
            "drc_MCR": ".drc_MCR",
            "drc_PWR_HU": ".drc_PWR_HU",
            "drc_RE": ".drc_RE",
            "drc_TUC": ".drc_TUC",
            "drc_gc": ".drc_gc",
            "drcdf_base1": ".drcdf_base1",
            "drcdf_base2": ".drcdf_base2",
            "drcdf_base3": ".drcdf_base3",
            "drcdf_high1": ".drcdf_high1",
            "drcdf_high1_fill": ".drcdf_high1_fill",
            "drcdf_high2": ".drcdf_high2",
            "drcdf_high2_fill": ".drcdf_high2_fill",
            "drcdf_low1": ".drcdf_low1",
            "drcdf_low2": ".drcdf_low2",
            "drcdf_med": ".drcdf_med",
            "drcgclmp": ".drcgclmp",
            "gate2pwr": ".gate2pwr",
            "gnacpin": ".gnacpin",
            "grden": ".grden",
            "metnoport": ".metnoport",
            "misscontainer": ".misscontainer",
            "numgnac": ".numgnac",
            "oob": ".oob",
            "popen": ".popen",
            "trclvs": ".trclvs",
            "trclvs.icvlvs": ".trclvs.icvlvs",
            "trclvs.open": ".trclvs.open",
            "trcopens": ".trcopens",
            "trcoth": ".trcoth",
            "trcport": ".trcport",
            "uv2laycheck": ".uv2laycheck",
			"tcic" : ".tcic",
			"drc":".drc",
			"esdlupdrc":".esdlupdrc",
			"antdrc":".antdrc",
			"lvs_Comparison":".lvs",
			"lvs_Extraction":".lvs",
			"lvs_Shorts":".lvs",
			"srampattern":".srampattern",
			"mimantdrc":".mimantdrc",
			"perc_esdsch_tsmc":".perc_esdsch_tsmc",
			"perc_esd_bump_intel":".perc_esd_bump_intel",
			"perc_esdsch_bump_intel":".perc_esdsch_bump_intel",
			"perc_esd_topo_tsmc":".perc_esd_topo_tsmc",
			"perc_esd_cd_tsmc":".perc_esd_cd_tsmc",
			"perc_esd_ldl_tsmc":".perc_esd_ldl_tsmc",
			"perc_esd_p2p_tsmc":".perc_esd_p2p_tsmc",
			"MICRO_packagedrc":".MICRO_packagedrc",
			"RBOP_packagedrc":".RBOP_packagedrc",
			"finish":".finish",
			"opens":".opens",
			"shorts":".shorts",
			"dvd": ".dvd.violations",
			"dvd15percent": ".dvd.15.violations",
			"dvd22percent": ".dvd.22.violations",
			"dvdA0_signoff": ".dvdA0_signoff.violations",
			"dvdlowstafreq": ".dvdlowstafreq.violations",
			"gateddvd": ".gateddvd.violations",
			"ungateddvd": ".ungateddvd.violations",
			"sf": ".sfactor.violations",
			"sh": ".selfheat",
		"check_cbc_boundary": ".check_cbc_boundary",
        "check_cbc_placement": ".check_cbc_placement",
        "check_macro_abutment": ".check_macro_abutment", 
        "check_power_domains_missing_voltage_areas": ".check_power_domains_missing_voltage_areas",
        "check_va_dimensions": ".check_va_dimensions",
        "check_min_channel": ".check_min_channel",
        "check_nonedge_terminals_minlength": ".check_nonedge_terminals_minlength",
        "check_ps_service_area": ".check_ps_service_area",
        "check_cells_within_voltage_area": ".check_cells_within_voltage_area",
        "check_secondary_power_grid": ".check_secondary_power_grid",
        "check_hip_pg": ".check_hip_pg",
        "check_secondary_pg_cells": ".check_secondary_pg_cells",
        "check_port_tie_offs": ".check_port_tie_offs",
        "check_edge_terminals_below_spec_layer": ".check_edge_terminals_below_spec_layer",
        "check_ports_missing_terminal": ".check_ports_missing_terminal",
        "check_terminals_shorts": ".check_terminals_shorts",
        "check_terminals_not_on_track": ".check_terminals_not_on_track",
        "check_terminals_legal_width":  ".check_terminals_legal_width",
        "check_ports_with_multi_terms": ".check_ports_with_multi_terms",
        "check_dangling_ports": ".check_dangling_ports",
        "check_tieoff_connection": ".check_tieoff_connection",
        "check_additional_td_route_objects": ".check_additional_td_route_objects",
        "check_pdfx_content": ".check_pdfx_content",
        "check_illegal_net_names": ".check_illegal_net_names",
        "check_gnac_on_analog_nets":".check_gnac_on_analog_nets",
        "check_gnacpin_connection": ".check_gnacpin_connection",
        "check_objects_out_of_boundary": ".check_objects_out_of_boundary",
        "check_wire_objects_at_boundary": ".check_wire_objects_at_boundary",    
        "check_shorts": ".check_shorts",
        "check_opens": ".check_opens",
        "check_pg_connectivity": ".check_pg_connectivity",
        "check_pg_drc": ".check_pg_drc",
        "check_clock_cells_cbc_placement": ".check_clock_cells_cbc_placement",
        "check_top_layer_hip_power_pins_exposed": ".check_top_layer_hip_power_pins_exposed",
        "check_cell_name": ".check_cell_name",
        "stair": ".stair.violations",
        "staIR": ".StaIR.violations",
		"idr" : ".idr.violations",
		"fish" : ".FISH.violations",
			"sig.metal.avg" : ".rhsc.sig.metal.avg.violations",
			"sig.metal.peak" : ".rhsc.sig.metal.peak.violations",
			"sig.metal.rms" : ".rhsc.sig.metal.rms.violations",
			"power.metal.avg" : ".rhsc.power.metal.avg.violations",
			"power.metal.peak" : ".rhsc.power.metal.peak.violations",
			"power.metal.rms" : ".rhsc.power.metal.rms.violations",
			"sig.via.avg" : ".rhsc.sig.via.avg.violations",
			"sig.via.peak" : ".rhsc.sig.via.peak.violations",
			"sig.via.rms" : ".rhsc.sig.via.rms.violations",
			"power.via.avg" : ".rhsc.power.via.avg.violations",
			"power.via.peak" : ".rhsc.power.via.peak.violations",
			"power.via.rms" : ".rhsc.power.via.rms.violations",
			"press" : "press",
			"sig.metal.avg_dt" : ".rhsc.sig.metal.avg.violations_dt",
			"sig.metal.peak_dt" : ".rhsc.sig.metal.peak.violations_dt",
			"sig.metal.rms_dt" : ".rhsc.sig.metal.rms.violations_dt",
			"power.metal.avg_dt" : ".rhsc.power.metal.avg.violations_dt",
			"power.metal.peak_dt" : ".rhsc.power.metal.peak.violations_dt",
			"power.metal.rms_dt" : ".rhsc.power.metal.rms.violations_dt",
			"sig.via.avg_dt" : ".rhsc.sig.via.avg.violations_dt",
			"sig.via.peak_dt" : ".rhsc.sig.via.peak.violations_dt",
			"sig.via.rms_dt" : ".rhsc.sig.via.rms.violations_dt",
			"power.via.avg_dt" : ".rhsc.power.via.avg.violations_dt",
			"power.via.peak_dt" : ".rhsc.power.via.peak.violations_dt",
			"power.via.rms_dt" : ".rhsc.power.via.rms.violations_dt",
			"power.metal.avg.150_dt" : ".rhsc.power.metal.avg.violations150threshold_dt",
			"power.via.avg.150_dt" : ".rhsc.power.via.avg.violations150threshold_dt",
			"sig.metal.rms.150_dt" : ".rhsc.sig.metal.rms.violations150threshold_dt",
			"sig.metal.avg.a0final_dt" : ".rhsc.sig.metal.avg.violationsa0final_dt",
			"sig.metal.peak.a0final_dt" : ".rhsc.sig.metal.peak.violationsa0final_dt",
			"sig.metal.rms.a0final_dt" : ".rhsc.sig.metal.rms.violationsa0final_dt",
			"power.metal.avg.a0final_dt" : ".rhsc.power.metal.avg.violationsa0final_dt",
			"power.metal.peak.a0final_dt" : ".rhsc.power.metal.peak.violationsa0final_dt",
			"power.metal.peak.a0.tapein" : ".rhsc.power.metal.peak.violations_tapein_a0final_dt",
			"power.metal.rms.a0final_dt" : ".rhsc.power.metal.rms.violationsa0final_dt",
			"sig.via.avg.a0final_dt" : ".rhsc.sig.via.avg.violationsa0final_dt",
			"sig.via.peak.a0final_dt" : ".rhsc.sig.via.peak.violationsa0final_dt",
			"sig.via.rms.a0final_dt" : ".rhsc.sig.via.rms.violationsa0final_dt",
			"power.via.avg.a0final_dt" : ".rhsc.power.via.avg.violationsa0final_dt",
			"power.via.peak.a0final_dt" : ".rhsc.power.via.peak.violationsa0final_dt",
			"power.via.rms.a0final_dt" : ".rhsc.power.via.rms.violationsa0final_dt",
			"ir_no_tw" : ".ir_inst_no_tw.rpt",
			"em_no_tw" : ".em_inst_no_tw.rpt",
				"sig.metal.avg_normal" : ".rhsc.sig.metal.avg.violations_normal",
				"sig.metal.peak_normal" : ".rhsc.sig.metal.peak.violations_normal",
				"sig.metal.rms_normal" : ".rhsc.sig.metal.rms.violations_normal",
				"power.metal.avg_normal" : ".rhsc.power.metal.avg.violations_normal",
				"power.metal.peak_normal" : ".rhsc.power.metal.peak.violations_normal",
				"power.metal.rms_normal" : ".rhsc.power.metal.rms.violations_normal",
				"sig.via.avg_normal" : ".rhsc.sig.via.avg.violations_normal",
				"sig.via.peak_normal" : ".rhsc.sig.via.peak.violations_normal",
				"sig.via.rms_normal" : ".rhsc.sig.via.rms.violations_normal",
				"power.via.avg_normal" : ".rhsc.power.via.avg.violations_normal",
				"power.via.peak_normal" : ".rhsc.power.via.peak.violations_normal",
				"power.via.rms_normal" : ".rhsc.power.via.rms.violations_normal",
				"sig.metal.avg.a0final_normal" : ".rhsc.sig.metal.avg.violationsa0finala0final_normal",
				"sig.metal.peak.a0final_normal" : ".rhsc.sig.metal.peak.violationsa0final_normal",
				"sig.metal.rms.a0final_normal" : ".rhsc.sig.metal.rms.violationsa0final_normal",
				"power.metal.avg.a0final_normal" : ".rhsc.power.metal.avg.violationsa0final_normal",
				"power.metal.peak.a0final_normal" : ".rhsc.power.metal.peak.violationsa0final_normal",
				"power.metal.peak.a0.tapein_normal" : ".rhsc.power.metal.peak.violations_tapein_a0final_normal",
				"power.metal.rms.a0final_normal" : ".rhsc.power.metal.rms.violationsa0final_normal",
				"sig.via.avg.a0final_normal" : ".rhsc.sig.via.avg.violationsa0final_normal",
				"sig.via.peak.a0final_normal" : ".rhsc.sig.via.peak.violationsa0final_normal",
				"sig.via.rms.a0final_normal" : ".rhsc.sig.via.rms.violationsa0final_normal",
				"power.via.avg.a0final_normal" : ".rhsc.power.via.avg.violationsa0final_normal",
				"power.via.peak.a0final_normal" : ".rhsc.power.via.peak.violationsa0final_normal",
				"power.via.rms.a0final_normal" : ".rhsc.power.via.rms.violationsa0final_normal",
				"power.metal.avg_dataTR0.2" : ".rhsc.power.metal.avg_relaxEM.violations",
				"power.via.avg_dataTR0.2" : ".rhsc.power.via.avg_relaxEM.violations",
				"power.metal.peak_dataTR0.2" : ".rhsc.power.metal.peak_relaxEM.violations",
			"260rescheck" : ".rescheck260.rpt",
			"90rescheck" : ".rescheck90.rpt",
			"120rescheck" : ".rescheck120.rpt",
			"SMP_Reff" : ".smp.reff.violations",
			"400rescheck" : ".rescheck400.rpt",
			"check_hip_pg" : ".check_hip_pg.rpt",
			"check_aon_power_connection" : ".check_aon_power_connection.rpt",
			"check_secondary_pg_cells" : ".check_secondary_pg_cells.rpt",
		"dvd_manual_waiver" : ".dvd.waiverlist",
		"dvd_timing_final" : ".dvd_timing_final",
		"dvd_timing_waiver" : ".dvd_timing_waiver",
		"dvd_timing_debug" : ".dvd_timing_debug",
		"powerfit" : ".rhsc.all.powerfit.drop",
		"SHE" : "_she_report.txt",
		"pg_temp" : ".pgtemp.violations",
		"signal_temp" : ".sigtemp.violations",
		"metal.maxem.em" : ".1.metal.maxem.violations",
		"via.maxem.em" : ".1.via.maxem.violations",
		"metal.peak.em" : ".1.metal.peak.em.violations",
		"via.peak.em" : ".1.via.peak.em.violations",
		"Sfactor" : ".1.power.sfactor.violations",
		"MaxLTE" : ".1.lte.em.violations",
		"SH" : ".1.signal.em.lte.violations",
		"LIB" : ".1.lib.violations",
		"apl_cap_check" : ".rhsc.dv_apl_cap_check",
		"apl_current_check" : ".rhsc.dv_apl_current_check",
		"ccs_timing_check" : ".rhsc.dv_ccs_timing_check",
		"lef_check" : ".rhsc.dv_lef_check",
		"lib_check" : ".rhsc.dv_lib_check",
		"lib_nldm" : ".rhsc.dv_lib_nldm",
		"spef_check" : ".rhsc.spef_reports",
		"timing_window" : ".rhsc.inst_no_tw",
		"timing_slew" : ".rhsc.inst_no_slew",
		"w2w.metal_dataTR0.5" : ".w2w.metal_TR05.violations",
		"w2w.via_dataTR0.5" : ".w2w.via_TR05.violations",
		"w2w.metal_dataTR0.2" : ".w2w.metal_TR02.violations",
		"w2w.via_dataTR0.2" : ".w2w.via_TR02.violations",
		"droppedSignals" : "droppedSignals",
		//105 thresholds
		"power.metal.avg.105_dt" : ".rhsc.power.metal.avg.violations105threshold_dt",
		"power.via.avg.105_dt" : ".rhsc.power.via.avg.violations105threshold_dt",
		"power.metal.peak.105_dt" : ".rhsc.power.metal.peak.violations105threshold_dt",
		"sig.metal.peak.105_dt" : ".rhsc.sig.metal.peak.violations105threshold_dt",
		"stair1pg" : ".rhsc.staticir.gated.1p.drop",
		"dvd5pg" : ".rhsc.dynamicir.gated.5p.drop",
		"10rescheck" : ".rescheck10.rpt",
			//shiou fang
			"input_pwr_met_avg100" : ".rhsc.power.metal.avg.violations_dt",
			"input_pwr_via_avg100" : ".rhsc.power.via.avg.violations_dt",
			//nvl project
			"pg_opens": ".opens",
			"stairungated" : ".rhsc.staticir.ungated.drop",
			"stair2p0g" : ".rhsc.staticir.gated.2p0.drop",
			"stair2p5g" : ".rhsc.staticir.gated.2p5.drop",
			"dvdungated" : ".rhsc.dynamicir.ungated.drop",
			"dvd7p0g" : ".rhsc.dynamicir.gated.7p0.drop",
			"dvd7p5g" : ".rhsc.dynamicir.gated.7p5.drop",
			"7rescheck" : ".rescheck7.rpt",
			"power.metal.peak" : ".metal.peak.em.rpt",
			"power.via.peak" : ".via.peak.em.rpt",
			"power.metal.avg" : ".metal.avg.em.rpt",
			"power.via.avg" : ".via.avg.em.rpt",
			"MaxLTE" : ".lte.violation.rpt",
			"sig.metal.peak" : ".SIG.metal.peak.em.rpt",
			"sig.metal.avg" : ".SIG.metal.avg.em.rpt",
			"sig.via.peak" : ".SIG.via.peak.em.rpt",
			"sig.via.avg" : ".SIG.via.avg.em.rpt",
			
			//for nvlcl0 project onward
			"pgopens": ".opens",
			"stair4p5": ".stair.violations",
			"dynir": ".dynir.violations",
			"120rescheck" : ".rescheck120.rpt",
			"pgem.PWR.metal.PEAK": ".input_pwr_metal_peak.rpt",
			"thermal.PWR.metal.AVG": ".input_pwr_metal_avg.rpt",
			"thermal.PWR.via.AVG": ".input_pwr_via_avg.rpt",
			"sigem.SIG.metal.PEAK": ".input_sig_metal_peak.rpt",
			"thermal.SIG.metal.AVG": ".input_sig_metal_avg.rpt",
			"thermal.SIG.via.AVG": ".input_sig_via_avg.rpt",
			"thermal.PWR.out.SH": ".input_thermal_pwr_out_sh.rpt",
			"thermal.SIG.out.SH": ".input_thermal_sig_out_sh.rpt",
			"thermal.30j.SIG.out.SH": ".input_thermal_30Jsig_out_sh.rpt",
			
			"thermal.INST.out.SH": ".input_thermal_inst_out_sh.rpt",
			"thermal.PWR.out.TEMP": ".input_thermal_pwr_out_temp.rpt",
			"thermal.SIG.out.TEMP": ".input_thermal_sig_out_temp.rpt",
			"apl_cap_check" : ".rhsc.dv_apl_cap_check",
			"apl_current_check" : ".rhsc.dv_apl_current_check",
			"lef_check" : ".rhsc.dv_lef_check",
			"lib_check" : ".rhsc.dv_lib_check",
			"spef_check" : ".rhsc.spef_reports",
			"timing_window" : ".rhsc.inst_no_tw",
			"timing_slew" : ".rhsc.inst_no_slew",
			
		//reff for odi mpm sfe and so on
			"odi_Reff" : ".odi.reff",
			"sfe_Reff" : ".sfe.reff",
			"mpm_Reff" : ".mpm.reff",
			"tpm_Reff" : ".tpm.reff",
			"dmp_Reff" : ".dmp.reff",
			
		
		//new dynamic and 130 EM	
		"dynir15ungated": ".15ungated.dynir.violations",
		"dynir15gated": ".15gated.dynir.violations",
		"dynir20gated": ".20gated.dynir.violations",	
		"thermal.130PWR.metal.AVG": ".input_130pwr_metal_avg.rpt",
		"thermal.130PWR.via.AVG": ".input_130pwr_via_avg.rpt",
		
		//shiou fang nvlcl0
        "SIG_SH.30C": ".input_thermal_30Jsig_out_sh.rpt",
        "SHE": ".input_thermal_inst_out_sh.rpt",
        "SIG_TEMP": ".input_thermal_sig_out_temp.rpt",
        "PWR_TEMP": ".input_thermal_pwr_out_temp.rpt",
        "PWR_SH": ".input_thermal_pwr_out_sh.rpt"
}



console.log(currentPath)

//old main project
exports.access_rvmtlcs0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvmtlcs0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}
exports.access_rvmtlce0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvmtlce0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}
exports.access_rvmtlsocnc0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvmtlsocnc0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}
exports.access_rvmtlsocnk0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvmtlsocnk0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}
exports.access_rvmtlsocsnb0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvmtlsocsnb0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}







//shiou fang project 
exports.access_rvarlca0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvarlca0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}

exports.access_rvarlcsp0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvarlcsp0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}
exports.access_rvarlcb0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvarlcb0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}
exports.access_rvarlcj0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvarlcj0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}
exports.access_rvarlcr0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvarlcr0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}
exports.access_rvnvlca0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvnvlca0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}


//DAVID project
exports.access_rvnvlcd0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvnvlcd0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}




//YQ project
exports.access_rvptla0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvptla0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}

exports.access_rvptla0evr_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvptla0evrviolations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}

exports.access_rvptlb0evr_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvptlb0evrviolations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}
exports.access_rvwcla0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvwcla0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}

exports.access_rvwcla0evr_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvwcla0evrviolations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}






//gugen project
exports.access_rvarlcpa0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvarlcpa0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}

exports.access_rvarlcpb0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvarlcpb0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}
exports.access_rvarlcpb0_preswap_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvarlcpb0_preswapviolations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}

exports.access_rvarlcpc0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvarlcpc0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}


//Xander project
exports.access_rvnvla0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvnvla0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}

//BRIAN project
exports.access_rvnvlb0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvnvlb0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}

//hanpin project

exports.access_rvnvlcl0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvnvlcl0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}
exports.access_rvnvlcp0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvnvlcp0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}
exports.access_rvnvlct0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvnvlct0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}
exports.access_rvnvlcr0_violations = function(partition, viol_type){
    var filepath = path.join(currentPath, 'rvnvlcr0violations', partition+extension_finder[viol_type])
    console.log(filepath)
    try{
        var rawdata = fs.readFileSync(filepath);
        return rawdata.toString();
    }
    catch (err){
        console.log(err)
        return "No Errors!"
    }
}