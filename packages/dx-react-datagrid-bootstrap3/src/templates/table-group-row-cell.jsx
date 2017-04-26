import React from 'react';

export const TableGroupRowCell = ({ style, colspan, row, isExpanded, toggleGroupExpanded }) => (
  <td
    colSpan={colspan}
    style={style}
    onClick={toggleGroupExpanded}
  >
    <i className={`glyphicon glyphicon-triangle-${isExpanded ? 'bottom' : 'right'}`} /> <strong>{row.column.title}: {row.value}</strong>
  </td>
);

TableGroupRowCell.propTypes = {
  style: React.PropTypes.shape(),
  colspan: React.PropTypes.number,
  row: React.PropTypes.shape(),
  isExpanded: React.PropTypes.bool,
  toggleGroupExpanded: React.PropTypes.func,
};

TableGroupRowCell.defaultProps = {
  style: null,
  colspan: 1,
  row: {},
  isExpanded: false,
  toggleGroupExpanded: () => {},
};