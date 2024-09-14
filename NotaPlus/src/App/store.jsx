import {configureStore} from '@reduxjs/toolkit'
import studentsReducer from '../features/students/studentsSlice'
import subjectReducer from '../features/students/subject/subjectSlice'

export const store = configureStore({
    reducer:{
      students: studentsReducer,
      subjects: subjectReducer
    },
    devTools: true
})


export default store