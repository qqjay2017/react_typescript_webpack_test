import React, { useEffect, useState } from 'react'
import { sum } from './sum'

export default function App(){
  const res = sum(1,2)
  return <div>{res}</div>
}