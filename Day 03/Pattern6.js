let n = parseInt(prompt("Enter the number of rows"));
for(let row=1;row<=n;row++){
    for(let col=1;col<=n;col++){
        if(row==1){
            if(col==1 || col>=4){
               document.write("*")
            }else{
                // process.stdout.write(" ")
                document.write(" ")
            }

        }else if(row<=3){
            if(col==1 || col==4){
                // process.stdout.write("*")
                document.write("*")

            }else{
                // process.stdout.write(" ")
                 document.write(" ")
            }

        }else if(row==4){
            // process.stdout.write("*")
            document.write("*")

        }else if(row<=6){
            if(col==4 || col==7){
                // process.stdout.write("*")
                document.write("*")
            }else{
                // process.stdout.write(" ")
                document.write(" ")

            }

        }else if(row==7){
            if(col<=4 || col==7){
                // process.stdout.write("*")
                document.write("*")

            }
            else{
                // process.stdout.write(" ")
                document.write(" ")

            }

        }
    }
    console.log();
}