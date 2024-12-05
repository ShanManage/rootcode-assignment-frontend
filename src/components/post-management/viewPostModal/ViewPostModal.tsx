import { Card, Divider, Flex, Form, Modal, Space } from "antd"
import PostCard from "../postCard/PostCard"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../redux/store"
import { CustomButton } from "../../atom"
import { APP_STATUS, CreatePostCommentFormField, CreatePostCommentPayload } from "../../../interface"
import TextArea from "antd/es/input/TextArea"
import { postAction } from "../../../redux"
import { resetStatus } from "../../../redux/slice/post"
import { useEffect } from "react"

export interface ViewPostModalProps {
  isOpen: boolean
  onClose: () => void
}

const ViewPostModal = ({
  isOpen,
  onClose
}: ViewPostModalProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const isLoading = useSelector((state: RootState) => state.post.isLoading)
  const post = useSelector((state: RootState) => state.post.viewPost)
  const createPostCommentStatus = useSelector((state: RootState) => state.post.status)

  useEffect(() => {
    if (!isLoading && createPostCommentStatus === APP_STATUS.SUCCESS) {
      dispatch(resetStatus())
      dispatch(postAction.getPost(post.id))
    }
  }, [isLoading, createPostCommentStatus])

  const onFinish = (value: CreatePostCommentFormField) => {
    const payload: CreatePostCommentPayload = {
      ...value,
      postId: post.id
    }
    dispatch(postAction.createPostComment(payload))
  }
  return (
    <Modal
      title="VIEW POST"
      open={isOpen}
      onCancel={onClose}
      footer={null}
      loading={isLoading}
    >
      <PostCard isDisable={true} onClick={undefined} {...post} key={post.id} />
      <Divider />
      <Flex vertical gap={10}>
        {post.comments?.map((comment) => (
          <Card hoverable className="full-width" key={comment.id}>
            <p>{comment.content}</p>
          </Card>
        ))}
      </Flex>
      <Divider />
      <Form onFinish={onFinish}>
        <Space direction="vertical" className="full-width">
          <Form.Item<CreatePostCommentFormField>
            name="content"
            rules={[{ required: true, message: 'Please enter post description' }]}
          >
            <TextArea
              size='large'
              rows={4}
              placeholder='Enter your comment'
            />
          </Form.Item>

          <Form.Item>
            <CustomButton
              type="primary"
              size='large'
              htmlType="submit"
              className='full-width'
              loading={isLoading}
            >
              CREATE COMMENT
            </CustomButton>
          </Form.Item>

        </Space>
      </Form>
    </Modal>
  )
}

export default ViewPostModal
