let i = 1000;


do{
    
if(i %3 === 0){
        console.log(`${i} FIZZ BUZZ`)
    }else if( i % 3 === 0) {
        console.log(`${i} fizz`)
    }else if(i % 5 === 0){
        console.log(`${i} buzz`)
    }

    i++; //Incremento
}while(i < 10);//condicion