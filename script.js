var tweets = [{
    
        id:1,
        content: 'This is my first tweet',
        date: '2-10-2020 13:45'
},
    {
        id: 2,
        content: 'This is my second tweet',
        date: '10-10-2021'
    },
    {
        id:3,
        content:'This is my third tweet',
        date: '17-10-2021'
    }
]

var allTweets = document.getElementById("list");

for(var i=0;i<tweets.length;i++){
         var item = tweets[i];
         var elem = document.createElement("li");
         elem.value=item[0];
         elem.innerHTML=item.id + ' ' + item.content + ' ' + item.date;

         allTweets.appendChild(elem);
    }

    console.log(allTweets);

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
    }
