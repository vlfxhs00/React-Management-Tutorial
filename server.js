const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : '1',
            'image' : 'https://placeimg.com/64/64/any1', 
            'name' : '이재천',
            'birthday' : '961222',
            'gender' : '남자',
            'job' : '대학생'
         },
         {
           'id' : '2',
           'image' : 'https://placeimg.com/64/64/any2', 
           'name' : '이지현',
           'birthday' : '960305',
           'gender' : '남자',
           'job' : '프로그래머'
         },
         {
           'id' : '3',
           'image' : 'https://placeimg.com/64/64/any3', 
           'name' : '이우주',
           'birthday' : '951222',
           'gender' : '남자',
           'job' : '디자이너'
         }
    ]);
});

app.listen(port, () => console.log(`Listending on port ${port}`));