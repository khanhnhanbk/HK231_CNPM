import { Typography, Button } from '@mui/material';
import MainCard from 'components/MainCard';
import { FileUploader } from 'react-drag-drop-files';
import { addRequest } from '../../controller/printRequest.controller';
import { useState } from 'react'
import PrintingRequest from '../../model/printRequest.model'

const fileTypes = ["doc", "docx", "pdf", "jpg", "jpeg", "png", "txt", "rtf", "xls", "xlsx", "ppt", "pptx", "gif", "bmp", "tif", "tiff", "csv", "zip", "rar", "7z", "gz", "tar", "mp3", "mp4", "mov", "avi", "mkv", "wav", "flac", "ogg", "wma", "aiff", "aac", "psd", "ai", "svg", "eps", "ps", "ttf", "otf", "woff", "woff2", "eot", "xps", "ps", "odt", "ods", "odp", "odg", "odf", "txt", "rtf", "html", "htm", "xhtml", "css", "js", "jsx", "c", "cpp", "h", "hpp", "java", "class", "cs", "vb", "py", "php", "asp", "aspx", "jsp", "xml", "json", "sh", "swift", "go", "rb", "sql", "r", "rmd", "yaml", "yml", "toml", "ini", "cfg", "reg", "conf", "vb", "vbs", "lua", "pl", "ps1", "bat", "cmd", "url", "desktop", "lnk", "md", "markdown", "tex", "log",];

const UploadPage = () => {
  const [files, setFiles] = useState(null);
  const handleChange = (uploadedFiles) => {
    setFiles(uploadedFiles);
  };
  const handleUpload = () => {
    console.log('Files dropped: ', files);
    let newRequest = new PrintingRequest(files.name, 'pending', '10/12/2023 10:00 AM', 7);
    addRequest(newRequest);
    console.log(files);
    setFiles(null);
  };
  return (
    <MainCard title="Upload file">
      <Typography variant="body2">
        Upload
      </Typography>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      <Button
        variant="contained"
        color="primary"
        size="small"
        sx={{ mt: 3 }}
        onClick={handleUpload}
      >
        Upload
      </Button>
    </MainCard>
  );
}

export default UploadPage;
