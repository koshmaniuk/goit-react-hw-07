import "./App.css";
import ContactList from "./ContactList/ContactList.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
