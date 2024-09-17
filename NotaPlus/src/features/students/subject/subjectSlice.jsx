import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subject: [
    {
      id: "1",
      subject: "Inglés I",
      group: "Grupo 1A",
    },
    {
      id: "2",
      subject: "Inglés II",
      group: "Grupo 2A",
    },
    {
      id: "3",
      subject: "Lengua I",
      group: "Grupo 1A",
    },
    {
      id: "4",
      subject: "Lengua II",
      group: "Grupo 2A",
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
