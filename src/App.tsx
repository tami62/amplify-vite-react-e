import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';


const client = generateClient<Schema>();

function App() {
  

  useEffect(() => {
    // Subscribe to the Todo query to keep the state updated
    const subscription = client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });

    // Cleanup the subscription on component unmount
    return () => subscription.unsubscribe();
  }, []);

  // Function to create a new Todo
  

  return (
    <main>
     

      {/* File uploader for image uploads */}
      <FileUploader
        acceptedFileTypes={['image/*']} // Only accept image files
        path={({ identityId }) => `protected/${identityId}/`} // Path where files will be stored
        maxFileCount={1} // Allow only one file
        isResumable // Enable resumable uploads
      />
    </main>
  );
}

export default App;
