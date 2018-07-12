function funn1()
{
$(window).scroll(function(brtag)
	{
		if($("#org-about-company-module__show-details-btn :nth-child(1)").text()=="See more")
		{
			$("#org-about-company-module__show-details-btn").trigger('click');
		}
		//document.getElementsByClassName("org-top-card-module__name Sans-26px-black-85%-light").
		if(document.getElementsByClassName("org-top-card-module__name Sans-26px-black-85%-light")[0].nextElementSibling.type=="text")
	      	{
	      			 
		}
		else
		{
		document.getElementsByClassName("org-top-card-module__name Sans-26px-black-85%-light")[0].parentNode.insertBefore(
		inputCreator(document.getElementsByClassName("org-top-card-module__name Sans-26px-black-85%-light")[0].innerText), document.getElementsByClassName("org-top-card-module__name Sans-26px-black-85%-light")[0].nextSibling);
		$(".prospectName").focus(function(){$(this).select(); document.execCommand('copy');});
		}
		
		if(document.getElementsByClassName("org-about-us-company-module__website mb3 link-without-visited-state ember-view")[0].nextSibling.type=="text")
	      	{
	      			 
		}
		else
		{
		document.getElementsByClassName("org-about-us-company-module__website mb3 link-without-visited-state ember-view")[0].parentNode.insertBefore(
		inputCreator(document.getElementsByClassName("org-about-us-company-module__website mb3 link-without-visited-state ember-view")[0].innerText), document.getElementsByClassName("org-about-us-company-module__website mb3 link-without-visited-state ember-view")[0].nextSibling);
		$(".prospectName").focus(function(){$(this).select(); document.execCommand('copy');});
		}
	});

}

function brtag()
{

}
funn1();
function eventAssigner(e)
{
	e.preventDefault();
	e.stopPropagation();
}
function inputCreator(inputVal)
{
	var txxt=document.createElement("input");
	txxt.setAttribute("type", "text");
	txxt.addEventListener("click", eventAssigner);
	txxt.setAttribute("value", inputVal);
	txxt.setAttribute("class", "prospectName");
	return txxt;
}
function inputCreator2(inputVal)
{
	var txxt=document.createElement("input");
	txxt.setAttribute("type", "text");
	txxt.addEventListener("click", eventAssigner);
	txxt.setAttribute("value", inputVal);
	txxt.setAttribute("id", "prospectSite");
	return txxt;
}
//features added to this extension
//1. click "see more" button on scroll
// /*I can add brief message saying copied as described in this link www.w3schools.com/howto/howto_js_snackbar.asp */
