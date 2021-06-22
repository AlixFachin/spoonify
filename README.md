# spoonify
This project is the result of a team four-day hackathon realized during the Immersive Program at [Code Chrysalis](https://www.codechrysalis.io/).

## Background
The constraints around this hackathon were the following:
* building a full-stack app and present it live on Youtube, everythign in 4 days.
* Using the industry partner [Stripe](https://stripe.com/docs/api)'s API.

## Youtube video
The presentation can be seen at the following link:
<https://www.youtube.com/watch?v=DHtAGdg5S_4>

## Thanks
Thanks to the team at **Stripe** for the opportunity to work with them during four days, for their support and for taking the time to answer all of our questions.

## Team Members
The team members were as follows:
| Name | Github Handle |
|------|---------------|
| Alix Fachin | [@AlixFachin](https://github.com/AlixFachin) |
| Mattia Bonicelli | [@Bonicelli-Mattia](https://github.com/Bonicelli-Mattia) |
| Jay Sutham | [@jaysutham](https://github.com/jaysutham) |
| Michael Metcalf | [@miachel-metcalf](https://github.com/michael-metcalf) |
| Mark Herring | [@Worldonawire](https://github.com/Worldonawire) |

## Project description
The project starts from the following idea:
A lot of small restaurants are suffering from the COVID-19 crisis, and we wanted to provide an app 
to help them survive while diversifying their income by selling some products online.
In four days however it was not realistic to aim this high, so we made a MVP which allows one team to sell their products online.

## Technologies used

* On the front-end: `Vue`, `VueX` and `Vuetify`
* On the back-end: `Express.js` for our REST API and `knex.js` to connect to our `PostgresQL` database.
* Payment managed by  [Stripe API](https://stripe.com/docs/api)
* Authentication managed by [Auth0](https://auth0.com)

## Project setup
We used `npm` as package manager, so if you download our repo (`fork` and `clone`), you can get a development environment ready in the following way:
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## License
This product is licensed under the MIT License. Please have a look at the [licensing file](LICENSE.md) for more information.