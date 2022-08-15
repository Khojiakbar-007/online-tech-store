import CircularProgress from '@mui/material/CircularProgress';

function WithLoadingSpinner({ loading, children }) {
  if (loading)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 136px + 80px)',
        marginTop: '-80px'
      }}
    >
      <CircularProgress style={{ width: '60px', height: '120px' }} />
    </div>
  );

  return <>{children}</>;
}

export default WithLoadingSpinner;
