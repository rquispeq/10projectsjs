"use client";

import { useState } from "react";

export default function LocationForm() {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
    <button type="button" className="change-location" onClick={ () => setOpen(true)}>
      change location
    </button>
    
    {<form className={"form_search " + (isOpen ? "active": "") }>
      <input className="txt_search" type="text" placeholder="Buscar ciudad" />
      <button type="submit">Buscar</button>
      <button className="close_search" type="button" onClick={ () => setOpen(false)}>x</button>

      <div className="city-list">
        <ul>
          <li>City 1, Country</li>
          <li>City 2, Country</li>
          <li>City 3, Country</li>
          <li>City 4, Country</li>
        </ul>
      </div>


    </form>}
    </>
  );
}
