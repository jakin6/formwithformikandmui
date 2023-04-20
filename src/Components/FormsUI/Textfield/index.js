import React from 'react'

import {useField} from 'formik'
import { TextField } from '@mui/material'

const TextfieldWrapper = ({name,...otherProps})=>{
    const [field,meta]=useField(name)
    const configTextfield={
        ...otherProps,
        fullWidth:true,
        variant:'outlined'
    }
    if(meta && meta.touched && meta.error){
        configTextfield
    }
    return(
        <TextField {...configTextfield} />
    )
}
export default TextfieldWrapper
