

function wikiData(date){ 
    const dateArray = date.split('-'); 
  
    const ariaLabel = `${dateArray[1]} ${dateArray[0]}`;
  
  
    var dict = {'01': 'January', '02': 'February' , '03': 'March', '04':'April', '05':'May', '06':'June', '07':'July', '08':'August', '09':'September', '10':'October', '11':'November', '12':'December'};
  
    console.log(Object.keys(dict))
    
    console.log(dateArray[0])
    console.log(dict[dateArray[1]])
    console.log(dateArray[2])
    
  
    fetch(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=Portal:Current%20events/${dict[dateArray[1]]}%20${dateArray[2]}&prop=text&explaintext=True&origin=*`)
      .then(response => response.json())
      .then(data => {
    
        let content = data.parse.text['*'];
        content = content.replace(/<a[^>]*>/g, '').replace(/<\/a>/g, '');
  
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
  
        const number = Number(dateArray[0])
        const strippedNumber = Number(number);
        console.log(strippedNumber);
  
  
        //console.log(`[aria-label="${dict[dateArray[1]]} ${dateArray[0]}"]`);
        let elementContent = tempDiv.querySelector(`[aria-label="${dict[String(dateArray[1])]} ${strippedNumber}"]`).innerHTML;
        elementContent = elementContent.replace(/<li>history<\/li>/g, '');
        elementContent = elementContent.replace(/<li>watch<\/li>/g, '');
        elementContent = elementContent.replace(/<li>edit<\/li>/g, '');
        elementContent = elementContent.replace(/\[.*?\]/g, '');
        

        console.log(elementContent);
        document.getElementById('targetElement').innerHTML = elementContent;
      });
    
  }
