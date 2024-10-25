//  AddBootstrap.js
"use client";

import { useEffect } from "react";
if (typeof document !== 'undefined') {
  // Your code that uses the document object

export default function AddBootstrap()
{
    useEffect(()=>{
        import( "bootstrap/dist/js/bootstrap.bundle.js")
    },[])
    return <></>
}
}
