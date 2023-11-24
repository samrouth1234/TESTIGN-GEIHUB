"use client"

import Card from '@/components/Card';
import React from 'react';
import { useState,useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState();
  // This useEffect will run when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.escuelajs.co/api/v1/products?limit=20&offset=1');
      const newData = await res.json();
      console.log(newData)
      setData(newData);
    };

    // If there's no data, fetch it
    if (!data) {
      fetchData();
    }
  }, []);

  // If there's no data, show a loading message
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <main className="flex min-h-screen flex-wrap items-center justify-evenly p-24">
     
     {data.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            images={product.images}
          />
        ))}
    </main>
  );
}


