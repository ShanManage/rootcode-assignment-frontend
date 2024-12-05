import { useState } from "react"
import { CustomButton } from "../../components/atom"
import { CreatePostModal } from "../../components/post-management";

const HomeScreen = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false)

  const onFinish = () => {}

  const onCloseCreateModal = () => {
    setIsOpenCreateModal(false)
  }
  return (
    <div className="container">
      <CustomButton
        size="large"
        type="primary"
        className='full-width'
        onClick={() => setIsOpenCreateModal(true)}
      >CREATE NEW POST</CustomButton>
      <CreatePostModal
        isOpen={isOpenCreateModal}
        onFinish={onFinish}
        onClose={onCloseCreateModal}
      />
    </div>
  )
}

export default HomeScreen
