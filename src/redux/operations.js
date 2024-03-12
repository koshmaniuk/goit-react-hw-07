import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await axios.get(
    "https://65ee4e5c08706c584d9b3d00.mockapi.io/contacts"
  );
  return response.data;
});

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const response = await axios.post(
      "https://65ee4e5c08706c584d9b3d00.mockapi.io/contacts",
      contact
    );
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    const response = await axios.delete(
      `https://65ee4e5c08706c584d9b3d00.mockapi.io/contacts/${contactId}`
    );
    return response.data;
  }
);
