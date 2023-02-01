var n = 12 ;
for(i=2; i<n-1; i++){
    console.log(i, n%i);
    if(n  % i == 0){
        console.log('is not a prime number');
        break;
    }

}