import React,{Component} from 'react';
import ModalVideo from 'react-modal-video'
import '../../../../node_modules/react-modal-video/scss/modal-video.scss'
import './modal.scss'
class Modal extends Component{
state={
    isOpen : false
}
//this.openModal = this.openModal.bind(this)
openModal=()=>{
   
    this.setState({
        isOpen : true
    })
}
render(){
    return (
        <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.video_key} onClose={() => this.setState({isOpen: false})} />
        <button onClick={this.openModal} className="trailer-btn">Watch Trailer!</button>
      </div>
    )
}
}
export default Modal;