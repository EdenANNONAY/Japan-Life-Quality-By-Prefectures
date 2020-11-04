# Japan Life Quality By Prefectures

### What it is ?

This is a web-scrapping bot that uses puppeteer JS to scrape data about life quality by prefectures in Japan 🇯🇵☺️ <br>
Everything is then stored in JSON file so that you can easily use it in any code or software that you want. <br>
Here is a [web app](https://nihonlifequality.web.app/) I made with this bot ranking each prefecture's quality of life.<br>
Who know maybe you will find in which prefecture you want to move in !

![Japan !!](https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)

The data scraped for each prefecture is the following :

- Name of Prefecture
- Capital
- Total Population
- Total Land Area in Km2
- Population Density Per Km2
- Gross Prefectural Product in Million Yen
- Annual Increase Rate of Gross Prefectural Product in Percentage
- Prefectural Income per Person in Yen
- Annual Increase Rate of CPI
- Unemployment Rate in Percentage
- Monthly Average of Male Wages In Yen
- Monthly Average of Female Wages In Yen
- Monthly Living Expenditure per Household In Yen
- Passenger Cars for Private Use per 1000 Persons
- Total Fertility Rate in Children Per Woman
- Crude Death Rate Per 1000 Persons
- Rate Of Natural Increase Of Population In Percentage
- Elementary School Pupils Per Teacher In Persons
- Total Real Length Of Major Roads In Km Per Km2
- Crime Rate Per 100000 Persons

Note : All the data is scraped from [Knoema](https://knoema.com/atlas/Japan)

### How to use it ?

It's pretty simple to get started in only 3 steps :

1. Install node js ,if you don't already have it, [Here](https://nodejs.org/en/download/)
2. Install puppeteer js by running `npm install puppeteer` in a terminal
3. Download this repo and run `node appendjson.js` in a terminal while in the repo folder

It may take a few minutes ..

**ENJOY !!** 🎉

Everything has now been written in the `prefectures.json` file and you can play around with it as much as you want !

More fun stuff [Here](https://edenannonay.com)
