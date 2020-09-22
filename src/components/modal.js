import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import React, { useState } from "react";

function MyVerticallyCenteredModal(props) {
  console.log(props, "in vercenter");

  // const checkInput = (book) => {
  //   // input check
  //   console.log("meow checkInput");
  // };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a new book
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* create input to get book object here */}
        <form>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Bookname"
              onChange={(e) => {
                props.onClick(e);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              name="author"
              placeholder="Author name"
              onChange={(e) => {
                props.onClick(e);
              }}
            />
          </div>
          <div>
            <input
              type="number"
              name="pages"
              placeholder="Pages"
              onChange={(e) => {
                props.onClick(e);
              }}
            />
          </div>
          <div>
            <input
              type="radio"
              id="read"
              name="read"
              value="read"
              onChange={(e) => {
                props.onClick(e);
              }}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide();
            props.onClick();
          }}
        >
          Submit
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function AppModal(props) {
  const [modalShow, setModalShow] = React.useState(false);
  console.log(props);
  // const func = props.onClick;

  // when calling a couple of fucntions onClick,
  // create another helper function to wrap all fuctninos together
  // const handleClickModal = () => {
  //   // e.preventDefault();
  //   props.onClick(); // needs parenthesis
  //   // setModalShow(false);
  // };

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add a new book!
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        // onClick={handleClickModal}
        onClick={props.onClick}
      />
    </>
  );
}

export default AppModal;

////////////////////////////////////////

// function EXample() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default EXample;

/////////////////////////////////

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// function ModalApp() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// // render(<ModalApp />);

// export default ModalApp;
