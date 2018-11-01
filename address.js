 class address extends React.Component{
        render(){    
         var houseno = React.createElement("input",{id:"houseno"},null);
         var street = React.createElement("input",{id:"street"},null);
         var post = React.createElement("input",{id:"post"},null);
         var city = React.createElement("input",{id:"city"},null);

         return React.createElement("div",null,houseno,street, post, city);

        }
    }    