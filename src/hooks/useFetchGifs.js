import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";


export const useFetchGifs = ( category ) => {
  
    const [state, setState] = useState({
        data: [],
        loading:true
    });
  
    //solo quiero que se ejecute esta instrucción cuando el componente es renderizado por primera vez.
    useEffect( () => {
        getGifs( category )
            .then( imgs => {

                setTimeout(() => {
                    console.log(imgs);
                    setState({
                        data: imgs,
                        loading: false
                    });
                }, 3000); 

            });            
    }, [ category ]);

    return state; // { data:[], loading:true };
}


