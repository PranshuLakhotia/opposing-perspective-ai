


import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Typography, TextField, Button, Card, CardContent, Box, Stack } from '@mui/material';
import ChatMessage from '../components/ChatMessage';
import Navbar from '../components/Navbar';

const Article = () => {
  // const [searchParams] = useSearchParams();
  // const url = searchParams.get('url');
  const [message, setMessage] = useState('');
  const [url,setUrl] = useState('');

  const summary = "This is a placeholder for the article summary. The actual summary will be generated based on the provided URL using AI analysis.";
  const chatHistory = [
    { isAI: true, message: "Hello! I've analyzed the article. What would you like to know about it?" },
  ];

  const handleSubmit = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <>
      <Navbar />
    <Box sx={{
        bgcolor: '#111827', 
        //background: 'linear-gradient(90deg, rgba(3, 0, 40, 1) 0%, rgba(0, 41, 122, 1) 50%, rgba(0, 77, 135, 1) 100%)', // Dark blue gradient
        background: 'linear-gradient(90deg, rgba(7, 0, 40, 1) 0%, rgba(23, 6, 66, 1) 50%, rgba(19, 0, 47, 1) 100%)', // Very
        color: 'white', 
        minHeight: '100vh', 
        py: 6
      }}>
        <Container maxWidth="lg">
          <Stack spacing={4} direction={{ xs: 'column', md: 'row' }}>
            {/* Summary Section */}
            <Card sx={{
              flex: 1, 
              bgcolor:  'linear-gradient(45deg, rgba(7, 0, 40, 0.95) 0%, rgba(23, 6, 66, 0.95) 50%, rgba(19, 0, 47, 0.95) 100%)', //dalna hai grad
              boxShadow: 3, 
              borderRadius: 2,
              margin: '20px 0',
            }}>
              <CardContent>
                <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main">
                  Article Summary
                </Typography>
                <Typography variant="body1" color="textPrimary" paragraph>
                  {summary}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" fontWeight="bold">
                  Source Article:
                </Typography>
                <Typography variant="body2" color="primary" component="a" href={url || '#'} target="_blank" rel="noopener noreferrer" sx={{ wordBreak: 'break-word' }}>
                  {url}
                </Typography>
              </CardContent>
            </Card>
      
            {/* Chat Section */}
            <Card sx={{
              flex: 1, 
              bgcolor: 'white', 
              boxShadow: 3, 
              borderRadius: 2, 
              display: 'flex', 
              flexDirection: 'column',
              margin: '20px 0',
            }}>
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.main">
                  Discussion
                </Typography>
                <Box sx={{ flexGrow: 1, overflowY: 'auto', maxHeight: 400, mb: 2 }}>
                  {chatHistory.map((chat, index) => (
                    <ChatMessage key={index} isAI={chat.isAI} message={chat.message} />
                  ))}
                </Box>
                <Box component="form" onSubmit={handleSubmit} display="flex" gap={2}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Ask a question about the article..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Send
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Stack>
        </Container>
      </Box>   
        </>
  );
};

export default Article;
