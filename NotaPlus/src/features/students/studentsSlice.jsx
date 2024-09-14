import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    {
      id: "1",
      name: "Carlos Marquez",
      noteOne: 5,
      noteTwo: 4.3,
      noteThree: 4,
      noteFour: 3.9,
      stateStudent: "Aprobado",
    },
    {
      id: "2",
      name: "Maria Luisa",
      noteOne: 3.9,
      noteTwo: 2.6,
      noteThree: 3.9,
      noteFour: 3.7,
      stateStudent: "Aprobado",
    },
    {
      id: "3",
      name: "Mariana Gomez",
      noteOne: 3,
      noteTwo: 3.5,
      noteThree: 4,
      noteFour: 3.3,
      stateStudent: "Aprobado",
    },
    {
      id: "5",
      name: "Andres Steeven",
      noteOne: 4,
      noteTwo: 4.3,
      noteThree: 4,
      noteFour: 3.9,
      stateStudent: "Aprobado",
    },
    {
      id: "6",
      name: "Mateo Muñoz",
      noteOne: 2,
      noteTwo: 1,
      noteThree: 3,
      noteFour: 2.5,
      stateStudent: "desaprobado",
    },
    {
      id: "7",
      name: "Carlos Marquez",
      noteOne: 2,
      noteTwo: 2,
      noteThree: 2.5,
      noteFour: 3,
      stateStudent: "desaprobado",
    },
    {
      id: "8",
      name: "Luciana Marin",
      noteOne: 3.5,
      noteTwo: 5,
      noteThree: 3.4,
      noteFour: 4.4,
      stateStudent: "Aprobado",
    },
    {
      id: "9",
      name: "Luciana Marin",
      noteOne: 3.5,
      noteTwo: 5,
      noteThree: 3.4,
      noteFour: 4.4,
      stateStudent: "Aprobado",
    },
    {
      id: "10",
      name: "Pepe Lopez",
      noteOne: 3.5,
      noteTwo: 5,
      noteThree: 3.4,
      noteFour: 4.4,
      stateStudent: "Aprobado",
    },
  ],
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    showStudents(state, action) {
      state.students = [...state.students, action.payload];
    },
  },
});
export const { showStudents } = studentsSlice.actions;
export default studentsSlice.reducer;
