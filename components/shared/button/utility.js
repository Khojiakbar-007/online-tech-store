import Link from 'next/link';

const Linker = ({ children, href }) => {
  if (!href && href !== '') return <>{children}</>;

  return <Link href={href}>{children}</Link>;
};

export default Linker;
