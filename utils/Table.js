import React from 'react';
import Proptypes from 'prop-types';
export default class Table extends React.PureComponent {
  static propTypes = {
    header: Proptypes.array,
    body: Proptypes.array,
    footer: Proptypes.array,
  };
  static defaultProps = {
    header: [],
    body: [],
    footer: [],
  };
  static Cells = ({ data = [], cell = 'td' }) => data.length ? (
      data.map((d) => (
          cell === 'th' ?
              <th key={`th-${getRandomKey()}`}>{d}</th> :
              <td key={`td-${getRandomKey()}`}>{d}</td>
      ))
  ) : null;
  render() {
    const { header, body, footer, ...rest } = this.props;
    const bodyRows = body.map((row) => (
        <tr key={`th-${getRandomKey()}`}>
          <Table.Cells data={row} />
        </tr>
    ));
    return (
        <table {...rest}>
          {header.length ? (
              <thead>
                <tr>
                  <Table.Cells data={header} cell="th" />
                </tr>
              </thead>
          ) : null}
          {body.length ? <tbody>{bodyRows}</tbody> : null}
          {footer.length ? (
              <tfoot>
                <tr>
                  <Table.Cells data={footer} />
                </tr>
              </tfoot>
          ) : null}
        </table>
    )
  }
}


/*
usage
const data = {
  headers: ['...', '...'],
  body: [
    ['...', '...'],
    ['...', '...'],  
  ],
  footer: ['...', '...'],
};
<Table {...data} />

*/