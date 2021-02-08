const axios = require('axios');


export const getCompanies = async (name)=>{
    try{
        let names = [];

        const companies = await axios.get(`https://torre.co/api/organizations?q=${name}&limit=5`);

        if(companies && companies.data){
            names = companies.data.map((el)=>el.name);
        }
        return {names,all:companies.data};
    }catch(e){
        return {type:'error',msg:'error getting companies'};
    }
};

export const getUsers = async (name)=>{
    try{
        let names = [];
        const users = await axios.post(`https://search.torre.co/people/_search/?size=5&lang=es&aggregate=false&offset=0`,{"name":{"term":name}});
        if(users && users.data && users.data.results){
            names = users.data.results.map((el)=>el.username);
        }
        return {names, all:users.data.results};
    }catch(e){
        return {type:'error',msg:'error getting users'};
    }
};


export const analize = async (company,user) =>{
    try{
        const result = await axios.post('/api/analysis/',{
            companyName: company,
            userName: user
        });

        return result;
    }catch(e){
        return {type:'error',msg:'error getting users'};
    }
};