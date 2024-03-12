import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";
import { filteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactListContainer}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contactId={contact.id}
          name={contact.name}
          phoneNumber={contact.phone}
        />
      ))}
    </ul>
  );
};

export default ContactList;
