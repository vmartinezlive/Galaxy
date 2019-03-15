export class GalaxyAge{day, month
  constructor(){
    this.day = day;
    this.year = year;
  }

  stringToObject(string){
    const parseDate= Date.parse(string);
    const dateObj= new Date(parseDate);
    this.dateObject=dateObj;

  }

  findDay(){
    const numberDay=this.dateObject.getDay();
    const day=this.dayArray[numberDay+1];
    return day;
  }

}
