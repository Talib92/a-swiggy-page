import { useEffect, useState } from "react"

const useOnlineStatus = () =>{
    const [onlineStatus, setOnlineStstus] =  useState(true)


    useEffect(() =>{
        window.addEventListener("offline", () =>{
            setOnlineStstus(false);
        })
    
        window.addEventListener("online", () =>{
            setOnlineStstus(true);
        })
    },[])

    return onlineStatus
} 

export default useOnlineStatus;