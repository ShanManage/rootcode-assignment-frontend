import { useEffect, useState } from "react"
import { CustomButton } from "../../components/atom"
import { CreatePostModal, PostCard } from "../../components/post-management";
import { APP_STATUS, CreatePostFormFields, CreatePostPayload, TitleColor } from "../../interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { postAction } from "../../redux/action";
import { Card, Flex } from "antd";
import { resetStatus } from "../../redux/slice/post";
import styles from './HomeScreen.module.scss'

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false)

  const isLoading = useSelector((state: RootState) => state.post.isLoading)
  const createPostStatus = useSelector((state: RootState) => state.post.status)
  const allPosts = useSelector((state: RootState) => state.post.allPosts)

  useEffect(() => {
    dispatch(postAction.getAllPosts())
  }, [])

  useEffect(() => {
    if (!isLoading && createPostStatus === APP_STATUS.SUCCESS) {
      dispatch(resetStatus())
      onCloseCreateModal()
      dispatch(postAction.getAllPosts())
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
      <Card bordered={false} className={styles.createBtnCard}>
        <CustomButton
          size="large"
          type="primary"
          className='full-width'
          onClick={() => setIsOpenCreateModal(true)}
        >CREATE NEW POST</CustomButton>
      </Card>
      <Flex vertical gap={10}>
        {allPosts.map((post) => (
          <PostCard {...post} key={post.id} />
        ))}
      </Flex>
      <CreatePostModal
        isOpen={isOpenCreateModal}
        onFinish={onFinish}
        onClose={onCloseCreateModal}
      />
    </div>
  )
}

export default HomeScreen
