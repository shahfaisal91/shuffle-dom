var arr = new Array();

$(function($){
   
   for(j=0;j<25;j++)  
    changesequence("q"+j);
	
	
});	

function changesequence(__class)
{
   i=0;
   $("."+__class).each(function(){ arr[i]=$(this).html(); i++; });  
   arr1=suffule(arr)
   i=0;
   $("."+__class).each(function(){  $(this).html(arr1[i]); i++;  });
}

	function suffule(array) {
    var counter = array.length, temp, index;
	while (counter > 0) {
        index = Math.floor(Math.random() * counter);
		counter--;
		temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}