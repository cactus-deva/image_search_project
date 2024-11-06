import {useState} from "react"

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState("")
    const handleFormSubmit = (event) => {
        event.preventDefault()
        onSubmit('candy')
    }

    const handleOnChange = (event) => {
        console.log("save this text to term state:", event.target.value);
        setTerm(event.target.value)
    }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleOnChange} />
      </form>
    </div>
  );
}

export default SearchBar;
