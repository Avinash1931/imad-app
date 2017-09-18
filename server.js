var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one': {
  title: 'Article One | Avi Ash',
  heading: 'Article One',
  date: 'May 19 2017',
  content: ` 
  <p>
 this is my content for my first Avinash Article. this is my content for my friest Avinash Article. this is my content for my friest Avinash Article.this is my content for my friest Avinash Article.this is my content for my friest Avinash Article.this is my content for my friest Avinash Article.
</p>
    <p>
 this is my content for my friest Avinash Article. this is my content for my friest Avinash Article. this is my content for my friest Avinash Article.this is my content for my friest Avinash Article.this is my content for my friest Avinash Article.this is my content for my friest Avinash Article.
                </p>
                <p>
this is my content for my friest Avinash Article. this is my content for my friest Avinash Article. this is my content for my friest Avinash Article.this is my content for my friest Avinash Article.this is my content for my friest Avinash Article.this is my content for my friest Avinash Article.
 </p>`
},
 'article-two' : {
    title: 'Avinash Two | Avi Ash',
  heading: 'Avinash Two',
  date: 'May 19 2017',
  content: `
  <p>
Name Avinash generally means Indestructible or Immortal or Unconquerable, is of Indian origin, Name Avinash is a Masculine (or Boy) name. Person with name Avinash are mainly Hindu by religion. Name Avinash belongs to rashi Mesh (Aries) with dominant planet Mars (Mangal) and Nakshatra (stars) Krithika.
            </p>
            <p>
                Find qualities of  Aries (Mesh) or Find  Numerology,  Lucky number, lucky days, lucky color,  Auspicious stones  for Avinash or Find Chinese zodiac sign or Birthstone for your birthday or Find compatibility of Mesh (Aries) with other zodiac signs.
            </p>
            <p>
                Powerful and complete. You are good intellectually and require several outlets for your energies. You are not a builder but a planner, and you want others to carry out your plans.You are bold, independent, inquisitive and interested in research. You know what you want and why you want it.
            </p>`
},
 'article-three' : {
    title: 'Avinash Three | Avi Ash',
  heading: 'Avinash Three',
  date: 'May 19 2017',
  content: `
   <p>
                You are always looking for an opportunity to achieve financial and emotional security. You are basically peacemaker. You understand the law of harmony and desire to balance your life with those around you.
            </p>
            <p>
                You may feel incomplete without someone to share your love, ideals, wealth or work. You can be very sensitive and could appear a bit shy and perceptive. You have developed intuition, patience and the ability to nurture others.
            </p>
            <p>
                Number 11 may manifest in a person as a tendency to be idealistic, fanatical, lacking practical realities, to use their divine gift for self-purposes. If a person does not realize his or her abilities.
            </p>`
},
 'article-four' : {
       title: 'Avinash Four | Avi Ash',
  heading: 'Avinash Four',
  date: 'May 19 2017',
  content: `
  <p>
                Meaning of the name Avinash </P>
                <p>
                According to Hindu religion numerology represent many aspects of one life. You can predict personality by number itself or a combination of related numbers or you can measure an entity. Even more, you can make some predictions about an individual, house or a company</P>`
},
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content= data.content;
    
var htmlTemplate = `
 <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
            ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
               ${content}
            </div>
        </div>
        </body>
    </html>
   `;
   return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res) {
     //articleName == article-one
     //article[articlename] == {} content object for article one
     var articleName = req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
