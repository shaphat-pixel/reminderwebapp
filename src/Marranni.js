import React, {useState, useEffect} from 'react'
import './Marranni.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';



function Marranni() {

    const birthday_url ="https://event-reminder-django.herokuapp.com/api/birthday-create"
    const [birthdaydata, setBirthdaydata] = useState({
        name: "",
        phone_number : "",
        time : "",
        msg: ""
    })


    function birthday_submit(e){
        e.preventDefault()
        Axios.post(birthday_url,{
            name: birthdaydata.name,
            phone_number: birthdaydata.phone_number,
            time: birthdaydata.time,
            msg: birthdaydata.msg
        })
        .then(res=>{
            console.log(res.birthdaydata)

            if (res.status = 200){
            alert("Your reminder has been created!")
        } else{
            alert("Reminder was unsuccessful. Ensure that time is 60+ minutes from current time.")
        }
        })
        

    }



    function birthday_handle(e){
        const newbirthdaydata={...birthdaydata}
        newbirthdaydata[e.target.id] = e.target.value
        setBirthdaydata(newbirthdaydata)
        console.log(newbirthdaydata)

    }



    const marranni_url ="https://event-reminder-django.herokuapp.com/api/marranni-create"
    const [marrannidata, setMarrannidata] = useState({
        name: "",
        phone_number : "",
        time : "",
        msg: ""
    })


    function marranni_submit(e){
        e.preventDefault()
        Axios.post(marranni_url,{
            name: marrannidata.name,
            phone_number: marrannidata.phone_number,
            time: marrannidata.time,
            msg: marrannidata.msg
        })
        .then(res=>{
            console.log(res.marrannidata)
        })

    }



    function marranni_handle(e){
        const newmarrannidata={...marrannidata}
        newmarrannidata[e.target.id] = e.target.value
        setMarrannidata(newmarrannidata)
        console.log(newmarrannidata)

    }



    const relanni_url ="https://event-reminder-django.herokuapp.com/api/relanni-create"
    const [relannidata, setRelannidata] = useState({
        name: "",
        phone_number : "",
        time : "",
        msg: ""
    })


    function relanni_submit(e){
        e.preventDefault()
        Axios.post(relanni_url,{
            name: relannidata.name,
            phone_number: relannidata.phone_number,
            time: relannidata.time,
            msg: relannidata.msg
        })
        .then(res=>{
            console.log(res.relannidata)
        })

    }



    function relanni_handle(e){
        const newrelannidata={...relannidata}
        newrelannidata[e.target.id] = e.target.value
        setRelannidata(newrelannidata)
        console.log(newrelannidata)

    }




    const mothersday_url ="https://event-reminder-django.herokuapp.com/api/mothersday-create"
    const [mothersdaydata, setMothersdaydata] = useState({
        name: "",
        phone_number : "",
        time : "",
        msg: ""
    })


    function mothersday_submit(e){
        e.preventDefault()
        Axios.post(mothersday_url,{
            name: mothersdaydata.name,
            phone_number: mothersdaydata.phone_number,
            time: mothersdaydata.time,
            msg: mothersdaydata.msg
        })
        .then(res=>{
            console.log(res.mothersdaydata)
        })

    }



    function mothersday_handle(e){
        const newmothersdaydata={...mothersdaydata}
        newmothersdaydata[e.target.id] = e.target.value
        setMothersdaydata(newmothersdaydata)
        console.log(newmothersdaydata)

    }




  return (
    <div className='Marranni_container'>
    

    <div className = 'card'>
    
    <div className = 'cardContent'>
    <h6>BIrth Day 🎂</h6>
       <form  onSubmit = {(e)=> birthday_submit(e)}>

       <input onChange={(e)=>birthday_handle(e)} id="name" value={birthdaydata.name} placeholder="name" type="text" required></input>
       <input onChange={(e)=>birthday_handle(e)} id="phone_number" value={birthdaydata.phone_number} placeholder="e.g +233551911595" type="text" required></input>
       <input onChange={(e)=>birthday_handle(e)} id ="time" value={birthdaydata.time} placeholder="date and time" type="datetime-local" required></input>
       <input onChange={(e)=>birthday_handle(e)} id="msg" value={birthdaydata.msg} placeholder="message" type="text" required></input>
        <input type = "submit" value = "submit"/>

        </form> 

 
           
           
      
        

    </div>
      


    </div>

    <div className = 'card'>
    <div className = 'cardContent'>
    <h6>Marriage Anniversay <span role="img" aria-label="dog">👰</span> </h6>
    
       <form  onSubmit = {(e)=> marranni_submit(e)}>

       <input onChange={(e)=>marranni_handle(e)} id="name" value={marrannidata.name} placeholder="name" type="text" required></input>
       <input onChange={(e)=>marranni_handle(e)} id="phone_number" value={marrannidata.phone_number} placeholder="e.g +233551911595" type="text" required></input>
       <input onChange={(e)=>marranni_handle(e)} id ="time" value={marrannidata.time} placeholder="date and time" type="text" required></input>
       <input onChange={(e)=>marranni_handle(e)} id="msg" value={marrannidata.msg} placeholder="message" type="text" required></input>
        <input type = "submit" value = "submit"/>

        </form> 

 
           
           
      
        

    </div>

    </div>

    <div className = 'card'>
    <div className = 'cardContent'>
    <h6>Relationship Anniversary💖</h6>
       <form  onSubmit = {(e)=> relanni_submit(e)}>

       <input onChange={(e)=>relanni_handle(e)} id="name" value={relannidata.name} placeholder="name" type="text" required></input>
       <input onChange={(e)=>relanni_handle(e)} id="phone_number" value={relannidata.phone_number} placeholder="e.g +233551911595" type="text" required></input>
       <input onChange={(e)=>relanni_handle(e)} id ="time" value={relannidata.time} placeholder="date and time" type="text" required></input>
       <input onChange={(e)=>relanni_handle(e)} id="msg" value={relannidata.msg} placeholder="message" type="text" required></input>
        <input type = "submit" value = "submit"/>

        </form> 

 
           
           
      
        

    </div>





    </div>

    <div className = 'card'>
    <div className = 'cardContent'>
    <h6>Mothers Day👩‍👧</h6>
       <form  onSubmit = {(e)=> mothersday_submit(e)}>

       <input onChange={(e)=>mothersday_handle(e)} id="name" value={mothersdaydata.name} placeholder="name" type="text" required></input>
       <input onChange={(e)=>mothersday_handle(e)} id="phone_number" value={mothersdaydata.phone_number} placeholder="e.g +233551911595" type="text" required></input>
       <input onChange={(e)=>mothersday_handle(e)} id ="time" value={mothersdaydata.time} placeholder="date and time" type="text" required></input>
       <input onChange={(e)=>mothersday_handle(e)} id="msg" value={mothersdaydata.msg} placeholder="message" type="text" required></input>
        <input type = "submit" value = "submit"/>

        </form> 

 
           
           
      
        

    </div>





    </div>

    
        


    </div>

    
  )
} 
export default Marranni