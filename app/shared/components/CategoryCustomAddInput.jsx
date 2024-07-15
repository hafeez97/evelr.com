"use client"
import React, { useEffect } from 'react';
import { CreateCategoryAction } from "@/app/shared/actions/categoriesAction";
import {useFormState} from "react-dom"; // Updated to use `useFormStatus`

const CategoryCustomAddInput = () => {
    const [state, formAction] = useFormState(CreateCategoryAction, '/create-category');

    // useEffect(() => {
    //     console.log(state);
    //     if (state.success) {
    //         console.log('Category Created');
    //     }
    // }, [state]);

    return (
        <div className="col-12 text-center">
            <form action={formAction}>
                <input
                    type="text"
                    className="new-listing-cat-input"
                    placeholder="Add Custom Category"
                    name="title"
                    id="title"
                />
                {/*<input type="submit" hidden />*/}
                <button hidden type="submit">Add Category</button>
            </form>
        </div>
    );
};

export default CategoryCustomAddInput;
