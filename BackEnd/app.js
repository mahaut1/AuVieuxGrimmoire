const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb+srv://windalmahaut:qoFUyirNbEXYefZ8@cluster0.cczpfwg.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use(express.json());

app.post('/api/book', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Objet créé !'
  });
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use('/api/books', (req, res, next) => {
    const book = [
      {
        userId: '1',
        title: 'Miwaukee Mission',
        author: 'Elder Cooper',
        imageUrl: 'https://res.cloudinary.com/dpcysdzoq/image/upload/v1703933179/ax3jokj1uqn8zzeorybt.png',
        year: 2021,
        genre: 'Policier',
        ratings:[
            {
                userid:'',
                grade: 3,
            }
        ],
        averageRating: 3
      },
      {
        userId: '2',
        title: 'Book for Esther',
        author:'Alabaster',
        imageUrl: 'https://res.cloudinary.com/dpcysdzoq/image/upload/v1703933293/oqdm3wcjnqnlutvnq6w4.png',
        year: 2022,
        genre: 'paysage',
        ratings:[
            {
                userid:'',
                grade: 4,
            }
        ],
        averageRating: 4
      },
      {
        userId: '3',
        title: 'The Kingfolk Table',
        author:'Nathan Williams',
        imageUrl: 'https://res.cloudinary.com/dpcysdzoq/image/upload/v1703933617/xqhve3kmvgak1lc0fxfz.png',
        year: 2022,
        genre: 'Cuisine',
        ratings:[
            {
                userid:'',
                grade: 3,
            }
        ],
        averageRating: 3
      },
      {
        userId: '4',
        title: 'Thinking fast & slow',
        author:'Daniel Kahneman',
        imageUrl: 'https://res.cloudinary.com/dpcysdzoq/image/upload/v1703933759/oknjneem6gxahhtbovbx.png',
        year: 2022,
        genre: 'Economie',
        ratings:[
            {
                userid:'',
                grade: 3,
            }
        ],
        averageRating: 3,
      },
      {
        userId: '5',
        title: 'Company of one',
        author:'Paul Jarvis',
        imageUrl: 'https://res.cloudinary.com/dpcysdzoq/image/upload/v1703933944/tj1pyemuandteyy63iql.png',
        year: 2022,
        genre: 'Business',
        ratings:[
            {
                userid:'',
                grade: 4,
            }
        ],
        averageRating: 4,
      },
      {
        userId: '6',
        title: 'Design Anthology',
        author:'James Doe',
        imageUrl: 'https://res.cloudinary.com/dpcysdzoq/image/upload/v1703934343/b7a5yt0ycdhmukip4o4e.png',
        year: 2022,
        genre: 'Architecture',
        ratings:[
            {
                userid:'',
                grade: 4,
            }
        ],
        averageRating: 4,
      },
      {
        userId: '2',
        title: 'Book of Genesis',
        author:'Alabaster',
        imageUrl: 'https://res.cloudinary.com/dpcysdzoq/image/upload/v1703934405/xwznnkwut9syioe2obwy.png',
        year: 2022,
        genre: 'Jardinage',
        ratings:[
            {
                userid:'',
                grade: 3,
            }
        ],
        averageRating: 3,
      },
      {
        userId: '2',
        title: 'Psalms',
        author:'Alabaster',
        imageUrl: 'https://res.cloudinary.com/dpcysdzoq/image/upload/v1703934718/cmzrvfyofwsvfhzumvvi.png',
        year: 2022,
        genre: 'Poesie',
        ratings:[
            {
                userid:'',
                grade: 4,
            }
        ],
        averageRating: 4,
      },
      {
        userId: '7',
        title: 'Milk & Honey',
        author:'Rupi Kaur',
        imageUrl: 'https://res.cloudinary.com/dpcysdzoq/image/upload/v1703935244/hbl8ojjt51bjbmzrqzna.png',
        year: 2022,
        genre: 'Ecologie',
        ratings:[
            {
                userid:'',
                grade: 4,
            }
        ],
        averageRating: 4,
      },
      {
        userId: '8',
        title: 'Stupore e Tremori',
        author:'Amélie Nothomb',
        imageUrl: 'https://res.cloudinary.com/dpcysdzoq/image/upload/v1703935427/arm61x3pnnmd3hy5offs.png',
        year: 2018,
        genre: 'Roman',
        ratings:[
            {
                userid:'',
                grade: 4,
            }
        ],
        averageRating: 4,
      },
      {
        userId: '9',
        title: 'Cereal',
        author:'Van Duysen',
        imageUrl: 'https://res.cloudinary.com/dpcysdzoq/image/upload/v1703935623/qsyxbuur98bxb4t8dtx2.png',
        year: 2022,
        genre: 'Architecture',
        ratings:[
            {
                userid:'',
                grade: 4,
            }
        ],
        averageRating: 4,
      },
      {
        userId: '10',
        title: 'Zero to One',
        author:'Peter Thiel',
        imageUrl: 'https://res.cloudinary.com/dpcysdzoq/image/upload/v1703935716/gdwup9x4avh75xjra9bs.png',
        year: 2022,
        genre: 'Business',
        ratings:[
            {
                userid:'',
                grade: 4,
            }
        ],
        averageRating: 4,
      },
    ];
    res.status(200).json(book);
  });

module.exports = app;