// src/GenerateIDOnRefresh.js

import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { database } from '../FIrebaseConfig';


const GenerateIDOnRefresh = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.substring(1); // Remove the # from the hash

    if (!hash) {
      // If no ID in the URL, generate a new one
      const newId = uuidv4();
      navigate(`#${newId}`, { replace: true });
    } else {
      // Check if the ID already exists in Firebase
      database.ref(`ids/${hash}`).once('value').then(snapshot => {
        if (!snapshot.exists()) {
          // If the ID does not exist, save it to Firebase
          database.ref(`ids/${hash}`).set(true);
        }
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