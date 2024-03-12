import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";
import { filteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filteredContacts);
  const { loading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
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
    </div>
  );
};

export default ContactList;
