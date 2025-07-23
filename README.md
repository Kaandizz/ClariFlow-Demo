# ClariFlow Frontend

A ChatGPT-like chatbot built with Next.js 14, React 18, and Tailwind CSS.

## Features

### Drag-and-Drop File Upload

The chat interface supports drag-and-drop file upload functionality:

- **Drop Zone**: Users can drag and drop files anywhere on the main chat area
- **Visual Feedback**: A semi-transparent overlay with dashed border appears when dragging files
- **Supported Formats**: PDF (.pdf), Text (.txt), and Word (.docx) files
- **Automatic Upload**: Files are automatically uploaded to the backend `/upload` endpoint
- **Toast Notifications**: Success/error messages are displayed after upload attempts
- **Chat Integration**: Uploaded files are acknowledged in the chat with system messages

### Implementation Details

#### Components

1. **`DragAndDropWrapper`** (`src/components/chat/DragAndDropWrapper.tsx`)
   - Wraps the entire chat area
   - Handles drag-and-drop events
   - Provides visual feedback during drag operations
   - Validates file types before upload

2. **`Chat`** (`src/components/chat/Chat.tsx`)
   - Updated to use `DragAndDropWrapper`
   - Handles file upload logic
   - Displays toast notifications
   - Shows upload status in chat messages

3. **`Toast`** (`src/components/ui/Toast.tsx`)
   - Displays success/error notifications
   - Auto-dismisses after 3 seconds
   - Supports success and error types

#### File Upload Flow

1. User drags a file over the chat area
2. Visual overlay appears with drop instructions
3. On drop, file is validated for supported formats
4. File is uploaded to backend using `POST /upload`
5. Success/error toast is displayed
6. Upload confirmation appears in chat
7. Backend processes file for embeddings

#### API Integration

- Uses `axios` for HTTP requests
- Uploads to `POST /upload` endpoint
- Handles multipart/form-data
- Supports file type validation

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

```bash
npm run build
npm start
```

## Backend Integration

The frontend expects a FastAPI backend running on `http://localhost:8000` with the following endpoints:

- `POST /upload` - File upload endpoint
- `GET /health` - Health check endpoint

## File Type Support

- **PDF** (.pdf) - `application/pdf`
- **Text** (.txt) - `text/plain`
- **Word** (.docx) - `application/vnd.openxmlformats-officedocument.wordprocessingml.document`

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── chat/        # Chat-related components
│   └── layout/      # Layout components
├── lib/             # Utility functions and API client
└── styles/          # Global styles
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
