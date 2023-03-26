function navToggleAction() {
	var element = document.getElementById("navtoggleGB");
	element.classList.add("navToggleActionFade");

}

function sidebarAction() {
	var element = document.getElementById("sidebarGB");
	element.classList.add("toolbarSideScreen");

}

function hiRemove() {
	var element = document.getElementById("hiText");
	element.classList.add("hiHidingtext");

}

function backgroundIndexShow() {
	var element = document.getElementById("backgroundIndexID");
	element.classList.add("backgroundIndexShowing");

}

function showCloseIcon() {
	var element = document.getElementById("closeContainerID");
	element.classList.add("closeContainerActive");

}

function hideCloseIcon() {
	var element = document.getElementById("closeContainerID");
	element.classList.remove("closeContainerActive");
	var element = document.getElementById("backgroundIndexID");
	element.classList.remove("backgroundIndexShowing");
	var element = document.getElementById("hiText");
	element.classList.remove("hiHidingtext");
	var element = document.getElementById("navtoggleGB");
	element.classList.remove("navToggleActionFade");
	var element = document.getElementById("sidebarGB");
	element.classList.remove("toolbarSideScreen");
}
