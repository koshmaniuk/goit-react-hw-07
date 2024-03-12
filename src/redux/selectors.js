import { createSelector } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filter.name;

export const selectContacts = (state) => state.contacts.items;

export const filteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
