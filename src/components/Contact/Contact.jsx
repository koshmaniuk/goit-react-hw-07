import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";

const Contact = ({ name, phoneNumber, contactId }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contact}>
      <div className={css.contactInfo}>
        <p className={css.contactInfotext}>
          <FaUser size="13px" /> {name}
        </p>
        <p className={css.contactInfotext}>
          <FaPhoneAlt size="13px" /> {phoneNumber}
        </p>
      </div>
      <button
        className={css.contactDeleteBtn}
        onClick={() => dispatch(deleteContact(contactId))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
