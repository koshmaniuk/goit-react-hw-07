import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { selectNameFilter } from "./filtersSlice";

const handlePending = (state) => {
  state.loading = true;
  state.error = false;
};

const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;

// export const filteredContacts = (state) => {
//   console.log("hello");
//   const contacts = selectContacts(state);
//   const filter = selectNameFilter(state);
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export const filteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filterName) => {}
);
