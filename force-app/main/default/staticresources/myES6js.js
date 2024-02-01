/**
 * es6Anthems.js
 */
(function(w) {


  const getData = () => {
    return {
      "Canada (English)": {
        title: "O Canada",
        lyrics: `O Canada!
      Our home and native land!
      True patriot love in all of us command.
      With glowing hearts we see thee rise,
      The True North strong and free!
      From far and wide,
      O Canada, we stand on guard for thee.
      God keep our land glorious and free!
      O Canada, we stand on guard for thee.`,
      },
      "Canada (Français)": {
        title: "Ô Canada",
        lyrics: `Ô Canada!
      Terre de nos aïeux,
      Ton front est ceint de fleurons glorieux!
      Car ton bras sait porter l'épée,
      Il sait porter la croix!
      Ton histoire est une épopée
      Des plus brillants exploits.
      Et ta valeur, de foi trempée,
      𝄆 Protégera nos foyers et nos droits.`,
      },
      "United States of America (English)": {
        title: "Star Spangled Banner",
        lyrics: `O! say can you see by the dawn's early light,
      ⁠What so proudly we hailed at the twilight's last gleaming,
      Whose broad stripes and bright stars through the perilous fight,
      ⁠O'er the ramparts we watch'd, were so gallantly streaming?
      And the Rockets' red glare, the Bombs bursting in air,
      Gave proof through the night that our Flag was still there;
      ⁠O! say does that star-spangled Banner yet wave,
      ⁠O'er the Land of the free and the home of the brave?`,
      },
      "Mexico (Español)": {
        title: "Mexicanos, al grito de guerra",
        lyrics: `Mexicanos, al grito de guerra
      el acero aprestad y el bridón.
      Y retiemble en sus centros la Tierra,
      al sonoro rugir del cañón.
      
      
      Ciña ¡Oh Patria! tus sienes de oliva
      de la paz el arcángel divino,
      que en el cielo tu eterno destino
      por el dedo de Dios se escribió.
      Mas si osare un extraño enemigo
      profanar con su planta tu suelo,
      piensa ¡oh Patria querida! que el cielo
      un soldado en cada hijo te dio.
      
      ¡Guerra, guerra sin tregua al que intente
      de la patria manchar los blasones!
      ¡guerra, guerra! los patrios pendones
      en las olas de sangre empapad.
      ¡Guerra, guerra! en el monte, en el valle,
      los cañones horrísonos truenen,
      y los ecos sonoros resuenen
      con las voces de ¡Unión! ¡Libertad!.`,
      },
    };
  }
  const getCountries = () => {
    const countryArray = [];
    for (const [key, value] of Object.entries(getData())) {
      countryArray.push(key);
    }
    return countryArray;
  };
  
  const getRandomCountry = () => {
    const count = Object.keys(getData()).length;
    const randNumber = Math.round(Math.random() * count);
    return Object.keys(getData())[randNumber];
  };
  
  const getTitles = () => {
    const titles = [];
    for (const [key, value] of Object.entries(getData())) {
      titles.push(value.title);
    }
    return titles;  
  };
  
  const getAnthem = async (country, callback) => {
      setTimeout(() => {
        callback(getData()[country].lyrics);
      }, 2000);
  };
  
  var anthemMethods = {
    "getAnthem":getAnthem,
    "getTitles":getTitles,
    "getCountries":getCountries,
    "getRandomCountry": getRandomCountry,
    "getData": getData
  };
  
  w.anthems = anthemMethods;
})(window);