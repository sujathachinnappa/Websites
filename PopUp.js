
function popUpOpen(){
	document.getElementById("overlay").style.visibility = "visible";
	document.getElementById("popup").style.visibility = "visible";
	document.getElementById("popupclose").style.visibility = "visible";
	document.getElementById("popupcontent").style.visibility = "visible";

}

function popUpClose(){
	document.getElementById("overlay").style.visibility = "hidden";
	document.getElementById("popup").style.visibility = "hidden";
	document.getElementById("popupclose").style.visibility = "hidden";
	//document.getElementById("popupcontent").style.visibility = "hidden";
}
	
function fillContent(circleName){
	//alert(circleName);
	fillContentElement = document.getElementById("refLinks");
			//alert(fillContentElement.innerHTML);
	if(circleName=="DataScience"){
		//fillContentElement.innerHTML = "<h3>Below are some of the frequently visited sites for Data Science Introduction</h3>" 
		fillContentElement.innerHTML = "<tr><td><a href='http://bit.ly/1kyiNBw' target='_blank'> SMU&nbsp;University</a></td></tr>" 
		fillContentElement.innerHTML = fillContentElement.innerHTML + "<tr><td><a href='http://scikit-learn.org/stable/tutorial/basic/tutorial.html' target='_blank'>Machine&nbsp;Learning</a></td></tr> "
	}
	else if(circleName=="MLib"){
		fillContentElement.innerHTML = "TODO : Add links using innerHTML property as done in DataScience!..."
	}
	else if(circleName=="Tools"){
		fillContentElement.innerHTML = "<tr><td><h3> Below are some of the frequently used statistical and machine learning tools and packages &nbsp; </h3></tr></td>"
		fillContentElement.innerHTML = fillContentElement.innerHTML + "<tr><td><p><a href='https://odamid.oda.sas.com' target='_blank'>SAS&nbsp; on&nbsp; Cloud</a>&nbsp&nbsp&nbsp Statistical Modeling Tool : 1-year free subscription for students</p></td></tr> "
		fillContentElement.innerHTML = fillContentElement.innerHTML + "<tr><td><p><a href='https://www.rstudio.com/products/rstudio/download/' target='_blank'>rstudio</a>&nbsp&nbsp&nbsp Statistical Modeling Tool - Open Source</p></td></tr> " 
																	+ "<tr><td><p><a href='https://www.python.org/downloads/' target='_blank'>Python</a>&nbsp&nbsp&nbsp Python is a programming language that has become popular for doing data science <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp; and offers variety of statistical and machine learning packages</p></td></tr> "
																	+ "<tr><td><p><a href='https://processing.org/' target='_blank'>Processing</a>&nbsp&nbsp&nbsp Processing is a open-source software and IDE for creating an electronic art and <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp; creative graphics</p></td></tr> "
																	+ "<tr><td><p><a href='https://d3js.org/' target='_blank'>Data Driven Document (d3js)</a>&nbsp&nbsp&nbsp A JavaScript library for manipulating documents based on data <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp; using HTML, SVG and CSS</p></td></tr> "
																	+ "<tr><td><p><a href='http://scikit-learn.org/stable/install.html' target='_blank'>scikit-learn</a>&nbsp&nbsp&nbsp Machine learning libraries in Python </p></td></tr> "
																	+ "<tr><td><p><a href='https://dato.com/' target='_blank'>Dato</a>&nbsp&nbsp&nbsp Machine learning with Graphlabs and SFrame (optimized for Big Data platforms</p></td></tr> "
																	+ "<tr><td><p><a href='http://opencv.org/' target='_blank'>OpenCV</a>&nbsp&nbsp&nbsp Machine learning libraries for real-time applications and image processing </p></td></tr> "
																	+ "<tr><td><p><a href='http://openframeworks.cc/' target='_blank'>Open Frameworks</a>&nbsp&nbsp&nbsp Open source C++ based application frameworks for creative coding </p></td></tr> "

	}
	else if (circleName=="other"){
		fillContentElement.innerHTML = "<tr><td><h3> Links to projects &nbsp; </h3></tr></td>"
		//fillContentElement.innerHTML = fillContentElement.innerHTML + "<tr><td><a href="MSDS6370_Sampling Project_SR_04102016.docx"'</td></tr> "
	}


}
