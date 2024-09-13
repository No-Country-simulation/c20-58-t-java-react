import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subject: [
    {
      id: "1",
      subject: "Lengua",
      group: "Grupo 1A",
    },
    {
      id: "2",
      subject: "Matematicas",
      group: "Grupo 5A",
    },
    {
      id: "3",
      subject: "Ciencias",
      group: "Grupo 2A",
    },
    {
      id: "4",
      subject: "Filosofia",
      group: "Grupo 4A",
    },
  ],
};

const subjectSlice = createSlice({
  name: "subjects",
  initialState,
  reducers: {
    showSubjectSlice(state, action) {
      state.subject = [...state.subject, action.payload];
    },
  },
});

export const { showSubjectSlice } = subjectSlice.actions;
export default subjectSlice.reducer;
