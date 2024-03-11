import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { fetchContacts, deleteContact, addContact } from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state, action) => {})
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {})
      .addCase(deleteContact.pending, (state, action) => {})
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {}),
});

const persistConfig = {
  key: "contacts",
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
