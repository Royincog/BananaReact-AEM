// import React,{Component,useState} from "react";
// import {MapTo} from '@adobe/aem-react-editable-components';
// import {Modal,Button} from 'rsuite';




// function renderRsuiteModal(props){

//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     return {
//         modalText : props.modalText,
//         render : function () {
//                 return (
//                     <div className="modal-container">
//    <br/>
//         <Button onClick={handleOpen}>Disable</Button>
//    <br/>

//       <Modal backdrop="static" role="alertdialog" open={open} onClose={handleClose} size="xs">
//         <Modal.Body>
//             This is a modal !!!
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={handleClose} appearance="primary">
//             Ok
//           </Button>
//           <Button onClick={handleClose} appearance="subtle">
//             Cancel
//           </Button>
//         </Modal.Footer>
//       </Modal>
//                     </div>
//                 )
//         }
//     }
// }
// export default function BananaModal(props){
//     console.log(props);
//     return renderRsuiteModal(props).render();
//     }
// MapTo('bananaReact/components/bananaModal')(BananaModal);