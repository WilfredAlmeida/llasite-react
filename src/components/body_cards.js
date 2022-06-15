import axios from "axios";
import React,{useState,useEffect} from "react";
import Card from "./card";

export default function BodyCards(props) {

    var searchText = props.searchText
    console.log("LOOK");
    console.log(searchText);

    // const url = "http://192.168.0.208:8745/getLaws"
    const url = "https://llasite.herokuapp.com/getLaws"
    // const url = "http://localhost:8745/getLaws"
    const [laws,setLaws] = useState([])

    

    useEffect(()=>{

        var payload=null;

        if(searchText!==""){
            payload={searchTags:[searchText]}
        }
        else{
            payload=null
        }

        axios.post(url,payload).then(r=>{
            setLaws(r.data)
        })
    },[url,searchText])

    
    

    if(laws){
        return(
            <>
            {
                laws.map(law=>{
                    return <Card lawData={law}/>
                })
            }
            </>
            
        )
    }
    else{
        return (
            <div></div>
        );
    }
}