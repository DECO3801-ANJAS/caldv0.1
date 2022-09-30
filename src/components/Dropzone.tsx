import React, {useCallback, useMemo} from 'react'
import {useDropzone} from 'react-dropzone'
import IFile from '../interfaces/models/file';

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

export default function MyDropzone() {
  const onDrop = useCallback(
    (acceptedFiles : IFile[]) =>  {
    console.log(acceptedFiles)
  }, [])

  const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject} = useDropzone({onDrop})

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

  return (
    <div className="container">
      <div
        {...getRootProps({ style })}
        data-cy='dropzone'
      >
        <input {...getInputProps()} />
        <p>Drag n drop some files here, or click to select files</p>
      </div>
    </div>
  )
}