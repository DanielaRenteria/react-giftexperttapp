import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    // const handleAdd = () => {
    //     //setCategories([...categories, 'Daniela']);
    //     setCategories(cate => [...cate, 'Daniela'])
    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />



            <ol>
                {
                    categories.map(category => (
                        <GiftGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
