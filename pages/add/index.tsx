import React, { useState } from 'react';
import styles from './add.module.scss'
interface Topic {
  id: number;
  entryTitel: string;
  context: string;
}

const JournalForm  = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [topics, setTopics] = useState<Topic[]>([]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleAddTopic = () => {
    const newTopic: Topic = {
      id: topics.length + 1,
      entryTitel: title,
      context: description
    };
    setTopics([...topics, newTopic]);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add journal</h2>
      <div style={{padding:"0 3%"}}>
        <label>
           Titel:
          <input type="text" value={title} onChange={handleTitleChange}   style={{color:"black",width:"100%"}}      placeholder='Enter journal entry title'
/>
        </label>
      </div>
      <div style={{padding:"0 3%"}}>
        <label>
          Description:
          <textarea
           style={{color:"black",width:"100%"}}
        rows={9} 
        cols={45} 
        value={description}
        maxLength={500}
        placeholder='Enter journal entry description'
        onChange={handleDescriptionChange}
      />
         
        </label>
      </div>
      <button onClick={handleAddTopic}>Add Topic</button>
      <h2>Topics</h2>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>
            <strong>{topic.entryTitel}</strong>: {topic.context}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JournalForm;
