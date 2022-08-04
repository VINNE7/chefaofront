export const segmentsArray = [
    {value:'bar', label:"Bar"},
    {value:'snackBar', label:'Lanchonete'},
  ].sort((a,b) => {
    if(a.label.toLowerCase() > b.label.toLowerCase()){
      return 1;
    }
    if(a.label.toLowerCase() < b.label.toLowerCase()){
      return -1;
    }

    return 0;
  })
  