const express = require('express');
const router = express.Router();
const axios = require('axios');
const moment = require('moment');
const aiCompany = require('../../tensorflow/evaluateCompany');


const searchCompany = async(companyName,size=50)=>{
    try{

        const company = await axios.post(`https://search.torre.co/people/_search/?offset=0&size=${size}&aggregate=true`,{
            "organization":{"term":companyName}
        });

        return company.data.results;
    }catch(e){
        console.error('Error searching for the company');
        return false;
    }
};

const personalityTraits = (pt) =>{
    let general = {};

    if(pt && pt.analyses && pt.analyses.length > 0){
        pt.analyses.forEach(el=>{
            general[el.groupId]=el.analysis;
        });
    }

    return general;
};

const searchEachPerson = async(userName,companyName)=>{
    try{
        const person = await axios.get(`https://torre.bio/api/bios/${userName}`);

        if(person && person.data && person.data.experiences){
            let monthsOfXP = 0;
            let trainingPeriod= false;
            const jobs = person.data.experiences;
            let companyXP = [];
            jobs.forEach(element => {
                let matchingName = element.organizations.find((el)=>el.name.toLowerCase().includes(companyName));
                if(matchingName)companyXP.push(element);
            });
            if(companyXP.length > 0){
                try{
                    let startDate = new Date(`${companyXP[0].fromMonth?companyXP[0].fromMonth:''} 1 ${companyXP[0].fromYear?companyXP[0].fromYear:''}`);
                    let endDate;
                    if(!companyXP[0].toMonth || !companyXP[0].toYear){
                        trainingPeriod= true;
                        endDate =new Date(Date.now());
                    }else{
                        endDate =new Date(`${companyXP[0].toMonth?companyXP[0].toMonth:''} 1 ${companyXP[0].toYear?companyXP[0].toYear:''}`);
                    }
                    let duration = moment(endDate.toISOString()).diff(startDate.toISOString(),'days');
                    if(duration >= 3 && trainingPeriod)trainingPeriod=false;
    
                    monthsOfXP = duration;

                    if(monthsOfXP > 0 && !trainingPeriod){
                        let pt = personalityTraits(person.data.personalityTraitsResults);
                        if(Object.keys(pt).length > 0){
                            return {...pt,days:monthsOfXP};
                        }else{
                            return {};
                        }
                    }else{
                        return {};
                    }
                }catch(e){
                    console.error('Error calculating dates: ',e);
                    return {};
                }
            }else{
                console.error('No Xp');
                return {};
            }
        }else{
            console.error("User doesn't have experiences");
            return {};
        }

    }catch(e){
        console.error('Error looking each person',e);
        return {};
    }
};

router.post('/',async (req,res)=>{
let dataCollection ={};
try{
    const companyName= req.body.companyName.toLowerCase();
    const size = req.body.size;

    dataCollection.name = companyName;
    dataCollection.data = [];

    const companyInfo = await searchCompany(companyName,size);
    if(companyInfo.length > 0){
        for(const employee of companyInfo){
            const userName = employee.username;
            const user = await searchEachPerson(userName,companyName);
            if(Object.keys(user).length > 1){
                dataCollection.data.push(user);
            }
        }
        aiCompany(dataCollection);
        res.send(dataCollection);
    }else{
        res.send('no employees or company');
    }


}catch(e){
    console.error(e);
}
});


module.exports = router;