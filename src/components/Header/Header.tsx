
"use client"
import { useSelector } from 'react-redux'
import styles from './Header.module.css'
import React from 'react'

export default function Header() {
  // const { rows, columns }  = useSelector((state: any) => state.details)
  return (
    <div className={styles.header}>
        <label>Rows:</label>
        <input type="number"></input>
        <label>Columns:</label>
        <input type="number" ></input>
    </div>
  )
}