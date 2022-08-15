import { Button } from '@mui/material';
import Link from 'next/link';

// prettier-ignore
const SimpleButton = ({ inverted, fullWidth, children, href, width, height, ...rest }) => {
  let styles = {
    backgroundColor: 'var(--color-3)',
    color: 'var(--color-11)',

    borderRadius: '50px',
    height: '37px',
    width: '130px',
    textTransform: 'capitalize',
    fontSize: '14px',
    lineHeight: '21px',
  };

  if (inverted)
    styles = {
      ...styles,
      backgroundColor: 'var(--color-11)',
      color: 'var(--color-3)',
      border: '2px solid var(--color-3)',

      '&:hover': {
        backgroundColor: 'var(--color-3)',
        color: 'var(--color-11)',
      },
    };

  if (fullWidth) styles.width = 'calc(100% - 60px)';

  if (width) styles.width = width;
  if (height) styles.height = height;

  // let childs = children;
  if (href)
    return (
      <Button {...rest} variant="contained" sx={styles}>
        <Link href={href}>
          <span>{children}</span>
        </Link>
      </Button>
    );

  return (
    <Button {...rest} variant="contained" sx={styles}>
      {children}
    </Button>
  );
};

export default SimpleButton;
