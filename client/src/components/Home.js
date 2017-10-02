import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SCCp } from '../styledComponents';
// import { truncate, media } from './styles-utils';
import { loadStores } from '../actions/actionCreators'

class Home extends PureComponent {

  componentDidMount() {
    this.props.loadStores();
  }

  render() {
    return (
      <div>
        {this.props.stores && this.props.stores.map((store, i) => {
          return (
            <div key={i} >
              <Link to={`/store/${store.slug}`} ><h2>{ store.name }</h2></Link>
              <Link to={`/add-store/${store._id}`} ><h5>EDIT</h5></Link>
              <SCCp>{ store.description }</SCCp>
            </div>
          )
        } )}
      </div>
    )
  }
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

Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default Home;
