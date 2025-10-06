const getStoredBook = () =>{
    const storedBookSTR = localStorage.getItem("readList");
    if(storedBookSTR){
        const stordBookData = JSON.parse(storedBookSTR);
        return stordBookData;
    }
    else{
        return [];
    }
}

const addToStoredDB = (id) =>{
    const storedBookData = getStoredBook();
    if(storedBookData.includes(id)){
        alert("This Id Already Exist")
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData)
        localStorage.setItem('readList',data)
        
    }
}

export {addToStoredDB,getStoredBook};