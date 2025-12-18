export default function handler(request, response) {
  if (request.method === 'POST') {
    const { email } = request.body;
    
    // In a real production environment with persistent storage access, 
    // we would write this to a database or blob storage.
    // On Vercel, the filesystem is ephemeral, so we log it to stdout.
    // The user can view these in the Vercel Function Logs.
    const timestamp = new Date().toISOString();
    console.log(`NEW_SIGNUP,${email},${timestamp}`);

    return response.status(200).json({ status: 'success', message: 'Email subscribed' });
  } else {
    return response.status(405).json({ error: 'Method not allowed' });
  }
}
