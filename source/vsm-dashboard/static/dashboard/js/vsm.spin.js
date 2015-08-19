/**
 * Created by root on 15-8-5.
 */

var spin_opts = {
    lines: 12,
    length: 10,
    width: 3,
    radius: 15,
    corners: 1,
    rotate: 0,
    direction: 1,
    color: 'gray',
    speed: 1,
    trail: 50,
    shadow: false,
    hwaccel: false,
    className: 'spinner',
    zIndex: 2e9,
    top:20,
    left: 50
};

var spinner = new Spinner(spin_opts);

function GenerateSpin(){
	var html = "";
		html += "<div class='modal-dialog' style='height:100px;width:150px;background-color:white;top:250px'>";
		html += "	<div class='modal-content spin-content'>";
		html += "		<div class='spin-body'>";
		html += "			<div id='divSpin'></div>";
		html += "		</div>"
		html += "	</div>";
		html += "</div>";


		var dialogWrapper = $("#modal_wrapper")[0];
		dialogWrapper.id = "modal_wrapper";
		dialogWrapper.className = "modal fade";
		dialogWrapper.innerHTML = html;

		//Open modal
		$("#modal_wrapper").modal("show");
		//remove the event from the modal
		$("#modal_wrapper").off();
}


function ShowSpin(){
	//Generate Spin
	GenerateSpin();

	//get the spin
	var spin_target = $("#divSpin").get(0);
	spinner.spin(spin_target);
}

function CloseSpin(){
	spinner.spin();
	$("#modal_wrapper").modal("hide");
}

$(document).ajaxStart(function(){
	//load the spin
	ShowSpin();
});

$(document).ajaxStop(function(){
	//close the spin
	CloseSpin();
});

$(document).ajaxError(function(){
	//close the spin
	CloseSpin();
});


