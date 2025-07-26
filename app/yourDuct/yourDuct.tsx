// src/components/YourDocuments.tsx

import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AttachmentIcon from '@mui/icons-material/Attachment';

const files = [
  "National_ID_Front.JPG",
  "National_ID_Back.JPG",
  "National_ID_Selfie.JPG",
];

const YourDocuments = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        p: 2,
        minWidth: 250,
          maxWidth: 250,
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" mb={2}>
        Your Documents
      </Typography>
      <List dense>
        {files.map((file, index) => (
          <ListItem
            key={index}
            sx={{
              border: "1px solid #ddd",
              borderRadius: 1,
              mb: 1,
              px: 1,
            }}
            secondaryAction={
              <IconButton edge="end" aria-label="upload">
               
                <CloudUploadIcon fontSize="small" />
              </IconButton>
            }
          >
             <AttachmentIcon sx={()=>({marginRight: "5px", color: "gray",})} fontSize="inherit"/>
            <ListItemText primary={file} />
            
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default YourDocuments;
