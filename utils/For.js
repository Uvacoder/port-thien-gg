import { PureComponent, createElement } from 'react';
import Proptypes from 'prop-types';
export default class For extends PureComponent {
  static propTypes = {
    of: Proptypes.array,
    type: Proptypes.string.isRequired,
    parent: Proptypes.string,
    iteratee: Proptypes.string,
  };
  getIteratee = (item) => {
    return item[this.props.iteratee] || item[Object.keys(item)[0]];
  };
  list = () => {
    const { of, type } = this.props;
    return of.map((item) => {
      const children = typeof item === 'object' ? this.getIteratee(item) : item;
      return createElement(type, {
        key: getRandomKey()
      }, children)
    })
  };
  children = () => {
    const { parent } = this.props;
    return parent ? createElement(parent, null, this.list()) : this.list();
  };
  render() {
    return this.props.of.length ? this.children() : null;
  }
}

/*
usage:

const data = ['...', '...', '...'];
<For of={data} type='p' />
const anotherData = [
  {
   label: '...',
   value: '...',
  }
  {
   label: '...',
   value: '...',
  }
  {
   label: '...',
   value: '...',
  }
];
<For of={anotherData} type='li' parent='ul' iteratee='label' />
*/