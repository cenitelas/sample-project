import Main from './Main';
import {connect} from 'react-redux';
import {getImages} from "../Actions/headerActions";

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => ({
    getImages : (limit)=>dispatch(getImages(limit))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);