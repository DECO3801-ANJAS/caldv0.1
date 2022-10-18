import React, {useCallback, useMemo} from 'react'
import {useDropzone} from 'react-dropzone'
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

  const[errorMessage, setErrorMessage] = React.useState("")
  const[error, setError] = React.useState(false)

  const onDropAccFunc = useCallback(
    (acceptedFiles: IFile[]) =>  {
      console.log(acceptedFiles)
        setError(false)
        setErrorMessage("")
        // setFiles((prev) => (prev.concat(acceptedFiles.map((file) =>
        //   Object.assign(file, {
        //     preview: URL.createObjectURL(file)
        //   })
        // )[0])))
        setFiles(acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        ))
  }, [])

  const {
    getRootProps, 
    getInputProps, 
    fileRejections,
    isDragActive, 
    isDragAccept, 
    isDragReject} = useDropzone({
      accept: {"image/*" : ['.png', '.jpeg', '.jpg', '.img']},
      onDropAccepted: onDropAccFunc,
      onDropRejected: (rejectedFiles) => {
        if(rejectedFiles.length > 5) {
          setError(true)
          setErrorMessage(rejectedFiles[0].errors[0].message)
        } else {
          setError(true)
          setErrorMessage("Files must be images")
        }
      },
      noDrag:true,
      multiple:true,
      maxFiles:5
    })

  const removeFile = (file : IFile) => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  const thumbs = files.length !== 0 ? files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt={file.name} />
      </div>
      <button onClick={removeFile(file)}>Remove File</button>
    </div>
  )) : (<></>);

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
        <p>Click to select files (max : 5)</p>
        {error && <p style={{color:"red"}}>{errorMessage}</p>}
      </div>
      <div style={thumbsContainer}>{thumbs}</div>
    </div>
  )
}