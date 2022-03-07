import React, { useState } from 'react'
import './calu.css';

const Calu = () => {
    const [books, setBooks] = useState(13);
    const [pens, setPens] = useState(10);
    const [notebooks, setNoteBooks] = useState(44);
    const [inkpens, setInkPens] = useState(78);
    const [total, setTotal] = useState(books+pens+notebooks+inkpens);
    const  handleItems = (value,setWhat)=>{
        if(setWhat === "books"){
            if(value === -1 && books === 0){
                return;
            }
            setBooks(books + value);
        }
        else if(setWhat === "pens"){
            if(value === -1 && pens === 0){
                return;
            }
            setPens(pens + value);
        }
        else if(setWhat === "inkPens"){
            if(value === -1 && inkpens === 0){
                return;
            }
            setInkPens(inkpens + value);
        }
        else if(setWhat === "noteBooks"){
            if(value === -1 && notebooks === 0){
                return;
            }
            setNoteBooks(notebooks + value);
        }
        setTotal(total+ value);
    }
  return (
    <>
        <div className="items">
            <span>Books :</span>
            <button className="addBook" onClick={() => handleItems(1,"books")}>
                +
            </button>
            <button className="remBook" onClick={() => handleItems(-1,"books")}>
                -
            </button>
            <span className="totalBooks">{ books }</span>
        </div>
        <div className="items">
            <span>Pens :</span>
            <button className="addPen" onClick={() => handleItems(1,"pens")}>
                +
            </button>
            <button className="remPen"onClick={() => handleItems(-1,"pens")}>
                -
            </button>
            <span className="totalPens">{ pens }</span>
        </div>
        <div className="items">
            <span>NoteBooks :</span>
            <button className="addNotebook" onClick={() => handleItems(1,"noteBooks")}>
                +
            </button>
            <button className="remNotebook" onClick={() => handleItems(-1,"noteBooks")}>
                -
            </button>
            <span className="totalNotebooks">{ notebooks }</span>
        </div>
        <div className="items">
            <span>InkPens :</span>
            <button className="addInkpen" onClick={() => handleItems(1,"inkPens")}>
                +
            </button>
            <button className="remInkpen" onClick={() => handleItems(-1,"inkPens")}>
                -
            </button>
            <span className="totalInkpens">{ inkpens }</span>
        </div>
        <div className="total">{total}</div> 
    </>
  )
}

export default Calu