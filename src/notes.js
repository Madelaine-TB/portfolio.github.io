import { useState, useEffect } from 'react';
  import produce from 'immer';
  import './notes.css'

  const Notes = props => props.data.map(note => <div><ul><li>{note.text}</li></ul></div>);

  export default () => {
    const initialData = [{ text: 'Loading Notes ... ' }];
    const [data, setData] = useState(initialData);

    const handleClick = () => {
      const text = document.querySelector('#noteinput').value.trim();
      if (text) {
        const nextState = produce(data, draftState => {
          draftState.push({ text });
        });
        document.querySelector('#noteinput').value = '';

        if (typeof window !== 'undefined') {
          localStorage.setItem('data', JSON.stringify(nextState));
        }

        setData(nextState);
      }
    };

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const getData = localStorage.getItem('data');

        if (getData !== '' && getData !== null) {
          return setData(JSON.parse(getData));
        }
        return setData([]);
      }
    }, 0);

    return (
      <>
      <div  className='notesContainer'>
        <div  className='notesList'>
            <Notes data={data} />
         </div>
      <div className='inputs'>
        <input id="noteinput" className='notesInput' type="text" maxLength={500} placeholder="Enter a new note" />
        <button onClick={() => handleClick()} className='addBtn'>Add</button>
      </div>
    </div>
      </>
    );
  };