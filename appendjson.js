const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {

const browser = await puppeteer.launch({

    headless:true,
    
    defaultViewport : null,

    
    
    });


var json = await {prefectures:[]};


const prefectureNames = await [
'Hokkaido',
'Aomori',
'Iwate',
'Miyagi',
'Akita',
'Yamagata',
'Fukushima',
'Ibaraki',
'Tochigi',
'Gunma',
'Saitama',
'Chiba',
'Tokyo',
'Kanagawa',
'Niigata',
'Toyama',
'Ishikawa',
'Fukui',
'Yamanashi',
'Nagano',
'Gifu',
'Shizuoka',
'Aichi',
'Mie',
'Shiga',
'Kyoto',
'Osaka',
'Hyogo',
'Nara',
'Wakayama',
'Tottori',
'Shimane',
'Okayama',
'Hiroshima',
'Yamaguchi',
'Tokushima',
'Kagawa',
'Ehime',
'Kochi',
'Fukuoka',
'Saga',
'Nagasaki',
'Kumamoto',
'Oita',
'Miyazaki',
'Kagoshima',
'Okinawa' ];





const page = await browser.newPage();



for(let o=0;o<prefectureNames.length;o++){

await page.goto('https://knoema.com/atlas/Japan/'+prefectureNames[o]);

const element = await page.$('h1');

const prefecture = await page.evaluate(element => element.textContent, element);



const data = await page.$$('div.facts ul li');

for(let n=0;n<data.length;n++){
    let lo = await data[n];
    let affichage = await page.evaluate( lo => lo.textContent, lo);
    

    // Capital

    if(lo==data[0]){
    let testo = await affichage.split(':');
    let res = testo[1].split('\n');
    resCap = res[0].split(' ');
   
    }

    // Total Population

    if(lo==data[2]){
        let ja = await affichage.split(':');
        jajan = ja[1].split(' ');
        
        
        
        }
    
    // Total Land Area

    if(lo==data[3]){
        let petit = await affichage.split(':');
        petitponey = petit[1].split(' ');
        petitponey[0]= petitponey[0].replace(/\s/g, '');
        
        
        }

    // Population density

    if(lo==data[4]){
        let cereale = await affichage.split(':');
        let cerealekiller = cereale[1].split(' ');
        cooper = cerealekiller[0].replace(/\s/g, '');
        
        }

    // Gross Prefectural Product

    if(lo==data[5]){
        let jambon = await affichage.split(':');
        jamtresbon = jambon[1].split(' ');
        jamtresbon[0] = jamtresbon[0].replace(/\s/g, '');
        
        
        }

    // Annual Increase Rate of Gross Prefectural Product
    
    if(lo==data[6]){
        let vache = await affichage.split(':');
        lait = vache[1].split(' ');
        lait[0]=lait[0].replace(/\s/g, '');
        
        
        }

    // Prefectural Income per Person 

    if(lo==data[7]){
        let poulet = await affichage.split(':');
        chicken = poulet[1].split(' ');
        chicken[0]=chicken[0].replace(/\s/g, '');
        
        }
    
    // Annual Increase Rate of CPI
    
    if(lo==data[8]){
        let neko = await affichage.split(':');
        nekosan = neko[1].split(' ');
        nekosan[0]=nekosan[0].replace(/\s/g, '');
        
        
        }

    // Unemployment Rate in percentage

    if(lo==data[10]){
        let kawa = await affichage.split(':');
        kawasaki = kawa[1].split(' ');
        kawasaki[0]=kawasaki[0].replace(/\s/g, '');
        
        }

    // Monthly Average of Male Wages

    if(lo==data[11]){
        let a = await affichage.split(':');
        aa = a[1].split(' ');
        aa[0]=aa[0].replace(/\s/g, '');
        
        }

    // Monthly Average of Female Wages

    if(lo==data[12]){
        let b = await affichage.split(':');
        bb = b[1].split(' ');
        bb[0]=bb[0].replace(/\s/g, '');
        
        
        }

    // Monthly Living Expenditure per Household

    if(lo==data[13]){
        let c = await affichage.split(':');
        cc = c[1].split(' ');
        cc[0]=cc[0].replace(/\s/g, '');
        
        }
        
    // Passenger Cars for Private Use per 1,000 Persons

    if(lo==data[14]){
        let d = await affichage.split(':');
        dd = d[1].split(' ');
        dd[0]=dd[0].replace(/\s/g, '');
        
        }

    // Total Fertility Rate 

    if(lo==data[15]){
        let e = await affichage.split(':');
        ee = e[1].split(' ');
        ee[0]=ee[0].replace(/\s/g, '');
        
        }

    // Crude Death Rate

    if(lo==data[16]){
        let f = await affichage.split(':');
        ff = f[1].split(' ');
        ff[0]=ff[0].replace(/\s/g, '');
        
        }

    // Rate of Natural Increase of Population

    if(lo==data[17]){
        let g = await affichage.split(':');
        gg = g[1].split(' ');
        gg[0]=gg[0].replace(/\s/g, '');
        
        }

    // Elementary School Pupils per Teacher

    if(lo==data[18]){
        let h = await affichage.split(':');
        hh = h[1].split(' ');
        hh[0]=hh[0].replace(/\s/g, '');
        
        }

    // Total Real Length of Major Roads

    if(lo==data[19]){
        let p = await affichage.split(':');
        pp = p[1].split(' ');
        pp[0]=pp[0].replace(/\s/g, '');
        
        }

    // Crime Rate 
    
    if(lo==data[20]){
        let q = await affichage.split(':');
        qq = q[1].split(' ');
        qq[0]=qq[0].replace(/\s/g, '');
        
    }

    
    
        
       

    
  }
  await json.prefectures.push({

      Id: o+1,

      Prefecture:prefectureNames[o],

      Capital:resCap[0],

      TotalPopulation:Number(jajan[0].replace(",","."))*1000,

      TotalLandAreainKm2:Number(petitponey[0].replace(",",".")),

      PopulationDensityPerKm2:Number(cooper.replace(",",".")),

      GrossPrefecturalProductinMillionYen: Number(jamtresbon[0].replace(",",".")),

      AnnualIncreaseRateofGrossPrefecturalProductinPercentage:Number(lait[0].replace(",",".")),

      PrefecturalIncomeperPersoninYen:Number(chicken[0].replace(",",".")),

      AnnualIncreaseRateofCPI:Number(nekosan[0].replace(",",".")), 

      UnemploymentRateinPercentage:Number(kawasaki[0].replace(",",".")),

      MonthlyAverageofMaleWagesInYen:Number(aa[0].replace(",","."))*1000,

      MonthlyAverageofFemaleWagesInYen:Number(bb[0].replace(",","."))*1000,

      MonthlyLivingExpenditureperHouseholdInYen:Number(cc[0].replace(",","."))*1000,

      PassengerCarsforPrivateUseper1000Persons:Number(dd[0].replace(",",".")),

      TotalFertilityRateinChildrenPerWoman:Number(ee[0].replace(",",".")),

      CrudeDeathRatePer1000Persons:Number(ff[0].replace(",",".")),

      RateOfNaturalIncreaseOfPopulationInPercentage:Number(gg[0].replace(",",".")),

      ElementarySchoolPupilsPerTeacherInPersons:Number(hh[0].replace(",",".")),

      TotalRealLengthOfMajorRoadsInKmPerKm2:Number(pp[0].replace(",",".")),

      CrimeRatePer100000Persons:Number(qq[0].replace(",",".")),


    });
     }

     await browser.close();

     console.log(JSON.stringify(json,null,2));

     console.log("File written !");
})();









