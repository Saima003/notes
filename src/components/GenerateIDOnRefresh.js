// src/GenerateIDOnRefresh.js

import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { db_database } from '../FIrebaseConfig';
const GenerateIDOnRefresh = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.substring(1); // Remove the # from the hash
    console.log('Current hash:', hash);

    if (!hash) {
      // If no ID in the URL, generate a new one
      const newId = uuidv4();
      console.log('Generated new ID:', newId);
      navigate(`#${newId}`, { replace: true });
    } else {
      // Check if the ID already exists in Firebase
      db_database.ref(`ids/${hash}`).once('value').then(snapshot => {
        if (!snapshot.exists()) {
          // If the ID does not exist, save it to Firebase
          console.log('ID does not exist in Firebase. Saving new ID:', hash);
          db_database.ref(`ids/${hash}`).set(true);
        } else {
          console.log('ID already exists in Firebase:', hash);
        }
      }).catch(error => {
        console.error('Error checking ID in Firebase:', error);
      });
    }
  }, [navigate, location]);

  return (
    <div>
      <h1>Unique ID in URL</h1>
      <p>Check the URL for your unique ID!</p>
    </div>
  );
};

export default GenerateIDOnRefresh;