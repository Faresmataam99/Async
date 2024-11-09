 delay = (arr) => {
    return new Promise(resolve => setTimeout(resolve, arr));
  }
  async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);        
    }
  }
  const arr =([1, 2, 3, 4, 5]);

 //second task
   data =()=> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: "Sample API data" });
      }, 2000); 
    });
  }
  async function awaitCall() {
    console.log("Fetching data from API...");
    const response = await fetchDataFromAPI();
    console.log("Data received:", response.data);
  }
  awaitCall();


  //third task
  seconddata =()=> {
    return new promise ((resolve,reject)=>{
        setTimeout(()=>{
            const success = Math.random() > 0.5;
            if(success) {
                resolve ({data})
            }
            else{
                reject('failed to load')
            }
        }, 2000)

    });
  }


  async() =>{
    console.log('fetching data');
    try{
        const response = await seconddata ();
        console.log("data recieved",response.data)
    }
    catch(err){
        console.log(err)
    }
  }
  awaitCall()
