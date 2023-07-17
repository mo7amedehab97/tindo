import Modal from './Modal'
import ModalContent from './ModalContent'

const ModalExample = () => {
  return (
    <Modal>
    <ModalContent>
      <h2>This is the Modal Content</h2>
      <p>You can display any type of content here.</p>
      <button>Submit</button>
    </ModalContent>
  </Modal>
  )
}

export default ModalExample