window.onload = function(){ 
                const idlist =['Client','Addclient','Agents','Nominee','Payments']
	for (x in idlist){
		document.getElementById(idlist[x]).style.display = 'none';
		console.log(idlist[x]);
                }
}



function setVisibility(id,id2) {
	const idlist =['Dashboard','Client','Addclient','Agents','Nominee','Payments']
	for (x in idlist){
		document.getElementById(idlist[x]).style.display = 'none';
		console.log(idlist[x]);
}
if(document.getElementById(id2).value=='Hide Layer'){
document.getElementById(id2).value = 'Show Layer';
document.getElementById(id).style.display = 'none';
console.log('if exc '+id,id2);
}else{
document.getElementById(id2).value = 'Hide Layer';
document.getElementById(id).style.display = 'inherit';
console.log('else exc '+id,id2);
}
}