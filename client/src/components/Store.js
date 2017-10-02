import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { SCCh1 } from '../styledComponents';
import { loadStores } from '../actions/actionCreators'

class Store extends PureComponent {

  componentDidMount() {
    if (!this.props.stores.length) {
      this.props.loadStores();
    }
  }

  render() {
    const store = this.props.stores.find(store => store.slug === this.props.match.params.slug);
    return (
      <div>
        <SCCh1>{store && store.name}</SCCh1>
        <p>{store && store.description}</p>
      </div>
    )
  }
};

Store.propTypes = {
  match: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    stores: state.stores
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadStores: () => dispatch(loadStores())
  }
}

Store = connect(
  mapStateToProps,
  mapDispatchToProps
)(Store)

export default Store;
