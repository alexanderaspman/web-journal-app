import React, { useState } from 'react';
import styles from './add.module.scss'
import Link from 'next/link';
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
    <div className={styles.container}>
      <h1 className={styles.heading__light}>Add journal</h1><div style={{backgroundColor:"#B26161",    padding:" 0 16px 16px 16px"
}}>
      <div className={styles.form__row }>
        <label>Title:</label>
          <input type="text" style={{width:"100%",backgroundColor:"#DDCCCC"}} value={title} onChange={handleTitleChange} placeholder='Enter journal entry title'/>
      </div>
      </div>
      <div style={{padding:" 0 16px"}}>
      <div className={styles.form__row}>
        <label>Description:</label>
          <textarea
        rows={9} 
        cols={45} 
        value={description}
        maxLength={500}
        placeholder='Enter journal entry description'
        onChange={handleDescriptionChange}
      />
      </div>
      </div>
      <div className='flex-1 justify-end	' style={{width:"100%",backgroundColor:"#B26161",padding:"55px 0",position:"fixed",bottom:"0px"}}>
      <Link href={`home`}><button className={styles.button__back} onClick={handleAddTopic}>To list</button> </Link> <button className={styles.button__add} onClick={handleAddTopic}>Add entry</button>
      </div>
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