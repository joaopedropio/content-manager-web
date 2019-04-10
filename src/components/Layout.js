import React from 'react';
import { Container } from 'reactstrap';
import { Switch } from 'react-router-dom';
import { NavMenu } from './NavMenu';

const Person = (props) => {
  const { children } = props;

  return (
    <div>
      <NavMenu />
      <Container>
        <Switch>
          {children}
        </Switch>
      </Container>
    </div>
  );
};

export default Person;
