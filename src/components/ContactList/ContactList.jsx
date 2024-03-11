import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactListContainer}>
      {filteredContacts.map((contact) => (
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
