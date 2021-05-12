import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import styled from "styled-components";

const ActiveLink = ({ href, activeClassName, children, as }) => {
  const router = useRouter();

  const child = React.Children.only(children);

  const className = activeClassName;
  const classPath = router.asPath.split("/")[2];

  if (classPath === activeClassName) {
    return (
      <Link href={href} as={as}>
        <Active> {React.cloneElement(child, { className })}</Active>
      </Link>
    );
  }
  return (
    <Link href={href} as={as}>
      {React.cloneElement(child, { className })}
    </Link>
  );
};

ActiveLink.propTypes = {
  href: PropTypes.string,
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};
ActiveLink.defaultProps = {
  href: "",
  activeClassName: "",
};

const Active = styled.div`
  a {
    color: ${(prop) => prop.theme.palette.$primarycolor};
  }
  font-size: 1rem;
`;

export default ActiveLink;
