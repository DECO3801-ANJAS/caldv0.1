import React, {useCallback, useMemo} from 'react'
import {useDropzone} from 'react-dropzone'
import FileWithPreview from 'react-dropzone'
import IFile from '../interfaces/models/file';
import IDropzone from '../interfaces/props/myDropzoneProps';

const baseStyle : React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};


const thumbsContainer : React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16
};

const thumb : React.CSSProperties = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box"
};

const thumbInner : React.CSSProperties = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img : React.CSSProperties = {
  display: "block",
  width: "auto",
  height: "100%"
};

export default function MyDropzone({files, setFiles} : IDropzone) {

  const onDropFunc = useCallback(
    (inputFiles : IFile[]) =>  {
    setFiles((prev) => (prev.concat(inputFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    )[0])))
  }, [])

  const {
    getRootProps, 
    getInputProps, 
    isDragActive, 
    isDragAccept, 
    isDragReject} = useDropzone({
      maxFiles:5,
      accept: {"image/*" : ['.png', '.jpeg', '.jpg', '.img']},
      onDrop: onDropFunc
    })

  const removeFile = (file : IFile) => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt={file.name} />
      </div>
      <button onClick={removeFile(file)}>Remove File</button>
    </div>
  ));

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]); 

  React.useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview ? file.preview : ""));
    },
    [files]
  );

  return (
    <div className="container">
      <div
        {...getRootProps({ style })}
        data-cy='dropzone'
      >
        <input {...getInputProps()} />
        <p>Drag n drop some files here, or click to select files</p>
      </div>
      <div style={thumbsContainer}>{thumbs}</div>
    </div>
  )
}