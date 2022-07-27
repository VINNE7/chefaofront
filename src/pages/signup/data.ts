export const segmentsArray = [
    {value:'bar', label:"Bar"},
    {value:'snackBar', label:'Lanchonete'},
    {value:'pizzeria', label:'Pizzaria'},
    {value:'restaurant', label:'Restaurante'},
  ].sort((a,b) => {
    if(a.label.toLowerCase() > b.label.toLowerCase()){
      return 1;
    }
    if(a.label.toLowerCase() < b.label.toLowerCase()){
      return -1;
    }

    return 0;
  })
  