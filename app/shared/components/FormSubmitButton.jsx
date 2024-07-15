import React, {useEffect} from 'react'
import { useFormStatus} from 'react-dom'


const FormSubmitButton = ({labelPending, label}) => {
    const { pending } = useFormStatus()

    return (
        <>
            <button
                type="submit"
                className="btn btn-primary"
                disabled={pending}
            >
                {pending ? labelPending : label}
            </button>
        </>

    )
}
export default FormSubmitButton
