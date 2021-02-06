const express = require('express');
const router = express.Router();
const axios = require('axios');
const moment = require('moment');


const searchCompany = async(companyName)=>{
    try{

        const company = await axios.post('https://search.torre.co/people/_search/?offset=0&size=20&aggregate=true',{
            "organization":{"term":companyName}
        });

        return company.data;
    }catch(e){
        console.error('Error searching for the company');
        return false;
    }
};

const searchEachPerson = async(userName,companyName)=>{
    try{
        const person = await axios.get(`https://torre.bio/api/bios/${userName}`);

        if(person && person.data && person.data.experiences){
            const jobs = person.data.experiences;
            let companyXP = [];
            jobs.forEach(element => {
                let matchingName = element.organizations.find((el)=>el.name.toLowerCase().includes(companyName));
                if(matchingName)companyXP.push(element);
            });
            if(companyXP.length > 0){
                try{
                    let startDate = `${companyXP[0].fromMonth?companyXP[0].fromMonth:''} ${companyXP[0].fromYear?companyXP[0].fromYear:''}`;
                    let endDate = `${companyXP[0].toMonth?companyXP[0].toMonth:''} ${companyXP[0].toYear?companyXP[0].toYear:''}`;
                    
                    if(!endDate.trim())endDate = moment().format();
                    
                    let duration = moment(endDate).diff(startDate,'months');
    
                    return{xp:duration};
                }catch(e){
                    console.error('Error calculating dates');
                }
            }else{
                return {xp:"No XP"};
            }
        }else{
            throw new Error("User doesn't have experiences");
        }

    }catch(e){
        console.error('Error looking each person');
        return false;
    }
};

router.post('/',async (req,res)=>{

try{
    const companyName= req.body.companyName.toLowerCase();

    const companyInfo = await searchCompany(companyName);

    const userName = companyInfo.results[0].username;
    const user = await searchEachPerson(userName,companyName);


    res.send(user);
}catch(e){
    console.error(e);
}
});


module.exports = router;