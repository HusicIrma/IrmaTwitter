    var tweets = [];

    function postNewTweet(){

        var today=new Date();
        var date=today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();
        var time=today.getHours() + ':' + today.getMinutes();
        var id = tweets.length + 1;
        var li = document.createElement('li');
        var inputValue = document.getElementById('newTweet').value;
        var finalValue = id + ' ' + inputValue + ' ' + date + ' ' + time;
        var t = document.createTextNode(finalValue);
        li.appendChild(t);
        tweets.push({id:id, content:inputValue, date:date + time});
        document.getElementById('list').appendChild(li);
        document.getElementById('newTweet').value="";
        console.log(tweets);
    

    var buttonDelete = document.createElement("button");
buttonDelete.innerHTML = '<i class="far fa-trash-alt" del-date="'+date + ' ' + time +'"></i>';
buttonDelete.onclick = deleteItem;

function deleteItem(e) {
    var ul = document.getElementById('list');
    ul.removeChild(li);

    var foundIndex = tweets.findIndex(function (tweet) {
        return tweet.id == id;
    });
    if (foundIndex > -1) {
        tweets.splice(foundIndex, 1);
    }
    console.log(tweets);
}
    li.appendChild(buttonDelete);
    }
    
