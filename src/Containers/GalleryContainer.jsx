import Gallery from './Gallery';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);