import { useEffect, useState } from "react"
import { CustomButton } from "../../components/atom"
import { CreatePostModal } from "../../components/post-management";
import { APP_STATUS, CreatePostFormFields, CreatePostPayload, TitleColor } from "../../interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { postAction } from "../../redux/action";

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false)

  const isLoading = useSelector((state: RootState) => state.post.isLoading)
  const createPostStatus = useSelector((state: RootState) => state.post.status)

  useEffect(() => {
    if(!isLoading && createPostStatus === APP_STATUS.SUCCESS) {
      onCloseCreateModal()
    }
  }, [isLoading, createPostStatus])

  const onFinish = (value: CreatePostFormFields) => {
    const payload: CreatePostPayload = {
      ...value,
      titleColor: TitleColor.BLUE
    }
    dispatch(postAction.createPost(payload))
  }

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
