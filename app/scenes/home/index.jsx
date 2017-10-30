import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Flag from './components/flag';
import {
  Table,
  TableBody
} from 'material-ui';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flags: []
    };
  }
  render() {
    const { flags } = this.state;
    return (
      <div>
        <Table>
          <TableBody>
            {flags.map((flag, index) =>
              <Flag
                id={index}
                flagType={flag.flagType}
                startDate={flag.startDate}
                endDate={flag.endDate}
              />
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    flags: flags
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HomeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);