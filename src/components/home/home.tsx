"use client";
import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Button variant="outline">Button</Button>
      <Input />
      <h1 className='roboto-thin'>Welcome to My Home Page</h1>
    </div>
  );
};

export default Home;
